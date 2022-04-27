import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}
const FeaturesTiles = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'features-tiles section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-tiles-inner section-inner pt-0',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap center-content',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: "Yoga For Health",
    paragraph: "Doesn't matter if you are a beginner or pro, there is something for all of you. You can get fit from the comfort of your home without additional hardware setup."
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container"  style={{background: "#36454F"}}>
        <div className={innerClasses}>
        <div class="features-split-inner section-inner has-top-divider"></div>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>

          <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-04.svg')}
                      alt="Features tile icon 04"
                      width={80}
                      height={80} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Improves Quality of Life
                    </h4>
                  <p className="m-0 text-sm">
                  yoga may help improve sleep quality, enhance spiritual well-being, improve social function and reduce symptoms of anxiety and depression
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-05.svg')}
                      alt="Features tile icon 05"
                      width={80}
                      height={80} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                    Decreases Stress
                    </h4>
                  <p className="m-0 text-sm">
                  When used alone or along with other methods of alleviating stress, such as meditation, yoga can be a powerful way to keep stress in check
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-06.svg')}
                      alt="Features tile icon 01"
                      width={80}
                      height={80} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                  Heals Emotions
                    </h4>
                  <p className="m-0 text-sm">
                  Through yoga, you can release the emotional toxicity stored in the body. Just as changing thought patterns can influence the body, changing the position of the body can influence the mind and facilitate emotional release.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-02.svg')}
                      alt="Features tile icon 01"
                      width={80}
                      height={80} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                  Promotes Healthy Eating Habits
                    </h4>
                  <p className="m-0 text-sm">
                  Yoga was found to cause a decrease in episodes of binge eating, an increase in physical activity and a small decrease in weight.
              Practicing mindfulness through yoga can aid in the development of healthy eating habits.
                    </p>
                </div>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
                <div className="features-tiles-item-header">
                  <div className="features-tiles-item-image mb-16">
                    <Image
                      src={require('./../../assets/images/feature-tile-icon-01.svg')}
                      alt="Features tile icon 01"
                      width={80}
                      height={80} />
                  </div>
                </div>
                <div className="features-tiles-item-content">
                  <h4 className="mt-0 mb-8">
                  Improves Flexibility and Balance
                    </h4>
                  <p className="m-0 text-sm">
                  Practicing just 15–30 minutes of yoga each day could make a big difference for those looking to enhance performance by increasing flexibility and balance.
                    </p>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
     
    </section>
  );
}

FeaturesTiles.propTypes = propTypes;
FeaturesTiles.defaultProps = defaultProps;

export default FeaturesTiles;