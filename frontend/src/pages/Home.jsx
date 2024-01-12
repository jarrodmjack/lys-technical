import React from "react";
import Comic from "../components/Comic";
import { useLoaderData } from "react-router";

export async function loader() {
    const response = await fetch(`https://jolly-cowboy-boots-frog.cyclic.app/`);
    const data = await response.json();
    return data;
}

const Home = () => {
    const latestComic = useLoaderData();

    return <Comic comic={latestComic} />;
};

export default Home;
