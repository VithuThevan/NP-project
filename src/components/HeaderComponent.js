import React from "react";
import { Link } from "react-router-dom";

const HeaderComponents = () => {
  return (
    <div className="text-center">
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark ">
          <div>
            <h2 className="navbar-brand center">
              Transport Management Admin Portal
            </h2>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default HeaderComponents;
