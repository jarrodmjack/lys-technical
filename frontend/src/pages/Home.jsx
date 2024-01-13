import React from "react";
import Comic from "../components/Comic";
import { useLoaderData } from "react-router";
import ComicNavigationBar from "../components/ComicNavigationBar";

export async function loader() {
    const response = await fetch(`${import.meta.env.VITE_API_URL}`);
    const data = await response.json();
    return data;
}

const Home = () => {
    const data = useLoaderData();

    return (
        <>
            <h1>{data.timesVisited} visits</h1>
            <ComicNavigationBar comicNum={data.comic.num} />
            <Comic comic={data.comic} />;
        </>
    );
};

export default Home;
