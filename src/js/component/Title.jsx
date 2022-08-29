import React from "react";
import propTypes from "prop-types"

const Title = ({title}) => {
    return(
        <h1 className="title">{title}</h1>
    )
}

Title.propTypes = {
    title: propTypes.string
}

export default Title;