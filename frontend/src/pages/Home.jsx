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
    const latestComic = useLoaderData();

    return (
        <>
            <ComicNavigationBar comicNum={latestComic.num} />
            <Comic comic={latestComic} />;
        </>
    );
};

export default Home;
