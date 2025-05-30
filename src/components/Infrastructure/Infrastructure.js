import React from 'react';
import PageTitle from '../../utils/templates/PageTitle';
import Image1 from "../../assets/images/vertical-line-bg-medium-gray.svg"
import Image2 from "../../assets/images/about/infrastructure.jpg"

const Infrastructure = () => {
    return (
        <>
            <PageTitle
                title="Infrastructure"
                breadcrumbs={[
                    { label: "Home", link: "/home" },
                    { label: "About Us", link: "/about-us" },
                    { label: "Infrastructure" }
                ]}
            />

            <section class="background-position-center-top pt-4 pb-4" style={{ backgroundImage: `url('${Image1}')` }}>
                <div class="container">
                    <div class="row justify-content-center align-items-center">
                        <div class="col-md-5 animation-float sm-mb-50px" data-anime='{ "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'>
                            <img class="border-radius-8px" src={Image2} alt="infrastructure" />
                        </div>
                        <div class="col-lg-7 col-md-6 text-center text-md-start" data-anime='{ "el": "childs", "willchange": "transform", "opacity": [0, 1], "rotateY": [-90, 0], "rotateZ": [-10, 0], "translateY": [80, 0], "translateZ": [50, 0], "staggervalue": 200, "duration": 600, "delay": 100, "easing": "easeOutCirc" }'>
                            <h2 class="fs-32 text-dark-gray fw-600 ls-minus-1px">A Hub for Startup Success</h2>
                            <p class="alt-font w-100 xl-w-85 lg-w-90 md-w-100 mb-20px">
                                We provide facilities that help entrepreneurs grow and succeed.
                            </p>
                            <p class="alt-font w-100 xl-w-85 lg-w-90 md-w-100 mb-20px">
                                Our training centers and workspaces are equipped with modern technology to support learning and
                                collaboration.
                            </p>
                            <p class="alt-font w-100 xl-w-85 lg-w-90 md-w-100 mb-20px">
                                With reliable internet and communication systems, entrepreneurs can effectively develop and share
                                their ideas.
                            </p>
                            <p class="alt-font w-100 xl-w-85 lg-w-90 md-w-100 mb-20px">
                                We are connected with industry experts and mentors who offer guidance and support at every step.
                                Together, these resources create a strong foundation where new businesses and startups have the
                                opportunity to thrive.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};
export default Infrastructure;