import React from "react";
import "./SpecialMenu.css";
import image from "../../Constants/images";
import Data from "../../Constants/Data";
import SubHeading from "../../Components/SubHeading/SubHeading";

const SpecialMenu = () => {
    return (
      <div className="specialMenu flex__center sectionpadding" id="menu">
        <div className="specialMenu-title">
          <SubHeading title="Menu that fits your palatte" />
          <h1 className="headtext">Today's Specials</h1>
        </div>
<div className="specialMenu-menu">
    <div className="specialMenu-wine flex__center">
        <p className="specialMenu-heading">Wine and Beer</p>
        <div className="specialMenu-items">
            {Data.wines.map((wine, index) => (
                <p>{wine.title}</p>
            ))}
        </div>

    </div>
</div>


      </div>
    );
    }







export default SpecialMenu;





