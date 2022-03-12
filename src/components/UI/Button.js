import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  padding: 5px 20px;
  background-color: #fff;
  border-radius: 10px;
  border: none;
  outline: none;
  font-size: 2rem;
  transition: all 1s ease-out;
  border: 1px solid #eee;
  cursor: pointer;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

  &:hover {
    background-color: #f6f2f2;
  }
`;

const Button = (props) => {
  let curType;
  if(props.type !== "submit") {
    curType = 'button';
  }
  return (
    <StyledButton type={curType} onClick={props.onClick}>
      {props.children}
    </StyledButton>
  );
};

export default Button;
