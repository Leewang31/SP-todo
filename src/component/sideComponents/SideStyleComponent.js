import styled from "styled-components";

export const TodoButton = styled.button`
  width: 300px;
  height: 200px;
  border-style: none;
  border-radius: 10px;
  background: var(--main--bg--color);
  font-size: 38px;
  font-weight: bold;
  letter-spacing :3px;
  color: black;
  position: relative;
  left: 50%;
  transform: translate(-50%,0%);
  &:hover {
    background: var(--main--hover--color);
    transition: 0.3s;
    color: white;
  }
`
export const TodoDelete = styled.button`
  border-style: none;
  margin-right: 10px;
  border-radius: 10px;
  opacity: 70%;
  &:hover {
    opacity: 100%;
    transition: 0.3s;
  }
`