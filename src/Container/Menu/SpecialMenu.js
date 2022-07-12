import React from "react";
import "./SpecialMenu.css";
import image from "../../Constants/images";
import Data from "../../Constants/Data";
import SubHeading from "../../Components/SubHeading/SubHeading";
import MenuItem from "../../Components/MenuItem/MenuItem";

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
                <MenuItem
                  key={wine.title + index}
                  title={wine.title}
                  price={wine.price}
                  tags={wine.tags}
                />
              ))}
            </div>
          </div>

          <div className="specialMenu-img flex__center">
            <img src={image.menu} alt="menuimg" />
          </div>

          <div className="specialMenu-cocktail flex__center">
            <p className="specialMenu-heading">Cocktails</p>
            <div className="specialMenu-items">
              {Data.cocktails.map((cocktail, index) => (
                <MenuItem
                  key={cocktail.title + index}
                  title={cocktail.title}
                  price={cocktail.price}
                  tags={cocktail.tags}
                />
              ))}
            </div>
          </div>
        </div>

        <div style={{ marginTop: 15 }}>
          <button type="button" className="custombtn">
            View More
          </button>
        </div>
      </div>
    );
    }







export default SpecialMenu;





