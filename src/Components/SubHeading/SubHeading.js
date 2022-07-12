import React from "react";
import image from "../../Constants/images";
const SubHeading =({title}) => {
    return (
        <div style={{marginbottom:'20px'}}>
            <p className="pstyle">
                {title}
                        </p>
                        <img src={image.spoon} alt="spoonimg" className="spponimg"/>

        </div>
    )
}









export default SubHeading;
