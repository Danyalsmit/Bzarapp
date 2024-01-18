import React from "react";
import ButtonWrapper from "./ButtonWrapper";

const Button = ({ value, icon, className, img, onClick, style, ...props }) => {
  return (
    <ButtonWrapper className={className} onClick={onClick} style={style}  {...props}>
      <img src={img} alt="" />
      {value}
      {icon}
     
    </ButtonWrapper>
  );
};

export default Button;
