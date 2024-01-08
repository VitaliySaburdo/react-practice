import { useParams } from "react-router-dom";

export const MovieItem = () => {
    const {movieId} = useParams();
    console.log(movieId)
    return <></>
}