import React from "react";
import "./MenuItem.css";
const MenuItem = ({title, price, tags}) => {
    return (
      <div className="menuitem">
        <div className="menuitem-head">
          <div className="menuitem-name">
            <p className="pstyle">{title}</p>
          </div>
          <div className="menuitemdash">
            <div className="menuitem-price">
              <p className="pstyle" style={{ color: "#DCCA87" }}>
                {price}
              </p>
            </div>
          </div>
          <div className="menuitem-sub">
            <p className="pstyle" style={{ color: "#AAAAAA" }}>
                {tags}
            </p>
          </div>
        </div>
      </div>
    );
}






export default MenuItem;
