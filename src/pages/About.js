import './About.css';
import React from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Parallax } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const About = () => {
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
            <h1>About Us</h1>
            <p>Learn more about our journey and commitment to delivering the best experience for you.</p>
          </div>
        </div>
      </section>

      <section className="company-overview-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="intro-box clearfix">
                <div className="sec-title">
                  <p>Company Overview</p>
                  <div className="title">
                    Modern & Luxury
                    <br />
                    <span>Interior Designers in USA</span>
                  </div>
                </div>
                <div className="text">
                  <p>
                    We feel that interior design is one of the most important
                    investments you will ever make. Whether your needs are
                    Residential or Commercial Interior Design or Model Home
                    Merchandising, our commitment to your project.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Swiper Carousel for history */}
          <div className="row">
            <div className="col-xl-12">
              <div className="history-content-box clearfix">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  navigation
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 4000, disableOnInteraction: false }}
                  loop
                  spaceBetween={30}
                  slidesPerView={1}
                  className="history-carousel"
                >
                  {historyItems.map(({ year, img }, idx) => (
                    <SwiperSlide key={idx}>
                      <div className="single-history-content">
                        <div className="img-box">
                          <div className="inner">
                            <img
                              src={`images/resources/${img}`}
                              alt="Awesome Image"
                            />
                          </div>
                        </div>
                        <div className="text-box">
                          <div className="inner">
                            <div className="date">
                              <h3>{year}</h3>
                            </div>
                            <div className="title">
                              <h3>
                                Crystalo Was Founded by
                                <br /> Chris Miller in USA.
                              </h3>
                            </div>
                            <div className="text">
                              <p>
                                Indignation and dislike men who are so beguiled
                                and demoralized by the charms pleasure of the
                                moment, so blinded by desire, that they cannot
                                foresee shrinking from toil and pain.
                              </p>
                              <a className="btn-two" href="#">
                                Read More<span className="flaticon-next"></span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>

          <div className="row fact-counter">
            {factCounters.map(({ number, title, delay, icon }, idx) => (
              <div
                className="col-xl-3 col-lg-6 col-md-6 col-sm-12"
                key={idx}
              >
                <div
                  className="single-fact-counter wow fadeInLeft"
                  data-wow-delay={`${delay}ms`}
                  data-wow-duration="1500ms"
                >
                  <div className="count-box">
                    <h1>
                      <span
                        className="timer"
                        data-from="1"
                        data-to={number}
                        data-speed="5000"
                        data-refresh-interval="50"
                      >
                        {number}
                      </span>
                      {icon && <img src={`images/${icon}`} alt="" />}
                    </h1>
                  </div>
                  <div className="title">
                    <h3>
                      {title.split(' ').map((word, i) => (
                        <React.Fragment key={i}>
                          {word}
                          {i === 1 ? <br /> : ' '}
                        </React.Fragment>
                      ))}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
       <section class="team-area">
            <div class="container">
                <div class="row">
                    <div class="col-xl-12">
                        <div class="sec-title float-left">
                            <p>Behind Our Company</p>
                            <div class="title">Expert & Experinced <span>Team</span></div>
                        </div>
                       
                    </div>
                </div>
                <div class="row">
                    <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                        <div class="single-team-member">
                            <div class="img-holder">
                                <img src="images/team/v2-1.jpg" alt="Awesome Image"/>
                                <ul class="sociallinks">
                                    <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i class="fa fa-skype" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i class="fa fa-vimeo" aria-hidden="true"></i></a></li>
                                </ul>
                                <div class="overlay">
                                    <div class="box">
                                        <div class="link">
                                            <a class="btn-two" href="blog.html">View Profile<span class="flaticon-next"></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="name text-center">
                                <p><span>CEO & Founder</span></p>
                                <h3>Alison Fletcher</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                        <div class="single-team-member">
                            <div class="img-holder">
                                <img src="images/team/v2-2.jpg" alt="Awesome Image"/>
                                <ul class="sociallinks">
                                    <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i class="fa fa-skype" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i class="fa fa-vimeo" aria-hidden="true"></i></a></li>
                                </ul>
                                <div class="overlay">
                                    <div class="box">
                                        <div class="link">
                                            <a class="btn-two" href="blog.html">View Profile<span class="flaticon-next"></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="name text-center">
                                <p><span>Designer</span></p>
                                <h3>Joe Wilson</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                        <div class="single-team-member">
                            <div class="img-holder">
                                <img src="images/team/v2-3.jpg" alt="Awesome Image"/>
                                <ul class="sociallinks">
                                    <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i class="fa fa-skype" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i class="fa fa-vimeo" aria-hidden="true"></i></a></li>
                                </ul>
                                <div class="overlay">
                                    <div class="box">
                                        <div class="link">
                                            <a class="btn-two" href="blog.html">View Profile<span class="flaticon-next"></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="name text-center">
                                <p><span>Architect</span></p>
                                <h3>White Grey</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                        <div class="single-team-member">
                            <div class="img-holder">
                                <img src="images/team/v2-4.jpg" alt="Awesome Image"/>
                                <ul class="sociallinks">
                                    <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i class="fa fa-skype" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i class="fa fa-vimeo" aria-hidden="true"></i></a></li>
                                </ul>
                                <div class="overlay">
                                    <div class="box">
                                        <div class="link">
                                            <a class="btn-two" href="blog.html">View Profile<span class="flaticon-next"></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="name text-center">
                                <p><span>Manager</span></p>
                                <h3>Kevin Smith</h3>
                            </div>
                        </div>
                    </div>
                    
                </div>

                <div class="row">
                    <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                        <div class="single-team-member">
                            <div class="img-holder">
                                <img src="images/team/v2-1.jpg" alt="Awesome Image"/>
                                <ul class="sociallinks">
                                    <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i class="fa fa-skype" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i class="fa fa-vimeo" aria-hidden="true"></i></a></li>
                                </ul>
                                <div class="overlay">
                                    <div class="box">
                                        <div class="link">
                                            <a class="btn-two" href="blog.html">View Profile<span class="flaticon-next"></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="name text-center">
                                <p><span>CEO & Founder</span></p>
                                <h3>Alison Fletcher</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                        <div class="single-team-member">
                            <div class="img-holder">
                                <img src="images/team/v2-2.jpg" alt="Awesome Image"/>
                                <ul class="sociallinks">
                                    <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i class="fa fa-skype" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i class="fa fa-vimeo" aria-hidden="true"></i></a></li>
                                </ul>
                                <div class="overlay">
                                    <div class="box">
                                        <div class="link">
                                            <a class="btn-two" href="blog.html">View Profile<span class="flaticon-next"></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="name text-center">
                                <p><span>Designer</span></p>
                                <h3>Joe Wilson</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                        <div class="single-team-member">
                            <div class="img-holder">
                                <img src="images/team/v2-3.jpg" alt="Awesome Image"/>
                                <ul class="sociallinks">
                                    <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i class="fa fa-skype" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i class="fa fa-vimeo" aria-hidden="true"></i></a></li>
                                </ul>
                                <div class="overlay">
                                    <div class="box">
                                        <div class="link">
                                            <a class="btn-two" href="blog.html">View Profile<span class="flaticon-next"></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="name text-center">
                                <p><span>Architect</span></p>
                                <h3>White Grey</h3>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                        <div class="single-team-member">
                            <div class="img-holder">
                                <img src="images/team/v2-4.jpg" alt="Awesome Image"/>
                                <ul class="sociallinks">
                                    <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i class="fa fa-skype" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                                    <li><a href="#"><i class="fa fa-vimeo" aria-hidden="true"></i></a></li>
                                </ul>
                                <div class="overlay">
                                    <div class="box">
                                        <div class="link">
                                            <a class="btn-two" href="blog.html">View Profile<span class="flaticon-next"></span></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="name text-center">
                                <p><span>Manager</span></p>
                                <h3>Kevin Smith</h3>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    </>
  );
};

export default About;
