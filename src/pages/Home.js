import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Home.css'; // Make sure to import the custom CSS
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Parallax } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';

const slides = [
  {
    image: 'images/slides/v2-1.jpg',
    title: 'Finest bespoke\ninteriors.',
    subtitle: 'Creating lasting impressions through interior design.',
    buttonText: 'More About Us',
    videoUrl: 'https://www.youtube.com/watch?v=p25gICT63ek',
  },
  {
    image: 'images/slides/v2-2.jpg',
    title: 'Beautiful Living\nSolutions.',
    subtitle: 'Creating lasting impressions through interior design.',
    buttonText: 'Services We Provide',
    videoUrl: 'https://www.youtube.com/watch?v=p25gICT63ek',
  },
  {
    image: 'images/slides/v2-3.jpg',
    title: 'Uniting design &\ntechnology.',
    subtitle: 'Creating lasting impressions through interior design.',
    buttonText: 'View Our Projects',
    videoUrl: 'https://www.youtube.com/watch?v=p25gICT63ek',
  },
];

const testimonials = [
  {
    text: 'Your guys were great knowledgeable, well experienced, efficient and neat. A true to work with Crystalo.',
    name: 'Z. Gartrell Wright',
    image: 'images/testimonial/testi-style2-1.png',
  },
  {
    text: 'Indignation & dislike men who are so beguiled and demoralizeds by the charms of pleasure of the moment.',
    name: 'Cathrine Wagner',
    image: 'images/testimonial/testi-style2-2.png',
  },
  {
    text: 'Same as saying through shrinking from all pain these cases are perfectly simple easy to distinguish.',
    name: 'Cuthbert Brain',
    image: 'images/testimonial/testi-style2-3.png',
  },
];


const Home = () => {
  const workingSteps = [
    {
      id: 1,
      number: '01',
      iconClass: 'icon-productive',
      title: 'Idea & Design',
      description:
        'Dedignation and dislike men who are beguileds & demoralized by the charms pleasue certain circumstances.',
    },
    {
      id: 2,
      number: '02',
      iconClass: 'icon-document',
      title: 'Specification',
      description:
        'Owing to the claims of duty or business will frequently occur that pleasures have to be repudiated and annoyances.',
    },
    {
      id: 3,
      number: '03',
      iconClass: 'icon-kitchen',
      title: 'Execution',
      description:
        'Same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish.',
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <>
      <section className="main-slider style2">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, Parallax]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop
          speed={1500}
          parallax
          className="rev_slider_wrapper"
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <div
                className="slide-bg"
                style={{ backgroundImage: `url(${slide.image})` }}
                data-swiper-parallax="-23%"
              />
              <div className="slide-content">
                <div className="big-title" data-swiper-parallax="-300">
                  {slide.title.split('\n').map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
                </div>
                <div className="text" data-swiper-parallax="-200">
                  {slide.subtitle}
                </div>
                <div className="btn-box" data-swiper-parallax="-100">
                  <div class="button">
                            <a class="btn-one" href="#">Get a Quote<span class="flaticon-next"></span></a>
                        </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="about-style2-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-5">
              <div className="about-style2-text">
                <div className="sec-title">
                  <p>About Company</p>
                  <div className="title">
                    Recognized <br />interior & exterior<br /><span> designers</span>
                  </div>
                </div>
                <div className="text">
                  <p>We denounce with righteous indignation and dislike men who are beguiled and demoralized by the charms of pleasures that moment, so blinded by desires, that they cannot foresee indignations some dislike mens who are so beguiled demoralized.</p>
                </div>
                {/* <div className="authorised-info">
                  <div className="signature">
                    <img src="images/icon/signature.png" alt="Signature" />
                  </div>
                  <div className="name">
                    <h3>KL. Carl Ambrose</h3>
                    <p>Chairman & Founder</p>
                  </div>
                </div> */}
                <div className="button" style={{marginTop: '-60px'}}>
                  <Link className="btn-one" to={'/about'}>More About Us<span className="flaticon-next"></span></Link>
                </div>
              </div>
            </div>
            <div className="col-xl-7">
              <div className="about-style2-image-box">
                <div className="image">
                  <img src="images/resources/about-style2-image.jpg" alt="About" />
                  <div className="overlay-box">
                    <div className="title">
                      <h1>7+ <span>Years Experience<br /> in this Field</span></h1>
                    </div>
                    <div className="button">
                      <a target='blank' href='https://www.instagram.com/lovelie.interiors1/'><span className="icon-back"></span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="working-style2-area" style={{ backgroundImage: `url('images/parallax-background/working-style2-bg.jpg')` }}>

        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <div class="working-style2-content clearfix">
                <div class="single-working-box-style2">
                  <div class="img-holder">
                    <img src="images/resources/working-v2-1.jpg" alt="Awesome Image" />
                    <div class="static-content">
                      <div class="box">
                        <div class="inner">
                          <div class="icon-holder">
                            <span class="icon-architecture-and-city"></span>
                          </div>
                          <div class="text-holder">
                            <div class="title">
                              <h3>Residential Design</h3>
                              <div class="count">01</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="overlay-content">
                      <div class="box">
                        <div class="inner">
                          <div class="icon-holder">
                            <span class="icon-architecture-and-city"></span>
                          </div>
                          <div class="text-holder">
                            <div class="title">
                              <h3>Residential Design</h3>
                              <div class="count">01</div>
                            </div>
                            <div class="text">
                              <p>Which is the same as saying in<br /> through shrrinkings from toil and<br /> cases are perfectly.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="read-more">
                    <a href="#"><span class="icon-next"></span></a>
                  </div>
                </div>
                <div class="single-working-box-style2">
                  <div class="img-holder">
                    <img src="images/resources/working-v2-2.jpg" alt="Awesome Image" />
                    <div class="static-content">
                      <div class="box">
                        <div class="inner">
                          <div class="icon-holder">
                            <span class="icon-sheriff"></span>
                          </div>
                          <div class="text-holder">
                            <div class="title">
                              <h3>Commercial Spaces</h3>
                              <div class="count">02</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="overlay-content">
                      <div class="box">
                        <div class="inner">
                          <div class="icon-holder">
                            <span class="icon-sheriff"></span>
                          </div>
                          <div class="text-holder">
                            <div class="title">
                              <h3>Commercial Spaces</h3>
                              <div class="count">02</div>
                            </div>
                            <div class="text">
                              <p>Which is the same as saying in<br /> through shrrinkings from toil and<br /> cases are perfectly.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="read-more">
                    <a href="#"><span class="icon-next"></span></a>
                  </div>
                </div>
                <div class="single-working-box-style2">
                  <div class="img-holder">
                    <img src="images/resources/working-v2-3.jpg" alt="Awesome Image" />
                    <div class="static-content">
                      <div class="box">
                        <div class="inner">
                          <div class="icon-holder">
                            <span class="icon-cross"></span>
                          </div>
                          <div class="text-holder">
                            <div class="title">
                              <h3>Renovation Consulting</h3>
                              <div class="count">03</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="overlay-content">
                      <div class="box">
                        <div class="inner">
                          <div class="icon-holder">
                            <span class="icon-cross"></span>
                          </div>
                          <div class="text-holder">
                            <div class="title">
                              <h3>Renovation Consulting</h3>
                              <div class="count">03</div>
                            </div>
                            <div class="text">
                              <p>Which is the same as saying in<br /> through shrrinkings from toil and<br /> cases are perfectly.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="read-more">
                    <a href="#"><span class="icon-next"></span></a>
                  </div>
                </div>
                <div class="single-working-box-style2">
                  <div class="img-holder">
                    <img src="images/resources/working-v2-4.jpg" alt="Awesome Image" />
                    <div class="static-content">
                      <div class="box">
                        <div class="inner">
                          <div class="icon-holder">
                            <span class="flaticon-architecture-and-city"></span>
                          </div>
                          <div class="text-holder">
                            <div class="title">
                              <h3>3D Modeling</h3>
                              <div class="count">04</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="overlay-content">
                      <div class="box">
                        <div class="inner">
                          <div class="icon-holder">
                            <span class="flaticon-architecture-and-city"></span>
                          </div>
                          <div class="text-holder">
                            <div class="title">
                              <h3>3D Modeling</h3>
                              <div class="count">04</div>
                            </div>
                            <div class="text">
                              <p>Which is the same as saying in<br /> through shrrinkings from toil and<br /> cases are perfectly.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="read-more">
                    <a href="#"><span class="icon-next"></span></a>
                  </div>
                </div>
              </div>
              <div class="working-style-bottom text-center">
                <p>Wanna Work With Our Experienced Profesional Team? Make an Appointment.</p>
                <div class="button">
                  <Link class="btn-one" href="#">View All Services<span class="flaticon-next"></span></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="services-style1-area">
        <div class="container">
          <div class="sec-title with-text max-width text-center wow fadeInDown" data-wow-delay="100ms" data-wow-duration="1200ms">
            <p>What We Do</p>
            <div class="title">Some Special <span>Services</span></div>
            <p class="bottom-text">We are an Interior Designer, Who believe in excellence, quality and honesty, yes we design beautiful home interiors.</p>
          </div>
          <div class="row">
            <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div class="single-service-style1 wow fadeInUp" data-wow-delay="0ms" data-wow-duration="1200ms">
                <div class="img-holder">
                  <img src="images/services/1.jpg" alt="Awesome Image" />
                  <div class="overlay-style-two"></div>
                  <div class="overlay-content-box">
                    <div class="box">
                      <div class="inner">
                        <div class="icon">
                          <span class="icon-lamp"></span>
                        </div>
                        <div class="title">
                          <h3>Lighting</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="text-holder">
                  <div class="inner-content">
                    <div class="top">
                      <div class="icon">
                        <span class="icon-lamp"></span>
                      </div>
                      <div class="count">
                        <h1>01</h1>
                      </div>
                    </div>
                    <div class="bottom">
                      <div class="title">
                        <h3>Lighting</h3>
                      </div>
                      <div class="read-more">
                        <a href="#"><span class="icon-next"></span></a>
                      </div>
                    </div>
                  </div>
                  <div class="overlay-content">
                    <div class="text">
                      <p>On that others hand, we will denounce with all righteous of demoralized charms.</p>
                    </div>
                    <div class="read-more">
                      <a href="#"><span class="icon-next"></span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div class="single-service-style1 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1200ms">
                <div class="img-holder">
                  <img src="images/services/2.jpg" alt="Awesome Image" />
                  <div class="overlay-style-two"></div>
                  <div class="overlay-content-box">
                    <div class="box">
                      <div class="inner">
                        <div class="icon">
                          <span class="icon-paint"></span>
                        </div>
                        <div class="title">
                          <h3>Coloring</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="text-holder">
                  <div class="inner-content">
                    <div class="top">
                      <div class="icon">
                        <span class="icon-paint"></span>
                      </div>
                      <div class="count">
                        <h1>02</h1>
                      </div>
                    </div>
                    <div class="bottom">
                      <div class="title">
                        <h3>Coloring</h3>
                      </div>
                      <div class="read-more">
                        <a href="#"><span class="icon-next"></span></a>
                      </div>
                    </div>
                  </div>
                  <div class="overlay-content">
                    <div class="text">
                      <p>On that others hand, we will denounce with all righteous of demoralized charms.</p>
                    </div>
                    <div class="read-more">
                      <a href="#"><span class="icon-next"></span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div class="single-service-style1 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1200ms">
                <div class="img-holder">
                  <img src="images/services/3.jpg" alt="Awesome Image" />
                  <div class="overlay-style-two"></div>
                  <div class="overlay-content-box">
                    <div class="box">
                      <div class="inner">
                        <div class="icon">
                          <span class="icon-floor"></span>
                        </div>
                        <div class="title">
                          <h3>Patterns</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="text-holder">
                  <div class="inner-content">
                    <div class="top">
                      <div class="icon">
                        <span class="icon-floor"></span>
                      </div>
                      <div class="count">
                        <h1>03</h1>
                      </div>
                    </div>
                    <div class="bottom">
                      <div class="title">
                        <h3>Patterns</h3>
                      </div>
                      <div class="read-more">
                        <a href="#"><span class="icon-next"></span></a>
                      </div>
                    </div>
                  </div>
                  <div class="overlay-content">
                    <div class="text">
                      <p>On that others hand, we will denounce with all righteous of demoralized charms.</p>
                    </div>
                    <div class="read-more">
                      <a href="#"><span class="icon-next"></span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div class="single-service-style1 wow fadeInUp" data-wow-delay="600ms" data-wow-duration="1200ms">
                <div class="img-holder">
                  <img src="images/services/4.jpg" alt="Awesome Image" />
                  <div class="overlay-style-two"></div>
                  <div class="overlay-content-box">
                    <div class="box">
                      <div class="inner">
                        <div class="icon">
                          <span class="icon-window"></span>
                        </div>
                        <div class="title">
                          <h3>Textures</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="text-holder">
                  <div class="inner-content">
                    <div class="top">
                      <div class="icon">
                        <span class="icon-window"></span>
                      </div>
                      <div class="count">
                        <h1>04</h1>
                      </div>
                    </div>
                    <div class="bottom">
                      <div class="title">
                        <h3>Textures</h3>
                      </div>
                      <div class="read-more">
                        <a href="#"><span class="icon-next"></span></a>
                      </div>
                    </div>
                  </div>
                  <div class="overlay-content">
                    <div class="text">
                      <p>On that others hand, we will denounce with all righteous of demoralized charms.</p>
                    </div>
                    <div class="read-more">
                      <a href="#"><span class="icon-next"></span></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section class="slogan-style2-area" style={{ backgroundImage: `url('images/parallax-background/slogan-bg.jpg')` }}>
        <div class="icon-holder">
          <span class="flaticon-car"></span>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <div class="inner-content">
                <div class="title">
                  <h1>Creating lasting impressions through<br /> <span>interior design.</span></h1>
                </div>
                <div class="button">
                  <a class="btn-one call-us" href="#"><i class="icon-music"></i> +971 52 513 1339</a>
                  <a class="btn-one" href="#">Maintenance Guide<span class="flaticon-next"></span></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="working-process-style2-area"
        style={{
          backgroundImage: 'url(images/parallax-background/working-process-bg-style3.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '50px 0',
        }}
      >
        <div className="container">
          <div className="sec-title">
            <p>To Do good design</p>
            <div className="title">
              Our Working <span>process</span>
            </div>
          </div>

          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >

            {workingSteps.concat(workingSteps).map((step, index) => (
              <SwiperSlide key={index}>
                <div className="single-working-process-style2">
                  <div className="top-box clearfix">
                    <div className="count">
                      <h1>{step.number}</h1>
                    </div>
                    <div className="icon">
                      <span className={step.iconClass}></span>
                    </div>
                  </div>
                  <div className="inner">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="testimonial-style2-area">
        <div className="container">
          <div className="sec-title text-center">
            <p>Testimonials</p>
            <div className="title">
              Our Customer <span>Words</span>
            </div>
          </div>

          <div className="testimonial-style2-content">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 4000 }}
              loop
              slidesPerView={1}
              spaceBetween={30}
            >
              {testimonials.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="single-testimonial-style2 text-center">
                    <div className="inner-content">
                      {/* Static Content */}
                      <div className="static-content">
                        <div className="quote-icon">
                          <span className="icon-quote3"></span>
                        </div>
                        <div className="text-box">
                          <p>{item.text}</p>
                        </div>
                        <div className="client-info">
                          <div className="review-box">
                            <ul className="stars">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <li key={i}>
                                  <i className="fa fa-star"></i>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <h3>{item.name}</h3>
                        </div>
                      </div>

                      {/* Overlay Content */}
                      <div className="overlay-content">
                        <div className="img-box">
                          <img src={item.image} alt={item.name} />
                        </div>
                        <div className="text-box">
                          <p>{item.text}</p>
                          <div className="quote-icon">
                            <span className="icon-quote3"></span>
                          </div>
                        </div>
                        <div className="client-info">
                          <div className="review-box">
                            <ul className="stars">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <li key={i}>
                                  <i className="fa fa-star"></i>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <h3>{item.name}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
