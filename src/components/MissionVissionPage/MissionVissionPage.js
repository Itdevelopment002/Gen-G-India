import React from 'react';
import PageTitle from '../../utils/templates/PageTitle';
import Image1 from "../../assets/images/vertical-line-bg-medium-gray.svg"
import Image2 from "../../assets/images/about/vision-mission.webp"


const MissionVissionPage = () => {
  return (
    <>
      <PageTitle
        title="Mission, Vision & Objective"
        breadcrumbs={[
          { label: "Home", link: "index.php" },
          { label: "About Us", link: "about.php" },
          { label: "Mission, Vision & Objective" }
        ]}
        animationDelay={100}
      />

      <section class="background-position-center-top pt-4 pb-4" style={{ backgroundImage: `url('${Image1}')` }}>
        <div class="container">
          <div class="row justify-content-center align-items-center">
            <div class="col-md-5 animation-float sm-mb-50px" data-anime='{ "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'>
              <img class="border-radius-8px" src={Image2} alt="vision-mission" />
            </div>
            <div class="col-lg-7 col-md-6 text-center text-md-start" data-anime='{ "el": "childs", "willchange": "transform", "opacity": [0, 1], "rotateY": [-90, 0], "rotateZ": [-10, 0], "translateY": [80, 0], "translateZ": [50, 0], "staggervalue": 200, "duration": 600, "delay": 100, "easing": "easeOutCirc" }'>
              <h2 class="fs-32 text-dark-gray fw-600 ls-minus-1px mb-10px">Our Vision</h2>
              <p class="alt-font w-100 xl-w-85 lg-w-90 md-w-100 mb-5px">
                To help enterprises unlock their true potential as powerful agents of positive and sustainable change.
              </p>
              <p class="alt-font w-100 xl-w-85 lg-w-90 md-w-100 mb-10px">
                To equip social enterprises with the right tools, support, and resources needed to thrive and make a difference.
              </p>


              <h2 class="fs-32 text-dark-gray fw-600 ls-minus-1px mb-10px">Our Mission</h2>
              <p class="alt-font w-100 xl-w-85 lg-w-90 md-w-100 mb-10px">
                To build a dynamic platform that brings together entrepreneurs and enterprises, fostering meaningful connections and collaboration.
              </p>
              <p class="alt-font w-100 xl-w-85 lg-w-90 md-w-100 mb-10px">
                To strengthen both national and local entrepreneurship networks that inspire innovation and growth.
              </p>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default MissionVissionPage;