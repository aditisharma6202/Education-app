import React from "react";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className=" bg-black text-light footer py-2">
      <div className="border-below px-5 py-4">
        <div style={{ fontSize: "1.7rem" }} className="fw-bold ">
          Teach the world online
        </div>
        <div style={{ fontSize: "1.2rem" }}>
          Create an online video course, reach students across the globe, and
          earn money
        </div>
      </div>
      <div className="col-12">
<div className="row">
<div className="col-md-6 col-12">
            <div className="row">
            <div className="col-md-4 col-12 px-5 py-3">
            <div className="row">
              <Link className="text-light footer-link">Business</Link>
              <Link className="text-light footer-link">Teach on Udemy</Link>
              <Link className="text-light footer-link">Get the app</Link>
              <Link className="text-light footer-link">About Us</Link>
              <Link className="text-light footer-link">Contact Us</Link>
            </div>
          </div>
          <div className="col-md-4 col-12 px-5 py-3">
            <div className="row">
              <Link className="text-light footer-link">Career</Link>
              <Link className="text-light footer-link">Blog</Link>
              <Link className="text-light footer-link">Help and Support</Link>
              <Link className="text-light footer-link">Affiliate</Link>
              <Link className="text-light footer-link">Investors</Link>
            </div>
          </div>
          <div className="col-md-4 col-12 px-5 py-3">
            <div className="row">
              <Link className="text-light footer-link">Terms</Link>
              <Link className="text-light footer-link">Privacy Policy</Link>
              <Link className="text-light footer-link">Cookies Settings</Link>
              <Link className="text-light footer-link">Sitemap</Link>
              <Link className="text-light footer-link">Accessibility statement</Link>
            </div>
          </div>
            </div>
          
        </div>
        <div className="col-md-6 col-12 text-end">
            <div className=" py-3 px-5">
                <div>
                    
            <button className="button-outline-footer text-light p-2"> <i class="bi bi-globe"></i> English</button>
                </div>
            </div>
           
        </div>
        <div>
            <div className="d-flex p-5 justify-content-between">
            <h3 className="fw-bold ">LOGO</h3>
            <div>copyright at 2023</div>
            </div>
        </div>
</div>
      
      </div>
    </div>
  );
}

export default Footer;
