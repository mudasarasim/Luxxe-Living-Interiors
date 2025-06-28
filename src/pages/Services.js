import './About.css';
import React from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Parallax } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Services = () => {
  const historyItems = [
    { year: 1983, img: 'history-1.jpg' },
    { year: 1984, img: 'history-2.jpg' },
    { year: 1985, img: 'history-1.jpg' },
    { year: 1986, img: 'history-2.jpg' },
    { year: 1987, img: 'history-2.jpg' },
  ];

  const factCounters = [
    { number: 36, title: 'Years of Experience', delay: 100 },
    { number: 5, title: 'Projects Completed', delay: 200, icon: 'icon/k.png' },
    { number: 24, title: 'Branches Worldwide', delay: 300 },
    { number: 47, title: 'Awards Holds in Hand', delay: 400 },
  ];

  return (
    <>
    <section
        className="breadcrumb-area style2"
        style={{ backgroundImage: `url('images/resources/breadcrumb-bg.jpg')` }}
      >
        <div className="container">
          <div className="inner-content-box text-center">
            <h1>Our Services</h1>
            <p>Discover the range of expert solutions we offer to bring your vision to life.</p>
          </div>
        </div>
      </section>

       <section class="services-style2-service-page">
            <div class="container">
                <div class="row">
                    <div class="col-xl-5">
                        <div class="sec-title">
                            <p>Categories</p>
                            <div class="title">Working <span>Sectors</span></div>
                        </div>
                    </div>
                    <div class="col-xl-7">
                        <div class="text">
                            <p>We are an Interior Designer, Who believe in excellence, quality and honesty, yes we design beautiful home interiors.</p>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                        <div class="single-service-style2 wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1200ms">
                            <div class="img-holder">
                                <img src="images/services/v2-1.jpg" alt="Awesome Image"/>
                                <div class="overlay-style-two"></div>
                            </div>
                            <div class="text-holder">
                                <div class="icon-holder">
                                    <span class="icon-concept"></span>
                                </div>
                                <div class="inner">
                                    <h3>Concept Designs</h3>
                                    <div class="text">
                                        <p>Indignation dislike are beguile works & demoralized the charms except to obtain some advantage from it.</p>
                                    </div>
                                    <div class="read-more">
                                        <a class="btn-one" href="blog.html">Read More<span class="flaticon-next"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                        <div class="single-service-style2 wow fadeInUp" data-wow-delay="100ms" data-wow-duration="1200ms">
                            <div class="img-holder">
                                <img src="images/services/v2-2.jpg" alt="Awesome Image"/>
                                <div class="overlay-style-two"></div>
                            </div>
                            <div class="text-holder">
                                <div class="icon-holder">
                                    <span class="icon-scheme"></span>
                                </div>
                                <div class="inner">
                                    <h3>Project Designs</h3>
                                    <div class="text">
                                        <p>Our power of choice untrammelled all nothing prevents best choice untrammeled when nothing prevents .</p>
                                    </div>
                                    <div class="read-more">
                                        <a class="btn-one" href="blog.html">Read More<span class="flaticon-next"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                        <div class="single-service-style2 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                            <div class="img-holder">
                                <img src="images/services/v2-3.jpg" alt="Awesome Image"/>
                                <div class="overlay-style-two"></div>
                            </div>
                            <div class="text-holder">
                                <div class="icon-holder">
                                    <span class="icon-cupboard"></span>
                                </div>
                                <div class="inner">
                                    <h3>Make Overs</h3>
                                    <div class="text">
                                        <p>Every pleasure to be welcomed every circumstances and owing power occur that repudiated & annoyances .</p>
                                    </div>
                                    <div class="read-more">
                                        <a class="btn-one" href="blog.html">Read More<span class="flaticon-next"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                        <div class="single-service-style2 wow fadeInUp" data-wow-delay="300ms" data-wow-duration="1200ms">
                            <div class="img-holder">
                                <img src="images/services/v2-4.jpg" alt="Awesome Image"/>
                                <div class="overlay-style-two"></div>
                            </div>
                            <div class="text-holder">
                                <div class="icon-holder">
                                    <span class="icon-teacher"></span>
                                </div>
                                <div class="inner">
                                    <h3>Consulting</h3>
                                    <div class="text">
                                        <p>Every pleasure to be welcomed every circumstances and owing power occur that repudiated & annoyances .</p>
                                    </div>
                                    <div class="read-more">
                                        <a class="btn-one" href="blog.html">Read More<span class="flaticon-next"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                        <div class="single-service-style2 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1200ms">
                            <div class="img-holder">
                                <img src="images/services/v2-5.jpg" alt="Awesome Image"/>
                                <div class="overlay-style-two"></div>
                            </div>
                            <div class="text-holder">
                                <div class="icon-holder">
                                    <span class="icon-furniture-and-household"></span>
                                </div>
                                <div class="inner">
                                    <h3>Glass & Wrought</h3>
                                    <div class="text">
                                        <p>Indignation dislike are beguile works & demoralized the charms except to obtain some advantage from it.</p>
                                    </div>
                                    <div class="read-more">
                                        <a class="btn-one" href="blog.html">Read More<span class="flaticon-next"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12">
                        <div class="single-service-style2 wow fadeInUp" data-wow-delay="500ms" data-wow-duration="1200ms">
                            <div class="img-holder">
                                <img src="images/services/v2-6.jpg" alt="Awesome Image"/>
                                <div class="overlay-style-two"></div>
                            </div>
                            <div class="text-holder">
                                <div class="icon-holder">
                                    <span class="icon-sketch"></span>
                                </div>
                                <div class="inner">
                                    <h3>Space Planning</h3>
                                    <div class="text">
                                        <p>Our power of choice untrammelled all nothing prevents best choice untrammeled when nothing prevents.</p>
                                    </div>
                                    <div class="read-more">
                                        <a class="btn-one" href="blog.html">Read More<span class="flaticon-next"></span></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    </>
  );
};

export default Services;
