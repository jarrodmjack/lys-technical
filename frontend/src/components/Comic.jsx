import React from "react";

const Comic = ({ comic }) => {
    let pattern = /\[\[|\]\]|\{\{|\}\}/g;
    const transcript = comic.transcript.replace(pattern, "").split("\n");

    const comicCreatedDate = new Date(
        +comic.year,
        +comic.month - 1,
        +comic.day
    );

    return (
        <div>
            <div className="img-container">
                <img src={comic.img} alt={comic.alt} />
            </div>
            <div>
                <p className="comic-date">
                    This comic was created on {comicCreatedDate.toDateString()}
                </p>
            </div>
            <div className="transcript-box">
                {comic.transcript ? (
                    transcript.map((line, i) => {
                        if (line === "") {
                            return <div key={i}></div>;
                        } else {
                            return <p key={i}>{line}</p>;
                        }
                    })
                ) : (
                    <>No Transcript Available</>
                )}
            </div>
        </div>
    );
};

export default Comic;
