import { useEffect, useState } from "react";
import axios from "axios";
export default function AddMovie() {
    const [genreList,setGenreList]= useState([]);
    const [message,setMessage]= useState("");
    const [formData,setFormData]= useState({
        title:"",
        desc:"",
        year:"",
        url:"",
        bannerUrl:"",
        genreId:""
    });
    useEffect(()=>{
        const fetchGenres= async()=>{
            try{
    const res = await axios.get("http://localhost:8060/api/admin/viewGenre",
    {headers:{Authorization:`${document.cookie.split('=')[1]}`}})
    setGenreList(res.data.data);
    console.log(res.data.data);
            }catch(err){
                setMessage(err.message);
            }
        };fetchGenres();
    },[])
    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    }
    //title,desc,year,url,bannerUrl,genreId
    return(
        <div className="p-4">
            <div className="">
                <h1>Add Movie</h1>
                <span>{message}</span>
                <div className="flex flex-col gap-4">
                    <select name="genreId" onChange={handleChange} className="p-2 border border-gray-300 rounded">
                        <option value="">Select Genre</option>
                        {genreList.map((e)=>(
                              <option value={e.id}>{e.name}</option>
                        ))}
                    </select>
                    <input name="title" onChange={handleChange} type="text" placeholder="Title" className="p-2 border border-gray-300 rounded"/>
                    <input name="desc" onChange={handleChange} type="text" placeholder="Description" className="p-2 border border-gray-300 rounded"/>
                    <input name="year" onChange={handleChange} type="number" placeholder="Year" className="p-2 border border-gray-300 rounded"/>
                    <input name="url" onChange={handleChange} type="text" placeholder="URL" className="p-2 border border-gray-300 rounded"/>
                    <input name="bannerUrl" onChange={handleChange} type="text" placeholder="Banner URL" className="p-2 border border-gray-300 rounded"/>
                   
                    <button type="submit" className="bg-red-500 text-white p-2 rounded hover:bg-blue-600">Add Movie</button>
                </div>
            </div>
        </div>
    )
}