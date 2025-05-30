import React from 'react';
import PageTitle from '../../utils/templates/PageTitle';
import Image1 from "../../assets/images/vertical-line-bg-medium-gray.svg"
import Image2 from "../../assets/images/about/other.jpg"

const Other = () => {
    return (
        <>
            <PageTitle
                title="Other"
                breadcrumbs={[
                    { label: "Home", link: "/home" },
                    { label: "About Us", link: "/about-us" },
                    { label: "Other" }
                ]}
            />

            <section class="background-position-center-top pt-4 pb-4" style={{ backgroundImage: `url('${Image1}')` }}>
                <div class="container">
                    <div class="row justify-content-center align-items-center">
                        <div class="col-md-5 animation-float sm-mb-50px" data-anime='{ "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'>
                            <img class="border-radius-8px" src={Image2} alt="other" />
                        </div>
                        <div class="col-lg-7 col-md-6 text-center text-md-start" data-anime='{ "el": "childs", "willchange": "transform", "opacity": [0, 1], "rotateY": [-90, 0], "rotateZ": [-10, 0], "translateY": [80, 0], "translateZ": [50, 0], "staggervalue": 200, "duration": 600, "delay": 100, "easing": "easeOutCirc" }'>
                            <p class="alt-font w-100 xl-w-85 lg-w-90 md-w-100 mb-20px">
                                In addition to our core initiatives, we are dedicated to broadening our impact through diverse
                                programs and strategic collaborations.
                            </p>
                            <p class="alt-font w-100 xl-w-85 lg-w-90 md-w-100 mb-20px">
                                We regularly host workshops, networking events, and knowledge-sharing forums to foster
                                continuous learning and community engagement.
                            </p>
                            <p class="alt-font w-100 xl-w-85 lg-w-90 md-w-100 mb-20px">
                                Our team actively seeks new opportunities and partnerships that can provide further support to
                                entrepreneurs and startups.
                            </p>
                            <p class="alt-font w-100 xl-w-85 lg-w-90 md-w-100 mb-20px">
                                We are committed to inclusivity, ensuring individuals from all backgrounds have equitable access to
                                resources and guidance.
                            </p>
                            <p class="alt-font w-100 xl-w-85 lg-w-90 md-w-100 mb-20px">
                                By embracing innovation and adaptability, we aim to cultivate an ecosystem where every
                                entrepreneur has the opportunity to flourish.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};
export default Other;