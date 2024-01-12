import React from "react";
import Comic from "../components/Comic";
import { useLoaderData } from "react-router";

export async function loader() {
    const response = await fetch(`${import.meta.env.VITE_API_URL}`);
    const data = await response.json();
    return data;
}

const Home = () => {
    const latestComic = useLoaderData();

    return <Comic comic={latestComic} />;
};

export default Home;
