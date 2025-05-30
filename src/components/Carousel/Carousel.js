import React from "react";
import img1 from "../../assets/images/about/demo-green-energy-about-img-02.jpg"

const Carousel = () => {
    return (
        <>
            <section class="p-0 top-space-margin position-relative overflow-hidden slider_main_div">
                <div class="swiper full-screen swiper-number-pagination-style-01 md-h-auto magic-cursor" data-slider-options='{ "slidesPerView": 1, "loop": true, "pagination": { "el": ".swiper-number", "clickable": true }, "navigation": { "nextEl": ".slider-one-slide-next-1", "prevEl": ".slider-one-slide-prev-1" }, "autoplay": { "delay": 4000, "disableOnInteraction": false },  "keyboard": { "enabled": true, "onlyInViewport": true }, "effect": "slide" }' data-number-pagination="1">
                    <div class="swiper-wrapper">
                        
                        <div class="swiper-slide" >
                            <div class="container-fluid h-100 g-0">
                                <div class="row h-100 p-0">
                                    <div class="col-xxl-5 col-lg-6 text-white bg-very-light-green cover-background ps-6 xxl-ps-4 sm-ps-15px order-2 order-lg-1 md-pt-50px md-pb-15 xs-pb-20" style={{ backgroundImage: "url('../../assets/images/inner/inner-left-img.jpg')" }} >
                                        <div class="d-flex justify-content-center align-items-lg-start align-items-center text-lg-start text-center flex-column h-100" data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
                                            <span class="fs-15 fw-500 ls-05px mb-20px d-inline-block border-bottom border-2 border-color-transparent-white-very-light text-uppercase">Welcome to Gen G India</span>
                                            <div class="fs-50 lg-fs-55 fw-600 ls-minus-2px md-w-80 sm-w-100 xs-w-90">
                                                <span>Gen G India</span>
                                                <span class="position-relative z-index-1">Entrepreneurs<span><img src={img1} alt="" class="position-absolute bottom-5px left-0px w-100 z-index-minus-1" /></span></span>
                                                <span>Association</span>
                                            </div>
                                            <div class="d-inline-block mt-45px sm-mt-30px">
                                                <a href="javascript:void(0)" class="btn btn-extra-large btn-white btn-rounded btn-switch-text btn-box-shadow d-inline-block me-20px sm-me-10px align-middle left-icon">
                                                    <span>
                                                        <span><i class="feather icon-feather-thumbs-up"></i></span>
                                                        <span class="btn-double-text ls-minus-05px" data-text="Discover more">Discover more</span>
                                                    </span>
                                                </a>
                                                <a href="javascript:void(0)" class="btn btn-link btn-hover-animation-switch fw-500 btn-extra-large text-white btn-icon-left xs-mt-15px">
                                                    <span>
                                                        <span class="btn-text">Contact Us</span>
                                                        <span class="btn-icon"><i class="feather icon-feather-box"></i></span>
                                                        <span class="btn-icon"><i class="feather icon-feather-box"></i></span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xxl-7 col-lg-6 cover-background sm-background-position-top-center order-1 order-lg-2 md-h-500px sm-h-400px" style={{ backgroundImage: "url('../../assets/images/slider/img1.jpg')" }}></div>
                                </div>
                            </div>
                        </div>
                      
                        <div class="swiper-slide" >
                            <div class="container-fluid h-100 g-0">
                                <div class="row h-100 p-0">
                                    <div class="col-xxl-5 col-lg-6 text-white bg-very-light-green cover-background ps-6 xxl-ps-4 sm-ps-15px order-2 order-lg-1 md-pt-50px md-pb-15 xs-pb-20" style={{ backgroundImage: "url('../../assets/images/inner/inner-left-img.jpg')" }} >
                                        <div class="d-flex justify-content-center align-items-lg-start align-items-center text-lg-start text-center flex-column h-100" data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
                                            <span class="fs-15 fw-500 ls-05px mb-20px d-inline-block border-bottom border-2 border-color-transparent-white-very-light text-uppercase">Welcome to Gen G India</span>
                                            <div class="fs-50 lg-fs-55 fw-600 ls-minus-2px md-w-80 sm-w-100 xs-w-90">
                                                <span>Gen G India</span>
                                                <span class="position-relative z-index-1">Entrepreneurs<span><img src={img1} alt="" class="position-absolute bottom-5px left-0px w-100 z-index-minus-1" /></span></span>
                                                <span>Association</span>
                                            </div>
                                            <div class="d-inline-block mt-45px sm-mt-30px">
                                                <a href="javascript:void(0)" class="btn btn-extra-large btn-white btn-rounded btn-switch-text btn-box-shadow d-inline-block me-20px sm-me-10px align-middle left-icon">
                                                    <span>
                                                        <span><i class="feather icon-feather-thumbs-up"></i></span>
                                                        <span class="btn-double-text ls-minus-05px" data-text="Discover more">Discover more</span>
                                                    </span>
                                                </a>
                                                <a href="javascript:void(0)" class="btn btn-link btn-hover-animation-switch fw-500 btn-extra-large text-white btn-icon-left xs-mt-15px">
                                                    <span>
                                                        <span class="btn-text">Contact Us</span>
                                                        <span class="btn-icon"><i class="feather icon-feather-box"></i></span>
                                                        <span class="btn-icon"><i class="feather icon-feather-box"></i></span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xxl-7 col-lg-6 cover-background sm-background-position-top-center order-1 order-lg-2 md-h-500px sm-h-400px" style={{ backgroundImage: "url('../../assets/images/slider/img1.jpg')" }}></div>
                                </div>
                            </div>
                        </div>
                       
                        <div class="swiper-slide" >
                            <div class="container-fluid h-100 g-0">
                                <div class="row h-100 p-0">
                                    <div class="col-xxl-5 col-lg-6 text-white bg-very-light-green cover-background ps-6 xxl-ps-4 sm-ps-15px order-2 order-lg-1 md-pt-50px md-pb-15 xs-pb-20" style={{ backgroundImage: "url('../../assets/images/inner/inner-left-img.jpg')" }}>
                                        <div class="d-flex justify-content-center align-items-lg-start align-items-center text-lg-start text-center flex-column h-100" data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'>
                                            <span class="fs-15 fw-500 ls-05px mb-20px d-inline-block border-bottom border-2 border-color-transparent-white-very-light text-uppercase">Welcome to Gen G India</span>
                                            <div class="fs-50 lg-fs-55 fw-600 ls-minus-2px md-w-80 sm-w-100 xs-w-90">
                                                <span>Gen G India</span>
                                                <span class="position-relative z-index-1">Entrepreneurs<span><img src={img1} alt="" class="position-absolute bottom-5px left-0px w-100 z-index-minus-1" /></span></span>
                                                <span>Association</span>
                                            </div>
                                            <div class="d-inline-block mt-45px sm-mt-30px">
                                                <a href="javascript:void(0)" class="btn btn-extra-large btn-white btn-rounded btn-switch-text btn-box-shadow d-inline-block me-20px sm-me-10px align-middle left-icon">
                                                    <span>
                                                        <span><i class="feather icon-feather-thumbs-up"></i></span>
                                                        <span class="btn-double-text ls-minus-05px" data-text="Discover more">Discover more</span>
                                                    </span>
                                                </a>
                                                <a href="javascript:void(0)" class="btn btn-link btn-hover-animation-switch fw-500 btn-extra-large text-white btn-icon-left xs-mt-15px">
                                                    <span>
                                                        <span class="btn-text">Contact Us</span>
                                                        <span class="btn-icon"><i class="feather icon-feather-box"></i></span>
                                                        <span class="btn-icon"><i class="feather icon-feather-box"></i></span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xxl-7 col-lg-6 cover-background md-background-position-top-center order-1 order-lg-2 md-h-500px sm-h-400px" style={{ backgroundImage: "url('../../assets/images/slider/img1.jpg')" }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="position-relative">
                        <div class="swiper-pagination w-auto left-0 md-right-0px text-center swiper-pagination-clickable swiper-number fs-14 ps-6 xxl-ps-4 md-ps-0"></div>
                        </div>
                </div>

            </section>
        </>
    )
};

export default Carousel;