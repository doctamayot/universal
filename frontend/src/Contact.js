import React from 'react';
import MetaData from './components/layout/MetaData';

const Contact = () => {
  return (
    <div>
      <MetaData title={'Contact Us'} />
      <header id="page-header" className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 m-auto text-center">
              <h1 className="bg-info p-2 w-100">Contact Us</h1>
            </div>
          </div>
        </div>
      </header>
      <section id="contact" class="py-3">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <div class="card p-4">
                <div class="card-body">
                  <h4>Get In Touch</h4>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Pariatur, odio!
                  </p>
                  <h4>Address</h4>
                  <p>550 Main st, Boston MA</p>
                  <h4>Email</h4>
                  <p>test@test.com</p>
                  <h4>Phone</h4>
                  <p>(555) 555-5555</p>
                </div>
              </div>
            </div>
            <div class="col-md-8">
              <div class="card p-4">
                <div class="card-body">
                  <h3 class="text-center">
                    Please fill out this form to contact us
                  </h3>
                  <hr />
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="First Name"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Phone Number"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <textarea
                          class="form-control"
                          placeholder="Message"
                        ></textarea>
                      </div>
                    </div>
                    <div class="col-md-12">
                      <div class="form-group">
                        <input
                          type="submit"
                          value="Submit"
                          class="btn btn-outline-danger btn-block"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
