import React ,{useState}from 'react';
import signup from'./images/signup.jpg'
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from "react-toastify";
import axios from 'axios';
function Login() {
    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleClick=()=>{   
        try {
            console.log(email,password)
            axios.post('https://skill.eviternship.com/studentLogin',{
                email:email ,
                 password: password
            })
               .then(function (Response) {
                 console.log(Response);
                 if(Response.status==200){
                    localStorage.setItem('token',Response.data.token);
            console.log(  localStorage.getItem('token'))       
                    navigate('/home');

                 }
         
               })
               .catch(function () {

                 toast.error("User does not exist")
                 setTimeout(()=>{
                    window.location.reload()
                 },[1000])
               });
        } catch (error) {
            toast.error("Something went wrong") 
            setTimeout(()=>{
                window.location.reload()
             },[1000])
        }    
    
    }
    return ( <div className='main '>
        <ToastContainer />
        <div className='col-md-6 col-12'>
            <div className='card'>
                <div className='card-body row '>
                    <div className='col-md-6 col-12'>
<img src={signup} alt='signup-image' height={'400'} width={'400'} className='only-desktop-flex'/>

                    </div>
                    <div className='col-md-6 col-12 p-3 align-items-center justify-content-center d-flex'>
                        <div  className='mx-3'>
                        <h2>Login</h2>
                        <form>
                            <div className='col-12'>
                              
                                    <label>Email</label>
                                    <input className='form-control'        value={email}

onChange={(e) => setEmail(e.target.value)}/>
                           
                            </div>
                            <div className='col-12 mt-1'>
                            <label>Password</label>
                           <input className='form-control'  value={password}

onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                            <button onClick={handleClick} className='btn btn-success col-12 mt-2' type='button'>Login</button>
                        </form>
                        <div className='d-flex mt-4 justify-content-between'>
                            <div> Don"t have an Account?</div>
                            <Link to={'/signup'} className='btn btn-primary'>SignUp</Link>
                        </div>
                        </div>
                        
                    </div>

                </div>
            </div>
        </div>
    </div> );
}

export default Login;