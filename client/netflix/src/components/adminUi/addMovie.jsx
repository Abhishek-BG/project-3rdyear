import { useEffect, useState } from "react";
import axios from "axios";
export default function AddMovie() {
    const [movieList,setMovieList]= useState([]);
    const [genreList,setGenreList]= useState([]);
    const [message,setMessage]= useState("");
    useEffect(()=>{
        const fetchMovies= async()=>{
            try{
    const res = await axios.get("http://localhost:8060/api/admin/viewMovies",
    {headers:{Authorization:`${document.cookie.split('=')[1]}`}});
            setMovieList(res.data.data);
            console.log(res.data.data);
            }catch(err){
                setMessage(err.message);
            }
        };fetchMovies();
    },[message])
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
    const handleSubmit= async()=>{
        try{
    const res = await axios.post("http://localhost:8060/api/admin/addMovie",formData,
    {headers:{Authorization:`${document.cookie.split('=')[1]}`}})
    setMessage(res.data.message);
        }catch(err){
            setMessage(err.message);
        }
    }
    const handleDelete= async(id)=>{
        try{
    const res = await axios.post(`http://localhost:8060/api/admin/deleteMovie/${id}`,
    {headers:{Authorization:`${document.cookie.split('=')[1]}`}})
    setMessage(res.data.message);
        }catch(err){
            setMessage(err.message);
        }
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
                   
                    <button onClick={handleSubmit}
                    type="submit" className="bg-red-500 text-white p-2 rounded hover:bg-blue-600">Add Movie</button>
                </div>
                <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">Movie List</h2>
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b border-gray-300">Title</th>
                            <th className="py-2 px-4 border-b border-gray-300">Description</th>
                            <th className="py-2 px-4 border-b border-gray-300">Year</th>
                            <th className="py-2 px-4 border-b border-gray-300">URL</th>
                            <th className="py-2 px-4 border-b border-gray-300">Banner URL</th>
                            <th className="py-2 px-4 border-b border-gray-300">Actions</th>
                        </tr>

                    </thead>
                    <tbody>
                        {movieList.map((movie)=>(
                            <tr key={movie.id}>
                                <td className="py-2 px-4 border-b border-gray-300">{movie.title}</td>
                                <td className="py-2 px-4 border-b border-gray-300">{movie.desc}</td>
                                <td className="py-2 px-4 border-b border-gray-300">{movie.year}</td>
                                <td className="py-2 px-4 border-b border-gray-300">
                                    <iframe width="100" height="100" src={movie.url} title={movie.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                </td>
                                <td className="py-2 px-4 border-b border-gray-300">
                                    <img src={movie.bannerUrl} alt={movie.title} className="w-32 h-auto" />
                                    </td>
                                <td className="py-2 px-4 border-b border-gray-300">
                                    <button 
                                    onClick={()=>{handleDelete(movie.id)}}
                                     className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>    
                </div>
            </div>
        </div>
    )
}
