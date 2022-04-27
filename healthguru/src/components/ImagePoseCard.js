import React, { Component } from 'react'

import {Link} from "react-router-dom"
import {ProductConsumer} from "./context"


export default class Product extends Component {

    render() {
        const {id,title,img}=this.props.product

         return (
            <div className1="col-12 mx-auto col-md-12 col-lg-12 my-3" >

            <div style={{width:"80vw",display:"flex"}}>

            <Link  to={{pathname:"/room",state:{imgSrc:img}}} style={{flexGrow:1}}>

            <img  src={img} alt="product" className="card-img-top" style={{width:"200px",height:"200px"}}/>
            <div className="card-footer d-flex justify-content-between" >
                             <p className="align-self-center mb-0" >
                                 {title}
                             </p>
                         </div> </Link>

                         <p style={{color:"white",width:"70vw",fontSize:"15px",padding:"5px",flexGrow:1}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
                {/* <div className="card" >
                <ProductConsumer>
                {(value) => (
                    <div className="img-container p-5" 
                onClick={() => 
                value.handleDetail(id)
                }
                // style={{width:"100%",height:"150px"}}
                >


                    <Link  to={{pathname:"/room",state:{imgSrc:img}}}>

                    <img  src={img} alt="product" className="card-img-top"/>

                    </Link>
                         </div>
                )}

                </ProductConsumer>
                         {/* card footer */}
                         {/* <div className="card-footer d-flex justify-content-between" >
                             <p className="align-self-center mb-0" >
                                 {title}
                             </p>
                         </div> */}
                {/* </div> */} 

            </div>

        )
    }
}

