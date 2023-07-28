import React from 'react';

const Card = ({ Name, Weight, Price,img }) => {
  return (
    <div className=" rounded-md  p-4">
    <img src={img} alt="" />
      <div className="text-lg font-bold">{Name}</div>
      <div className="text-md">{Weight}</div>
      <div className="text-sm text-gray-500">{Price}</div>
      {/* <div className="text-sm text-gray-500">{color}</div> */}
    </div>
  );
};

export default Card;
