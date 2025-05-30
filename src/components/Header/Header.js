import React from "react";
import logo from '../../assets/images/logo/new-logo.png';

const Header = () => {
    return (
        <>
            <header class="">
            
            <nav class="navbar navbar-expand-lg header-light bg-white header-reverse" data-header-hover="light">
                <div class="container-fluid"> 
                    <div class="col-auto">
                        <a class="navbar-brand" href="index.php">
                            <img src={logo} data-at2x="images/logo/new-logo.png" alt="" class="default-logo" width="74" height="96" />
                            <img src={logo} data-at2x="images/logo/new-logo.png" alt="" class="alt-logo" width="0" height="0" />
                            <img src={logo} data-at2x="images/logo/new-logo.png" alt="" class="mobile-logo" width="0" height="0" />
                        </a>
                    </div>
                    <div class="col-auto menu-order left-nav">
                        <button class="navbar-toggler float-start collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-label="Toggle navigation" aria-expanded="false">
                            <span class="navbar-toggler-line"></span>
                            <span class="navbar-toggler-line"></span>
                            <span class="navbar-toggler-line"></span>
                            <span class="navbar-toggler-line"></span>
                        </button>
                        <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item"><a href="/home" class="nav-link">Home</a></li> 
                                <li class="nav-item dropdown dropdown-with-icon-style02 active"><a href="#" class="nav-link">About Us</a>
                                    <i class="dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink1"> 
                                        <li class="active"><a href="/introduction">Introduction</a></li>
                                        <li><a href="/mission-vission">Mission, Vision &amp; Objective</a></li>
                                        <li><a href="/message">Message</a></li>
                                        <li><a href="/infrastructure">Infrastructure</a></li>
                                        <li><a href="/other">Other</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown dropdown-with-icon-style02"><a href="#" class="nav-link">What we offer</a>
                                    <i class="dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink1"> 
                                        <li><a href="business-research.php">Business Research</a></li>
                                        <li><a href="incubation-support.php">Incubation Support </a></li>
                                        <li><a href="policy-advocacy.php">Policy Advocacy </a></li>
                                        <li><a href="government-representation.php">Govt. Representation</a></li>
                                        <li><a href="business-counseling.php">Business Consulting for Growth </a></li>
                                        <li><a href="foreign-collaboration.php">Foreign collaborations with International Organization </a></li>
                                        <li><a href="provide-support.php">Provide Support in Foreign Trade</a></li>
                                        <li><a href="support-mentorship.php">Startup Mentorship &amp; Nurturing &amp; Handholding</a></li>
                                        <li><a href="conduct-training.php">Conduct Training Programs for several sectors </a></li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown dropdown-with-icon-style02"><a href="#" class="nav-link">Gen G India</a>
                                    <i class="dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink1"> 
                                        <li><a href="inner.php">Chapter</a></li>
                                        <li><a href="inner.php">Executive Committee </a></li>
                                        <li><a href="inner.php">Mentors</a></li>
                                        <li><a href="inner.php">Board Members</a></li>
                                        <li><a href="inner.php">Patron Members</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown dropdown-with-icon-style02"><a href="#" class="nav-link">Request</a>
                                    <i class="dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink1"> 
                                        <li><a href="inner.php">Request for incubation</a></li>
                                        <li><a href="inner.php">Request for Member </a></li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown dropdown-with-icon-style02"><a href="#" class="nav-link">Gallery</a>
                                    <i class="dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink1"> 
                                        <li><a href="image_gallery.php">Image Gallery</a></li>
                                        <li><a href="video_gallery.php">Video Gallery</a></li>
                                        <li><a href="media_gallery.php">Media Gallery</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown dropdown-with-icon-style02"><a href="#" class="nav-link">More</a>
                                    <i class="dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false"></i>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink1"> 
                                        <li><a href="faq.php">FAQs</a></li>
                                        <li><a href="event.php">Events</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item"><a href="contact.php" class="nav-link">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-auto ms-auto ps-lg-0 d-none d-sm-flex"> 
                        
                        <div class="header-icon me-5px">
                            <div class="header-button">
                                <a href="donate.php" class="btn border-1 btn-base-color btn-xs btn-rounded btn-box-shadow left-icon btn-switch-text">
                                    <span>
                                        <span><i class="feather icon-feather-arrow-right icon-small"></i></span>
                                        <span class="btn-double-text fs-15" data-text="Donate">Donate</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div class="header-icon me-5px">
                            <div class="header-button">
                                <a href="become-member.php" class="btn border-1 btn-base-color btn-xs btn-rounded btn-box-shadow left-icon btn-switch-text">
                                    <span>
                                        <span><i class="bi bi-people text-white icon-small"></i></span>
                                        <span class="btn-double-text fs-15" data-text="Become a Member">Become a Member</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div class="header-icon">
                            <div class="header-button">
                                <a href="become-member.php" class="btn border-1 btn-base-color btn-xs btn-rounded btn-box-shadow left-icon btn-switch-text">
                                    <span>
                                        <span><i class="feather icon-feather-arrow-right icon-small"></i></span>
                                        <span class="btn-double-text fs-15" data-text="Login">Login</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
        </>
    )
};

export default Header;