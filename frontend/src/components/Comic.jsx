import React from "react";

const Comic = ({ comic }) => {
    let pattern = /\[\[|\]\]|\{\{|\}\}/g;
    const transcript = comic.transcript
        .replace(pattern, "")
        .replace("Alt-title: ", "")
        .split("\n");

    return (
        <div>
            <div className="img-container">
                <img src={comic.img} alt={comic.alt} />
            </div>
            <div>
                {transcript.map((line) => <p>{line}</p>)}
            </div>
        </div>
    );
};

export default Comic;
