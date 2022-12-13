import styled from "styled-components";

export const ArrowButton = styled.button`
  border-style: none;
  width: 25px;
  height: 25px;
  border-radius: 20px;
  background: var(--main--bg--color);
  &:hover {
    background: var(--main--hover--color);
    transition: 0.3s;
  }
`