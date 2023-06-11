import "./ColorBoxGrid.css";

import ColourBox from "./ColourBox";


function ColourBoxGrid() {
    return (
        <div className="colorBoxGrid">
            <ColourBox />
            <ColourBox />
            <ColourBox />
            <ColourBox />
            <ColourBox />
        </div>
    )
}

export default ColourBoxGrid;