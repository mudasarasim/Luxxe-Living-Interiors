import React from "react";
import "./Testimonial.css";

const testimonials = [
  {
    name: "Z. Gartrell Wright",
    photo: "testi-style2-1.png",
    text: "Your team was knowledgeable, efficient, and neat—a pleasure to work with.",
  },
  {
    name: "Cathrine Wagner",
    photo: "testi-style2-2.png",
    text: "They exceeded expectations with their professionalism and creativity.",
  },
  {
    name: "Cuthbert Brain",
    photo: "testi-style2-3.png",
    text: "Fantastic experience—delivered on time and beautifully executed design.",
  },
  {
    name: "Maya Patel",
    photo: "testi-style2-1.png",
    text: "Outstanding service. The attention to detail was beyond what I imagined.",
  },
  {
    name: "Jordan Li",
    photo: "testi-style2-2.png",
    text: "Incredible transformation. Every guest has complimented our space!",
  },
  {
    name: "Amira Nassar",
    photo: "testi-style2-3.png",
    text: "Professional, timely, and super creative. Highly recommend this team.",
  },
  {
    name: "Liam Chen",
    photo: "testi-style2-1.png",
    text: "Loved the designs. They truly brought our ideas to life.",
  },
  {
    name: "Olivia Brown",
    photo: "testi-style2-2.png",
    text: "They made our house feel like a home. Warm, elegant, and modern.",
  },
  {
    name: "Carlos Rivera",
    photo: "testi-style2-3.png",
    text: "Great customer service. From consult to completion, it was smooth.",
  },
];

const Testimonial = () => {
  return (
    <main className="testimonial-page">
      {/* Header */}
     <section
        className="breadcrumb-area style2"
        style={{ backgroundImage: `url('images/resources/breadcrumb-bg.jpg')` }}
      >
        <div className="container">
          <div className="inner-content-box text-center">
            <h1>What Our Clients Says</h1>
            <p>Hear directly from our clients about their experiences and how we’ve made a difference.

</p>
          </div>
        </div>
      </section>


      {/* Testimonials */}
      <section className="testimonials-area">
        <div className="container">
          <div className="testimonials-wrapper">
            {testimonials.map((t, idx) => (
              <div key={idx} className="testimonial-card">
                <div className="photo">
                  <img src={`images/testimonial/${t.photo}`} alt={t.name} />
                </div>
                <div className="content">
                  <p className="text">"{t.text}"</p>
                  <div className="rating">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="star">★</span>
                    ))}
                  </div>
                  <h3>{t.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Testimonial;
