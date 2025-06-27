// pages/HomePage.js
import React from 'react';
import mm from '../assets/mm.png';
import bg from '../assets/bg.jpg';
import burj from '../assets/burj.png';
import wild from '../assets/wild.png';
import at from '../assets/at.png';
import { Link } from 'react-router-dom';

const Home = () => (
  <>
     <section class="hero bg-light" style={{ background: `url(${bg}) no-repeat center/cover`, padding: '100px 20px' }}>
    <div class="container bg-white bg-opacity-75 p-4 rounded shadow-sm">
      <ul class="nav nav-tabs mb-4">
        <li class="nav-item"><Link to={'/'} class="nav-link active text-warning" href="#">Flight</Link></li>
        <li class="nav-item"><Link to={'/hotel'} class="nav-link" href="#">Hotel</Link></li>
        <li class="nav-item"><Link to={'/visa'} class="nav-link" href="#">Visa</Link></li>
        <li class="nav-item"><Link class="nav-link" href="#">Tour</Link></li>
      </ul>
      <form class="row g-3">
        <div class="col-md-2">
          <label className="form-label fw-bold">From</label>
          <input type="text" class="form-control" placeholder="From (e.g. DXB)" />
        </div>
        <div class="col-md-2">
          <label className="form-label fw-bold">To</label>
          <input type="text" class="form-control" placeholder="To" />
        </div>
        <div class="col-md-2">
          <label className="form-label fw-bold">Departure</label>
          <input type="date" class="form-control" />
        </div>
        <div class="col-md-2">
          <label className="form-label fw-bold">Return</label>
          <input type="date" class="form-control" />
        </div>
        <div class="col-md-2">
          <label className="form-label fw-bold">Cabin</label>
          <select class="form-select">
            <option>Economy</option>
            <option>Business</option>
          </select>
        </div>
        <div class="col-md-2">
          <label className="form-label fw-bold">Passenger</label>
          <select class="form-select">
            <option>1</option>
            <option>2</option>
          </select>
        </div>
        <br/>
        <div class="col-md-1 d-grid">
          <button class="btn btn-warning text-white fw-bold">GO</button>
        </div>
      </form>
    </div>
  </section>
    <section className="text-center my-5">
      <h2 className="text-warning fw-bold">BEST OF THE HOLIDAY</h2>
      <p className="text-muted">Breathtaking ideas on how to make your holiday a memorable one</p>
      <div id="holidayCarousel" className="carousel slide container" data-bs-ride="carousel">
        <div className="carousel-inner">
          {[0, 1].map(index => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
              <div className="row">
                {[1, 2, 3].map((_, i) => (
                  <div className="col-md-4" key={i}>
                    <img src={mm} className="img-fluid rounded" alt="holiday" />
                    <p><a href="#" className='text-warning mt-2'>CHECK DETAILS ➜</a></p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#holidayCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#holidayCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </section>

    <section className="bg-light py-5">
      <div className="container text-center">
        <h2 className="text-warning fw-bold">NEWS & UPDATES</h2>
        <p className="text-muted">Book 450+ Airlines, Hotels, Visa, Cruise, Meet and Assist, and More</p>
        <div className="row g-3">
          {[{img: burj, title: "Burj Khalifa At The Top"}, {img: wild, title: "Wild Wadi Water Park"}, {img: at, title: "Atlantis Waterpark"}].map((item, i) => (
            <div className="col-md-4" key={i}>
              <img src={item.img} className="img-fluid rounded" alt={item.title} />
              <p className="mt-2"><strong>{item.title}</strong></p>
              <a href="#" className='text-warning'>Check Details ➜</a>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="text-center my-5">
      <div className="container d-flex flex-column flex-md-row justify-content-around text-white">
        {[
          { icon: 'clock', title: 'Save Time', desc: 'Research and book online.' },
          { icon: 'headset', title: '24/7 Support', desc: 'We’re online and ready to support.' },
          { icon: 'lock', title: 'Secure Payment', desc: 'We provide secure payment systems.' }
        ].map((item, i) => (
          <div className="bg-warning p-4 rounded mb-3 mb-md-0" key={i}>
            <i className={`fas fa-${item.icon} me-2`}></i><strong>{item.title}</strong><br />{item.desc}
          </div>
        ))}
      </div>
    </section>
  </>
);

export default Home;
