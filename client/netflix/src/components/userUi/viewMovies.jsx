import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function MovieCard({movie}) {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
            <img className="w-full h-48 object-cover" src={movie.bannerUrl} alt={movie.title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{movie.title} ({movie.year})</div>
                <p className="text-gray-700 text-base">
                    {movie.desc}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
             <a href={movie.url} target="_blank" rel="noopener noreferrer" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Watch Movie
             </a>
            </div>
        </div>
    );
}

export default function ViewMovies() {
    const [movies, setMovies]       = useState([]);
    const [message, setMessage]     = useState("");
    
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get("http://localhost:8060/api/admin/viewMovies", {
                    headers: { Authorization: `${document.cookie.split('=')[1]}` }
                });
                if (response.data.status) {
                    setMovies(response.data.data);
                }


            } catch (err) {
                setMessage(err.message);
            }
        }
        fetchMovies();
    }
    , [message]);
    
    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Movies</h2>
            {message && <p className="text-red-500 mb-4">{message}</p>}
            <div className="flex flex-wrap">
                {movies.map(movie => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        </div>
    );
}