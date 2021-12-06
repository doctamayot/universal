import React from 'react';
import MetaData from './layout/MetaData';
import Carousel from 'react-elastic-carousel';
import { Link } from 'react-router-dom';

const WebPage = () => {
  return (
    <div className="container mt-5">
      <MetaData title={'Universal Acting'} />
      <div className="row">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleCaptions"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="./images/kids.jpg"
                className="d-block w-100"
                alt="universal acting"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>
                  <Link to="/shop">
                    {' '}
                    <button className="btn-warning w-50">Kids</button>
                  </Link>
                </h5>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="./images/teens.jpg"
                className="d-block w-100"
                alt="universal acting"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>
                  <Link to="/shop">
                    {' '}
                    <button className="btn-info w-50">Teens</button>
                  </Link>
                </h5>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="./images/adults.jpg"
                className="d-block w-100"
                alt="universal acting"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>
                  <Link to="/shop">
                    {' '}
                    <button className="btn-danger w-50">Adults</button>
                  </Link>
                </h5>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      <div className="row">
        <section id="home-icons" className="py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-4 mb-4 text-center">
                <i className="fas fa-cog fa-3x mb-2 text-success"></i>
                <h3>About Us</h3>
                <p>
                  Universal Acting will educate and guide students to work,
                  develop, and strengthen their craft, while encouraging verbal
                  communication, mental spontaneity, self-confidence, and social
                  interaction. They will learn how to be expressive in a safe
                  and fun environment, and have a better
                  understanding/appreciation for themselves and the people they
                  work with
                </p>
              </div>
              <div className="col-md-4 mb-4 text-center">
                <i className="fas fa-lightbulb fa-3x mb-2 text-danger"></i>
                <h3>Innovate</h3>
                <p>
                  This innovative learning facility provides actors and artists
                  with the skills and vital information they will need in order
                  to succeed in the entertainment industry. ​ Classes are led by
                  industry professionals/educators and will provide students
                  with comprehensive curriculum and programs. Our variety of
                  instructors and class levels will meet the needs of aspiring
                  beginners, as well as the seasoned actor. The classes will
                  develop and enhance a student’s potential as an actor, while
                  nurturing his/her talents, creativity, and self-esteem.
                </p>
              </div>
              <div className="col-md-4 mb-4 text-center">
                <i className="fas fa-graduation-cap fa-3x mb-2 text-warning"></i>
                <h3>Philosophy</h3>
                <p>
                  The philosophy of U.A. is to serve those who possess a strong
                  commitment to their craft and to provide them with the
                  guidance and tools they will need in order to cultivate and
                  develop their talent.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="row">
        {/* <!-- HOME HEADING SECTION --> */}
        <section id="home-heading" className="p-5">
          <div className="dark-overlay">
            <div className="row">
              <div className="col">
                <div className="container pt-5 ">
                  <h1 className="text-white">How to become an actor!!</h1>
                  <p className="d-none d-md-block">
                    Acting Classes for kids and Adults that deliver results
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="row">
        <section id="gallery" className="py-5">
          <div className="container">
            <h1 className="text-center">Our Students</h1>
            <p className="text-center">Check out his works</p>
            <div className="row mb-4">
              <div className="col-md-4">
                <iframe
                  width="340"
                  height="340"
                  src="https://www.youtube.com/embed/eU0QfiDBWBw"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                  showinfo="1"
                ></iframe>
              </div>

              <div className="col-md-4">
                <iframe
                  width="340"
                  height="340"
                  src="https://www.youtube.com/embed/5_fs1bPYDyo"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>

              <div className="col-md-4">
                <iframe
                  width="340"
                  height="340"
                  src="https://www.youtube.com/embed/Ykr9drQwGvc"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>

            <div className="row mb-4">
              <div className="col-md-4">
                <iframe
                  width="340"
                  height="340"
                  src="https://www.youtube.com/embed/i5Z6dUCoCCI"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>

              <div className="col-md-4">
                <iframe
                  width="340"
                  height="340"
                  src="https://www.youtube.com/embed/WB6qQQ-04PU"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>

              <div className="col-md-4">
                <iframe
                  width="340"
                  height="340"
                  src="https://www.youtube.com/embed/ZOtUc6MpbPM"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Testimonios */}

      <div className="row text-center mt-5 w-100 shadow p-3">
        <h2 className=" w-100">Testimonials</h2>
        <div className="w-100 mt-3">
          <Carousel itemsToShow={1} enableAutoPlay={true} autoPlaySpeed={4000}>
            <div className="bg-warning p-3 shadow rounded ">
              <h3 className="text-white">Alexa Freedman</h3>
              <img
                src="./images/alexatest.webp"
                alt="universal casting"
                className="img-fluid rounded-circle mb-2 teacher-1"
              />
              <h5 className="font-italic">
                "OMG I love the acting class!! It is soooo much fun!! It makes
                me soooo happy!!"
              </h5>
            </div>
            <div className="bg-primary p-3 shadow rounded ">
              <h3 className="text-white">Daisy Flores</h3>
              <img
                src="./images/daisytest.webp"
                alt="universal casting"
                className="img-fluid rounded-circle mb-2 teacher-1"
              />
              <h5 className="font-italic">
                "Just wanted to thank you for the self tape! She got rave
                reviews and it opened some awesome doors for my small fry . She
                keeps asking for the acting classes. You guys are the best"
              </h5>
            </div>
            <div className="bg-success p-3 shadow rounded ">
              <h3 className="text-white">Antonella</h3>
              <img
                src="./images/antotest.webp"
                alt="universal casting"
                className="img-fluid rounded-circle mb-2 teacher-1"
              />
              <h5 className="font-italic">
                What a great class for Antonella! Just amazing!!"
              </h5>
            </div>
            <div className="bg-danger p-3 shadow rounded ">
              <h3 className="text-white">Ayden</h3>
              <img
                src="./images/aytest.webp"
                alt="universal casting"
                className="img-fluid rounded-circle mb-2 teacher-1"
              />
              <h5 className="font-italic">
                "Ayden was showing dad his levels with this mad scientist story.
                We are so pleased with what you have done with him over the last
                few weeks. Keep inspiring people......you just don’t know how
                much they will value and treasure you for a lifetime. God bless
                you!"
              </h5>
            </div>
            <div className="bg-warning p-3 shadow rounded ">
              <h3 className="text-white">Rosemarie</h3>
              <img
                src="./images/rostest.webp"
                alt="universal casting"
                className="img-fluid rounded-circle mb-2 teacher-1"
              />
              <h5 className="font-italic">
                "Thank you Chris for all your insight and encouragement, I am
                enjoying your class so much!"
              </h5>
            </div>
          </Carousel>
        </div>
      </div>
      <div className="row mt-5">
        <section
          id="newsletter"
          className="text-center p-5 bg-info text-white w-100"
        >
          <div className="container text-center">
            <div className="row">
              <div className="col-12">
                <h1>Sign Up For Our Newsletter</h1>
                <p>Do you want to receive news and discounts?</p>

                <form className="form-inline justify-content-center mt-2">
                  <input
                    type="text"
                    className="form-control mb-2 mr-2"
                    placeholder="Enter Name"
                  />
                  <input
                    type="text"
                    className="form-control mb-2 mr-2"
                    placeholder="Enter Email"
                  />
                  <button className="btn btn-primary mb-2">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WebPage;
