import React, { useState } from "react";

function Message() {
    const [text, setText] = useState("Message from FACE Prep Campus");

    return (
        <div style={{ textAlign: "center", marginTop: "40px" }}>
            <h2>{text}</h2>
            <button onClick={() => setText(text==="Message from FACE Prep Campus"? "We at FACE Prep Campus, believe in equipping our students for the world. Our seasoned mentors & industry experts are on a mission to transform professional education through a revolutionary approach focused on skills, and driven by tech." : "Message from FACE Prep Campus")}>
                Please click here to get the message!
            </button>
        </div>
    );
}

export default Message;