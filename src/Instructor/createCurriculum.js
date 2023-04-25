import React from "react";
import Header from "../Header/header";
import Footer from "../footer/footer";

const AddSection = () => {
    return(
        <form className="col-md-4 col-12 card mt-3">
        <div className="card-body">
        <div className="fw-bold">Add Sections </div>
          <label>Add Title</label>
          <input className="form-control"/>
        
          <div className="mt-4">Upload Video</div>
          <div className="text-success">(0 videos Added)</div>
          <label className="mt-1">Video Title</label>
          <input className="form-control"/>
          
          
          <div className="d-flex justify-content-center align-items-center mt-2">
          <input type="file" className="form-control" />
          <button className="btn btn-primary">Upload</button>
          </div>
       <button className="col-12 btn btn-success mt-2">Upload Section</button>
        </div>
      </form>
    );
 
};

function CreateCurriculum() {
  return (
    <div className="bg-cream">
      <Header />
      <div className="head-margin">
        <div className=" text-center mx-5">
          <div className="">
            <h2 className="topic text-center">Create Sections</h2>

           <div className="text-success">0 sections Added</div>

            <div className="row justify-content-center  align-items-center">
                <AddSection/>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default CreateCurriculum;
