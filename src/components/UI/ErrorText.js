import styled from "styled-components";

const ErrorText = styled.div`
  width: 100%;
  height: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  color: red;
  margin: 10px 0;
  transition: all 1s ease;
  opacity: ${(props) =>
    props.state === "entering" || props.state === "entered" ? 1 : 0};
`;

export default ErrorText;
