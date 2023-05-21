import React, { useState } from "react";

const Footer = () => {

    const [mail,setMail]= useState({
        email : ""
    });
    const handleMail = (event) =>{
        let name = event.target.name;
        let value = event.target.value;

        setMail({...mail,[name]:value});

    } ;
    const handleSubmit = async (event) =>{
        event.preventDefault();
        const{email} = mail;
        try {
            const res = await fetch('/newsletter',{
                method : "POST",
                headers : {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({
                    email
                })
            })
            if(res.status === 400 || !res){
                window.alert("Please Try again Later");
            }else{
                window.alert("Subscribed");
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <footer className="footer text-white ">
                <div className="container">
                    <footer className="py-5">
                        <div className="row">
                            <div className="col-3">
                                <h4>MJ Tutorials</h4>
                            </div>
                            <div className="col-2">
                                <h5>Section</h5>
                                <ul className="nav flex-column">
                                    <li className="nav-item mb-2">
                                        <a to="#" className="nav-link p-0 text-white">Home</a>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <a to="#" className="nav-link p-0 text-white">Classes</a>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <a to="#" className="nav-link p-0 text-white">FAQ's</a>
                                    </li>
                                    <li className="nav-item mb-2">
                                        <a to="#" className="nav-link p-0 text-white">About</a>
                                    </li>
                                </ul>
                            </div>
                            <div  className="col-4 offset-1">
                                <form onSubmit={handleSubmit} method="POST">
                                    <h5>Subscribe to our newsletter</h5>
                                    <p>Monthly digest of whats new and exciting from us.</p>
                                    <div className="d-flex w-100 gap-2">
                                        <label htmlFor="newsletter1" className="visually-hidden">Email Address</label>
                                        <input id="newsletter1" type="email" className="form-control" placeholder="Email Address"
                                        name="email" value={mail.email} onChange={handleMail}/>
                                        <button className="btn btn-primary rounded-pill px-4" type="submit">Subscribe</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between pt-4 mt-4 border-top">
                            <p>© 2022 MJ Tutorials, Inc. All Rights Reserved.</p>
                            <ul className="list-unstyled d-flex">
                                <li className="ms-3"><a className="link-light" to="#"><i className="fa fa-facebook fa-2x"></i></a></li>
                                <li className="ms-3"><a className="link-light" to="#"><i className="fa fa-instagram fa-2x"></i></a></li>
                                <li className="ms-3"><a className="link-light" to="#"><i className="fa fa-twitter fa-2x"></i></a></li>
                            </ul>
                        </div>
                    </footer>
                </div>
            </footer>
        </div>
    );
}

export default Footer;

<div className="col-2">
    <h5>Section</h5>
    <ul className="nav flex-column">
        <li className="nav-item mb-2">
            <a to="#" className="nav-link p-0 text-white">Home</a>
        </li>
        <li className="nav-item mb-2">
            <a to="#" className="nav-link p-0 text-white">Classes</a>
        </li>
        <li className="nav-item mb-2">
            <a to="#" className="nav-link p-0 text-white">FAQ's</a>
        </li>
        <li className="nav-item mb-2">
            <a to="#" className="nav-link p-0 text-white">About</a>
        </li>
    </ul>
</div>