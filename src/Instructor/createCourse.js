import React from "react";
import Header from "../Header/header";
import Footer from "../footer/footer";
import "./instructor.css";
import { Link } from "react-router-dom";
function CreateCourses() {
  return (
    <div className="bg-cream">
      <Header />
      <div className="bg-cream head-margin col-12">
        <div className="text-center bg-cream ">
          <div className="card mx-5">
            <div className="card-body">
              <h2 className="topic text-center">Create Course</h2>
              <div className="fw-bold">It's ok if you can't think of a good title now. You can change it later.</div>
              <form>
                <div className="row align-items-center justify-content-center">
                  <div className=" col-md-8 col-12 mt-5  ">
                    <label>Course Name</label>
                    <input className="form-control" />
                  </div>

                  <div className="col-md-8 col-12 mt-3">
                    <div class="form-group">
                      <label for="exampleFormControlTextarea1">
                        Description
                      </label>
                      <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-md-8 col-12 mt-3">
                    <div class="form-group">
                      <label for="exampleFormControlTextarea1">
                        Requirement
                      </label>
                      <textarea
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                      ></textarea>
                    </div>
                  </div>

                  <div className="col-md-8 col-12 mt-3 form-group">
                    <div className="row">
                      <div className="col-md-4 col-12 form-group">
                        <label for="exampleFormControlFile1">Thumbnail</label>
                        <input
                          type="file"
                          class="form-control-file"
                          id="exampleFormControlFile1"
                        />
                      </div>
                      <div className="col-md-4 col-12 form-group">
                        <label>Language</label>
                        <input className="form-control" />
                      </div>
                      <div className="col-md-4 col-12 form-group">
                        <label>Price</label>
                        <input className="form-control" />
                      </div>
                    </div>
                  </div>
                </div>
                <Link to={'/createcurriculum'} className="btn btn-primary mt-5">Create Curriculum</Link>
              </form>
              
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default CreateCourses;
