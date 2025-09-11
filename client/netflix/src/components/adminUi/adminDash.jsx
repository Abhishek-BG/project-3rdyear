import { Link } from "react-router-dom"
export default function AdminDash() { 
    return (
        //nav bar
        <div className="p-4">
            <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold">Admin Dashboard</h1>
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-2">Movie Management</h2>
                    <Link to="/add-movie" 
                    className="text-blue-500 hover:underline">
                        + Add New Movie</Link><br/>
                    <Link to="/view-movie" className="text-blue-500 hover:underline"> - View Movies</Link>        
                </div>
                    <div className="bg-white p-4 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-2">Genre Management</h2>
                    <Link to="/add-genre" className="text-blue-500 hover:underline">+ Add New Genre</Link><br/>
                    <Link to="/add-genre" className="text-blue-500 hover:underline"> - View Genre</Link>        
                </div>
            </div>  
        </div>
    )
}