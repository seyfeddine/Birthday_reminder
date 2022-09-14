import React, { useState } from "react";
import { users } from "../constants";

const Button = ({onClick}) => {

  return (
    <div onClick={onClick} className="flex justify-center bg-[#f28ab2] p-3 decoration-1 rounded text-white cursor-pointer text-[1.25rem]">
      Clear All
    </div>
  );
};

export default Button;
