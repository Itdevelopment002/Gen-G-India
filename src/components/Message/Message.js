import React from 'react';
import PageTitle from '../../utils/templates/PageTitle';
import Image1 from "../../assets/images/vertical-line-bg-medium-gray.svg"
import Image2 from "../../assets/images/about/message.jpg"


const Message = () => {
    return (
        <>
            <PageTitle
                title="Message"
                breadcrumbs={[
                    { label: "Home", link: "/home" },
                    { label: "About Us", link: "/about-us" },
                    { label: "Message" }
                ]}
            />

            <section class="background-position-center-top pt-4 pb-4" style={{ backgroundImage: `url('${Image1}')` }}>
                <div class="container">
                    <div class="row justify-content-center align-items-center">
                        <div class="col-md-5 animation-float sm-mb-50px" data-anime='{ "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'>
                            <img class="border-radius-8px" src={Image2} alt="message" />
                        </div>
                        <div class="col-lg-7 col-md-6 text-center text-md-start" data-anime='{ "el": "childs", "willchange": "transform", "opacity": [0, 1], "rotateY": [-90, 0], "rotateZ": [-10, 0], "translateY": [80, 0], "translateZ": [50, 0], "staggervalue": 200, "duration": 600, "delay": 100, "easing": "easeOutCirc" }'>
                            <h2 class="fs-32 text-dark-gray fw-600 ls-minus-1px">Empowering Communities Through Entrepreneurship and Innovation</h2>
                            <p class="alt-font w-100 xl-w-85 lg-w-90 md-w-100 mb-20px">We are a dedicated volunteer organization committed to empowering youth, farmers, and women by fostering entrepreneurship.
                                Through numerous district-level Startup Yatra workshops, we have reached and inspired hundreds
                                of thousands of aspiring entrepreneurs.
                                Our initiatives have supported thousands of entrepreneurs and startups, helping create tens of
                                thousands of new job opportunities.
                                With a growing community spanning thousands across the globe, we remain focused on driving
                                meaningful economic and social impact through entrepreneurship.</p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};
export default Message;