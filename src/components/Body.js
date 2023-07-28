import React from "react";
import Navbar from "./NavBar";
import Carousel from "./Crousel";
import { carDetails } from "./config";
import Card from "./Card";

const Body = () => {
  return (
    <div>
      
      <div>
        <Carousel />
      </div>

      <div>
        {carDetails.map((item) => (
          <Card {...item} />
        ))
        }
      </div>
    </div>
  );
};

export default Body;
