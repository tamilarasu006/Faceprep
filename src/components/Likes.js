import React, { useState } from "react";

function Likes() {
    const [likes, setLikes] = useState(0);

    const likesIncrease = () => {
        setLikes(likes + 1);
    };

    return (
        <div style={{ textAlign: "center", marginTop: "40px" }}>
            <h2>No. of likes : {likes}</h2>
            <button onClick={likesIncrease}>
                Like here!
            </button>
        </div>
    );
}

export default Likes;