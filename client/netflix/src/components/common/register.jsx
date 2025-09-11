import axios from "axios";
import { useState } from "react"
export default function Register() {
    const [message,setMessage]= useState("");
    const [formData,setFormData]= useState({
        username:"",
        email:"",
        pass:""
    })
    const handleChange= (e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }
    const handleSubmit= async ()=>{
      try{
          const response = await axios.post(
            'http://localhost:8060/api/user/register',
            {
              name:formData.username,
              email:formData.email,
              pass:formData.pass 
            });
        if(response.data.status){
           setMessage("Registration Successful! Please Log In.");
        }
      }catch(err){
        setMessage(err.message);
      }
    }
    return(
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-bold mb-6 text-white text-center">Register</h2>
            <span className="text-white mb-4 text-center block">
                {message}
            </span>
            <div>
                <input 
                    type="text"
                    name="username"
                    onChange={handleChange}
                    placeholder="Username"
                    className="w-full mb-4 px-3 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                <input 
                    type="email"
                    placeholder="Email"
                    name="email"
                     onChange={handleChange}
                    className="w-full mb-4 px-3 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                <input 
                    type="password"
                    name="pass"
                    onChange={handleChange}
                    placeholder="Password"
                    className="w-full mb-6 px-3 py-2 rounded-md bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600"
                />
                <button 
                    type="submit"
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-md"
                    onClick={handleSubmit}
                >
                    Register
                </button>
            </div> 
        </div>
        </div>
    )
}