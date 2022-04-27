import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import {ProductConsumer,ProductProvider} from "./components/context"
import { useToasts } from "react-toast-notifications";


import PoseNet from "./posenet/components/PoseNet";

import { poseSimilarity } from "./posenet_utils";

import POSE_MAP from "./data/moves"; // maps image names to pose objects.

import "./Room.css";


const SIMILARITY_THRESHOLD_EXCELLENT = 0.25;
const SIMILARITY_THRESHOLD_GOOD = 0.55;
const SIMILARITY_THRESHOLD_OKAY = 0.8;

let i=0;

function Room(props) {
  const location= useLocation();
  const {imgSrc}= location.state;
  // const { addToast } = useToasts();
  /* ============================================ INIT STATE ============================================ */
  // Game State
  const [ready, setReady] = useState(false);
  const [correctFrames, setCorrectFrames] = useState(0);
  const [totalFrames, setTotalFrames] = useState(0);
  const imageRef = useRef();



  let video_link = `
<iframe width="560" height="315" src="https://www.youtube.com/embed/XNTuOaFyH0I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  `
   if(imgSrc == "poses/bigtoepose.jpg"){

    video_link=`
    <iframe width="560" height="315" src="https://www.youtube.com/embed/aYIfSGGE85I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `
   }
   else if(imgSrc == "poses/chairpose.jpg"){
    video_link=`
    <iframe width="560" height="315" src="https://www.youtube.com/embed/Pb9Xx7o__os" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `
   }
   else if(imgSrc == "poses/eagle.png"){
    video_link=`
    <iframe width="560" height="315" src="https://www.youtube.com/embed/fC9XQWc6ukk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `
  }
  else if(imgSrc == "poses/tadasana.png"){
    video_link=`
    <iframe width="560" height="315" src="https://www.youtube.com/embed/rPJJIacKWsk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `
  }
  else if(imgSrc == "poses/vrksasana.png"){
    video_link=`
    <iframe width="560" height="315" src="https://www.youtube.com/embed/yVE4XXFFO70" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `
  }
  else if(imgSrc == "poses/half-moon.png"){
    video_link=`
    <iframe width="560" height="315" src="https://www.youtube.com/embed/EriPRTk1ly0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    `
  }



  // TODO: handle loading of reference image poses.
  const [imageName, setImageName] = useState("tadasana.png");
  const [imagePose, setImagePose] = useState(POSE_MAP[imageName]);

  const [similarity, setSimilarity] = useState();

  /* ============================================ WEBSOCKETS ============================================ */

  // Log message output and change app state
  useEffect(() => {
    setCorrectFrames(0);
    setTotalFrames(0);
    setImageName("tadasana.png");
    setImagePose(POSE_MAP["tadasana.png"]);
  }, []);

  // Submit Score
  //const [i, seti] = useState(0);

  // const poses = ['chairpose.jpg', 'dance.png', 'eagle.png', 'garland.png', 'gate.png', 'half-moon.png', 'parivrtta-trikonasana.png', 'tadasana.png', ' vrksasana.png'];
  // useEffect(() => {
  //   //seti(0);
  //   // setCorrectFrames(0);
  //   // setTotalFrames(0);
  //   const score = Math.round((correctFrames / totalFrames) * 10000);
  //   // console.log("scoring");
  //   // console.log(correctFrames);
  //   // console.log(totalFrames);
  //   // console.log(score);
  //   var changePoses = setInterval(function () {

  //     //seti(i+1);
  //     i=i+1
  //     console.log("i : ",i);
  //     if (i === poses.length-1) {
  //       clearInterval(changePoses);
  //     }
  //     setImageName(poses[i]);
  //     setImagePose(POSE_MAP[poses[i]]);
  //   }, 10000)
  // }, []);

  /* ============================================ TWILIO ============================================ */

  /* ========================================= POSENET + SCORING ========================================= */

  const handlePose = (pose) => {
    if (!imagePose || !pose) {
      return;
    }

    // handle scoring of video pose
    const s = poseSimilarity(imagePose, pose);
    setSimilarity(s);

    // on initial pose, set ready if true.
    // exploits the fact that ready is only changed once.
    // TODO: tune threshold
    if (!ready && s < SIMILARITY_THRESHOLD_EXCELLENT) {
      setReady(true);
    }
  };

  // UpdateScore
  // useEffect(() => {
  //   setTotalFrames(totalFrames + 1);
  //   if (similarity <= SIMILARITY_THRESHOLD_EXCELLENT) {
  //     setCorrectFrames(correctFrames + 1);
  //   } else if (similarity <= SIMILARITY_THRESHOLD_GOOD) {
  //     setCorrectFrames(correctFrames + 0.6);
  //   } else if (similarity <= SIMILARITY_THRESHOLD_OKAY) {
  //     setCorrectFrames(correctFrames + 0.3);
  //   } else {
  //     setCorrectFrames(correctFrames + 0.1);
  //   }
  // }, [similarity, totalFrames, correctFrames]);

  /* ============================================ RENDER ============================================ */

  const DisplayScore = () => {
    let score = Math.round((1 - similarity) * 100);
    let str = null;
    let color = null;
    if (similarity <= SIMILARITY_THRESHOLD_EXCELLENT) {
      str = "Excellent!! Accuracy:";
      color = "#27ae60";
    } else if (similarity <= SIMILARITY_THRESHOLD_GOOD) {
      str = "Good! Try acieving the right position..Accuracy:";
      color = "#7bed9f";
    } else if (similarity <= SIMILARITY_THRESHOLD_OKAY) {
      str = "Position seems to be incorrect..Accuracy:";
      color = "orange";
    } else {
      str = "Start..";
      color = "red";
    }
    return (
      <h1 style={{ color: color }}>
        {str} {score}
      </h1>
    );
  };
  return (
    <ProductProvider>
    <ProductConsumer>
{(value) => {
               const {img}=value.detailProduct
  return (

    <div className="room">
      <div className="header">
        <h1 className="title display">
          <a href="/">HealthGuru</a>
        </h1>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      </div>

      <div className="main-container">
           <div>   
          <img
            className="reference-img"
            ref={imageRef}
            src={imgSrc}
            style = {{ width : '700px' , height : '400px' }}

          />
                <div dangerouslySetInnerHTML={{ __html: video_link }} />
          
                </div>
         {/* <h1 className="title display">
          <a href="/">Image Pose to Copy</a>
        </h1> */}

        <div className="local-participant">
          <div className="video-wrapper">
            {
              <>
                <PoseNet
                  className="posenet"
                  frameRate={15}
                  // modelConfig={{
                  //   architecture: 'ResNet50',
                  //   quantBytes: 4,
                  //   outputStride: 32,
                  //   inputResolution: 193,
                  // }}
                  modelConfig={{
                    architecture: "MobileNetV1",
                    outputStride: 16,
                    multiplier: 0.75,
                  }}
                  inferenceConfig={{
                    decodingMethod: "single-person",
                    maxDetections: 1,
                  }}
                  onEstimate={(pose) => handlePose(pose)}
                  drawSkeleton={!ready}
                />

                <DisplayScore />
              </>
            }
          </div>
        </div>
      </div>
    </div>
    )}}

    </ProductConsumer>
    </ProductProvider>


  );
}
export default Room;