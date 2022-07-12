import React from "react";
import image from "../../Constants/images";
//import SubHeading from "../../Components/SubHeading/SubHeading";
import "./Chef.css";

const Chef  = () => {

    return (
<div className="appbg sectionpadding appwrapper">
    <div className="appwrapper wrapperimg-reverse">
        <img src={image.chef} alt="chefimg"/>
    </div>

</div>

    )
}


export default Chef;
