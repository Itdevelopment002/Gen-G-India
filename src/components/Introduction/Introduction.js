import React from 'react';
import PageTitle from '../../utils/templates/PageTitle';
import Introimage from '../../assets/images/about/about-inner-left.jpg'
import Image from '../../assets/images/about/demo-green-energy-about-img-02.jpg'

const Introduction = () => {
    return (
        <>
            <PageTitle
                title="Introduction"
                breadcrumbs={[
                    { label: "Home", link: "/home" },
                    { label: "About Us", link: "/about-us" },
                    { label: "Introduction" }
                ]}
            />

            <section>
                <div class="container">
                    <div class="row align-items-center justify-content-md-center g-xl-0 g-1">
                        <div class="col-lg-6 col-md-10 text-end md-mb-10 sm-mb-15" data-anime='{"opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 200, "easing": "easeOutQuad" }'>
                            <figure class="position-relative m-0">
                                <img class="lg-w-90 border-radius-10px" src={Introimage} alt="about-inner-left" />
                                <figcaption class="position-absolute box-shadow-double-large border-radius-8px overflow-hidden bottom-minus-50px lg-bottom-minus-30px left-0px xl-left-minus-20px lg-left-0px w-250px lg-w-250px pt-30px pb-30px lg-pt-50px lg-pb-50px ps-5px pe-5px text-center cover-background" style={{ backgroundImage: `url('${Image}')` }} data-bottom-top="transform: translateY(-50px)" data-top-bottom="transform: translateY(50px)">
                                    <span class="fs-55 text-white ls-minus-4px position-relative fw-600">500+</span>
                                    <span class="d-block mx-auto fs-20 lh-26 w-70 text-center text-white">Members Joined in last 5 years.</span>
                                </figcaption>
                            </figure>
                        </div>
                        <div class="col-md-10 col-xl-5 offset-xl-1 col-lg-6" data-anime='{ "el": "childs", "translateY": [50, 0], "opacity": [0,1], "duration": 1200, "delay": 0, "staggervalue": 150, "easing": "easeOutQuad" }'>
                            <div class="mb-10px">
                                <span class="w-30px h-2px fs-15 d-inline-block bg-base-color me-5px align-middle"></span>
                                <span class="text-uppercase text-base-color fs-16 fw-600 d-inline-block">About Gen G India Entrepreneurs Association</span>
                            </div>
                            <h3 class="text-dark-gray fw-700 ls-minus-2px">We are Leaders in Entrepreneurs Association.</h3>
                            <p class="w-90 sm-w-100 text-black alt-font"><b>Gen G India Entrepreneurs Association</b> was established with a vision to <b>empower youth, women,
                                and grassroots communities</b> through the transformative power of entrepreneurship. Since its
                                inception, the organization has actively promoted a culture of innovation and self-reliance by
                                organizing district-level startup workshops, skill-building sessions, and entrepreneur engagement
                                programs across India.</p>
                            <div class="d-inline-flex flex-wrap">
                                <a href="become-member.php" class="btn btn-extra-large btn-base-color btn-rounded btn-switch-text btn-box-shadow d-inline-block me-20px mt-15px sm-me-10px align-middle left-icon">
                                    <span>
                                        <span><i class="feather icon-feather-user"></i></span>
                                        <span class="btn-double-text ls-minus-05px" data-text="Become a Member">Become a Member</span>
                                    </span>
                                </a>
                                <div class="feature-box feature-box-left-icon-middle xs-m-10px mt-15px">
                                    <div class="feature-box-icon feature-box-icon-rounded bg-very-light-green w-65px h-65px rounded-circle me-10px">
                                        <i class="feather icon-feather-phone-call icon-extra-medium text-dark-gray"></i>
                                    </div>
                                    <div class="feature-box-content">
                                        <span class="d-block fs-14">Have any question?</span>
                                        <a href="tel:+91 8868924336" class="d-block text-dark-gray text-dark-gray-hover fs-22 fw-700 ls-minus-1px">+91 8868924336</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="pt-2 pb-2">
                <div class="container">
                    <div class="row">
                        <p class="alt-font text-black">Over the years, we’ve engaged with <b>thousands of aspiring entrepreneurs</b>, catalyzed the creation
                            of <b>new ventures</b>, supported <b>startups across various sectors</b>, and helped in <b>generating
                                meaningful employment opportunities</b> in urban and rural areas alike.
                        </p>
                        <p class="alt-font text-black">
                            Our network is proudly supported by a growing community of <b>mentors, industry leaders, policy
                                experts, and global changemakers</b> committed to shaping a robust entrepreneurial ecosystem. With
                            strategic collaborations across academia, institutions, and global partners, Gen G India provides
                            <b>budding entrepreneurs mentorship, market access, funding support, and technology exchange
                                opportunities.</b>
                        </p>
                        <p class="alt-font text-black">
                            Gen G India also actively engages with <b>Farmer Producer Organizations (FPOs)</b> and local
                            innovators to promote <b>Agri-Entrepreneurship.</b> Through initiatives like farmer-to-founder
                            workshops and knowledge exchange sessions, we aim to uplift India's rural economy and make
                            farmers future-ready business leaders.
                        </p>
                        <p class="alt-font text-black">
                            One of our flagship initiatives includes hosting <b>regional entrepreneurship summits and
                                innovation forums</b> that celebrate changemakers from different districts. These gatherings serve as
                            platforms to recognize outstanding entrepreneurs, introduce government schemes, and facilitate
                            policy-level discussions for startup-friendly reforms.
                        </p>
                        <p class="alt-font text-black">
                            At Gen G India, we believe in fostering <b>district-driven entrepreneurship</b>, building <b>inclusive
                                communities</b>, and providing every individual with the tools and opportunities to shape their own
                            future. Through continuous innovation and collaboration, we are creating a more <b>enterprising,
                                empowered, and equitable India.</b>
                        </p>
                    </div>
                </div>
            </section>

        </>
    );
};
export default Introduction;