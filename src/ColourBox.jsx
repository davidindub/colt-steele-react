// import "./ColorBox.css";
import { useState } from "react";

function ColourBox() {
    const randomColour = () => Math.floor(Math.random()*16777215).toString(16);

    const [colour, setColour] = useState(randomColour);

    const handleClick = () => {
        setColour(randomColour);
    }

    return (
        <div className="colorBox" onClick={handleClick} style={{
            backgroundColor: `#${colour}`,
            height: "300px",
            width: "300px"
         }}></div>
    )
}

export default ColourBox;