import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getRandomComicNumber } from "../utils/getRandomComicNumber";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const ComicNavigationBar = ({ comicNum }) => {
    return (
        <div className="comic-navbar">
            <Link to={`/comic/${comicNum === 1 ? comicNum : comicNum - 1}`}>
                <FaAngleLeft />
                Previous
            </Link>
            <Link to={`/comic/${getRandomComicNumber()}`}>Random</Link>
            <Link to={`/comic/${comicNum === 2880 ? comicNum : comicNum + 1}`}>
                Next
                <FaAngleRight />
            </Link>
        </div>
    );
};

export default ComicNavigationBar;
