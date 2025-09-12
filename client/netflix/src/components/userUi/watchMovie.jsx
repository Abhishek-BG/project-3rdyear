import { useParams } from "react-router-dom";
export default function WatchMovie() {
    //http://localhost:5173/watch/68c39f78945133278879d668
    const id = location.pathname.split('/')[2];

    return(
        <div>WatchMovie</div>
    );
}