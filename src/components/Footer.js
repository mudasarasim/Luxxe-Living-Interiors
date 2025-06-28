// components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
<>
<footer class="footer-area style4">
            <div class="container">
                <div class="row">
                    <div class="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                        <div class="single-footer-widget marbtm50-s4">
                            <div class="our-info-box">
                                <div class="footer-logo">
                                    <a href="index-2.html">
                                        <img src="images/resources/logo-2.png" style={{height: '80px', width: '260px'}} alt="Awesome Logo"/>
                                    </a>
                                </div>
                                <div class="text">
                                    <p>On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the blinded by desiremoment.</p>
                                </div>
                                <div class="follow-us-social-links clearfix">
                                    <span>Follw Us On:</span>
                                    <ul>
                                        <li><a href="#">Facebook</a></li>
                                        <li><a href="#">Twitter</a></li>
                                        <li><a href=" https://www.instagram.com/lovelie.interiors1/" target='blank'>Instagram</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-5 col-md-6 col-sm-12">
                        <div class="single-footer-widget s4">
                            <div class="title-style2">
                                <h3>Usefull Links</h3>
                            </div>
                            <div class="usefull-links">
                                <ul class="float-left">
                                    <li><a href="#">Company</a></li>
                                    <li><a href="#">Services</a></li>
                                    <li><a href="#">Team</a></li>
                                    <li><a href="#">Projects</a></li>
                                    <li><a href="#">Get a Quote</a></li>
                                </ul>
                                <ul class="float-left borders-left">
                                    <li><a href="#">News</a></li>
                                    <li><a href="#">Testimonials</a></li>
                                    <li><a href="#">Partners</a></li>
                                    <li><a href="#">Privacy Policy</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-3 col-md-12 col-sm-12">
                        <div class="single-footer-widget pdtop50-s4">
                            <div class="title-style2">
                                <h3>Subscribe Us</h3>
                            </div>
                            <div class="subscribe-box">
                                <form class="subscribe-form" action="#">
                                    <input type="email" name="email" placeholder="Your Email"/>
                                    <button class="btn-one" type="submit">Subscribe<span class="flaticon-next"></span></button>
                                </form>
                                <div class="text">
                                    <p><span>*</span>Subscribe us and get latest news and updates</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
            </div>
        </footer>
     
          <section class="footer-bottom-area style3" style={{marginTop: '-100px'}}>
            <div class="container">
                <div class="row">
                    <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                        <div class="copyright-text text-center">
                            <p><a href="https://xpertonecreative.com/" target="_blank">Expertone Creatives</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</>
);


export default Footer;
