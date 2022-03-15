import React from "react";
import styled from "styled-components";

const PaginationList = styled.ul`
  list-style: none;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  padding: 1rem;
`;
const PaginationItem = styled.li`
  cursor: pointer;
  text-align: center;
  border: 2px solid #eee;
  padding: 0.5rem 2rem;
  border-radius: 10px;
  margin-left: 5px;
  background-color: #fff;
  transition: all 1s ease-out;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

  &:hover {
    background-color: #f6f2f2;
  }

  a {
      text-decoration: none;
      font-size: 1.5rem;
  }
`;

const Pagination = (props) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(props.totalRows / props.rowPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationList>
      {pageNumbers.map((pageNum) => {
        return (
          <PaginationItem key={pageNum} onClick={props.paginate.bind(this, pageNum)}>
            <a href="!#">
              {pageNum}
            </a>
          </PaginationItem>
        );
      })}
    </PaginationList>
  );
};

export default Pagination;
