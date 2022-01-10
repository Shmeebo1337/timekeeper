import React from "react";

const Info = (props) => {
    const lastInfo = props.last;
    return (
        <div>
            <h1 className={"info " + lastInfo.type}>
                Last {lastInfo.type}: {lastInfo.day} / {lastInfo.hour}.
            </h1>
        </div>
    )
};

export default Info;