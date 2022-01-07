import React from "react";
import {useState} from "react";

const send = async (foo) => {
    const newDate = new Date();
    const postOptions = {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify({
            type: foo,
            day: newDate.getDay(),
            hour: newDate.getHours(),
            minute: newDate.getMinutes()
        })
    }

    fetch("http://shanewinand.net/", postOptions)
};

const Button = (props) => {
    const [state, setState] = useState("in")
    return (
        <div>
        <button className={'log-button ' + state} onClick={() => {
            send(state);
            if (state === "in") {
                setState("out");
            } else {
                setState("in");
            }
        }}>Log {state}</button>
        </div>
    );
};

export default Button
