import React, { useState } from "react";
import Header from "../Header/header";
import Footer from "../footer/footer";
import "./instructor.css";
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import mime from 'mime'


import axios from "axios";
function CreateCourses() {
  const [name, setName]=useState('');
  const[description, setDescription]=useState('');
  const[requirement, setRequirement]=useState('');
  const[language, setLanguage]=useState('');
  const [price , setPrice]=useState('');

  const [baseImage, setBaseImage] = useState('');
  const navigate = useNavigate();
  const token= localStorage.getItem('token')
  console.log(token)
  const handleFileSelect = (event) => {
    setBaseImage(event.target.files[0])
    console.log(baseImage)
  }
  const handleClick=()=>{   

  

   axios({
    method: "post",
    url: "https://skill.eviternship.com/addCourse",
    data: {'course_name':name,
         'description':description,
          'image':baseImage,
          'language':language,
          'price':price,
          'rating':'5',
          'requirement':requirement},

    headers: {'Content-Type': 'multipart/form-data',
    "Authorization": `Bearer ${localStorage.getItem('token')}`},
  
   
  })
  .then((response) => {
    console.log(response)
  })
  .catch(function (error) {
    
    console.log(error);
});
    
    
}
  return (
    <div className="bg-cream">
      <Header />
      <div className="bg-cream head-margin col-12 overfow-x">
        <ToastContainer/>
        <div className="text-center bg-cream ">
          <div className="card mx-5">
            <div className="card-body">
              <h2 className="topic text-center">Create Course</h2>
              <div className="fw-bold">It's ok if you can't think of a good title now. You can change it later.</div>
              <form>
                <div className="row align-items-center justify-content-center overflow-x">
                  <div className=" col-md-8 col-12 mt-5  ">
                    <label>Course Name</label>
                    <input className="form-control" value={name} onChange={(e)=>{setName(e.target.value)}} />
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
                        value={description} onChange={(e)=>{setDescription(e.target.value)}}
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
                        value={requirement} onChange={(e)=>{setRequirement(e.target.value)}}
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
                          //value={baseImage} 
                          onChange={
                          handleFileSelect}
                        />
                      </div>
                      <div className="col-md-4 col-12 form-group">
                        <label>Language</label>
                        <input className="form-control" value={language} onChange={(e)=>{setLanguage(e.target.value)}} />
                      </div>
                      <div className="col-md-4 col-12 form-group">
                        <label>Price</label>
                        <input className="form-control" value={price} onChange={(e)=>{setPrice(e.target.value)}} />
                      </div>
                    </div>
                  </div>
                </div>
                <button  onClick={handleClick} className="btn btn-primary mt-5">Create Curriculum</button>
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
