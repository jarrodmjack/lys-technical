import React from "react";
import Comic from "../components/Comic";
import { useLoaderData } from "react-router";
import ComicNavigationBar from "../components/ComicNavigationBar";

export async function loader() {
    const response = await fetch(`${import.meta.env.VITE_API_URL}`);
    const data = await response.json();
    console.log('data: ', data)
    return data;
}

const Home = () => {
    const data = useLoaderData();
    console.log('data: ', data)

    return (
        <>
            {/* <ComicNavigationBar comicNum={data.comic.num} /> */}
            {/* <Comic comic={data.comic} />; */}
        </>
    );
};

export default Home;
