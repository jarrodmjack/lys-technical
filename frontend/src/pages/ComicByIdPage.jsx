import { Link, useLoaderData } from "react-router-dom";
import Comic from "../components/Comic";
import ComicNavigationBar from "../components/ComicNavigationBar";

export async function loader({ params }) {
    const response = await fetch(
        `${import.meta.env.VITE_API_URL}/comic/${params.id}`
    );
    const data = await response.json();
    return data;
}

const ComicByIdPage = () => {
    const data = useLoaderData();

    if (!data.comic) {
        return <Link to="/">Something Broke</Link>;
    }

    return (
        <>  
            <h1>{data.timesVisited} visits</h1>
            <ComicNavigationBar comicNum={data.comic.num} />
            <Comic comic={data.comic} />
        </>
    );
};

export default ComicByIdPage;
