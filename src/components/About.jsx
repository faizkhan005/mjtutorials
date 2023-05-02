import React from "react";


const About = () => {
    return (
        <div>
            <section id="about">
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="/Images/background.png" alt="About Page"
                                className="w-75 mt-5" />
                        </div>
                        <div className="col-md-6">
                            <h3 className="fs-5 mb-0">
                                About Us
                            </h3>
                            <h1 className="display-6 mb-2">Who <b>WE</b> Are</h1>
                            <hr className="w-50"/>
                            <p className="lead mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt alias sint dolore, autem soluta deserunt inventore quam, iure dolorum praesentium atque temporibus magnam corporis optio minima repudiandae aut, magni ea nihil odio iste fugiat numquam a voluptatum? Accusantium, laboriosam in. Illo labore perferendis explicabo? Possimus consequuntur officiis aut labore eos.
                            </p>
                            <button className="btn btn-primary rounded-pill px-4 py-2">Subscribe for News Letter</button>
                            <button className="btn btn-outline-primary rounded-pill px-4 py-2 ms-2">Contact Us</button>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default About;