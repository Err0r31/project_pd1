import React from "react";

const Picture = (props) => {

    return (
        <>
            <img src={props.info.way} alt={props.info.alt} />
        </>
    );
};

export default Picture;