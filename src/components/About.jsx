import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
    return (
        <div>
            <section id="about">
                <div className="container my-5 py-5">
                    <div className="row">
                        <div className="col-md-6">
                            <img src="/Images/MJT_logo.png" alt="About Page"
                                className="w-75 mt-5" />
                        </div>
                        <div className="col-md-6">
                            <h3 className="fs-5 mb-0">
                                About Us
                            </h3>
                            <h1 className="display-6 mb-2">Who <b>WE</b> Are</h1>
                            <hr className="w-50"/>
                            <p className="lead mb-4">Are you ready to learn and grow? Look no further than MJ Tutorials, where we provide engaging and comprehensive tutorials on a variety of subjects. Our team of experienced instructors is dedicated to breaking down complex topics into easy-to-understand lessons that are accessible to learners of all levels. With a focus on quality and user experience, we strive to create a seamless learning environment that will empower you to achieve your goals. So, whether you're looking to enhance your professional skills or satisfy your curiosity, join us at MJ Tutorials and let's embark on this educational journey together.
                            </p>
                            <NavLink to="/footer" className="btn btn-primary rounded-pill px-4 py-2">Subscribe for News Letter</NavLink>
                            <NavLink to="/contact" className="btn btn-outline-primary rounded-pill px-4 py-2 ms-2">Contact Us</NavLink>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default About;