import { Link, useLoaderData } from "react-router-dom";
import Comic from "../components/Comic";

export async function loader({ params }) {
    const response = await fetch(
        `${import.meta.env.VITE_API_URL}/comic/${params.id}`
    );
    const data = await response.json();
    return data;
}

const ComicByIdPage = () => {
    const comic = useLoaderData();

    if (!comic) {
        return <Link to="/">Something Broke</Link>;
    }

    return <Comic comic={comic} />;
};

export default ComicByIdPage;
