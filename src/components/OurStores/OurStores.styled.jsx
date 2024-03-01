import styled from "styled-components";

export const WrapperStyled = styled.div`
  border: 3px solid #000;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  justify-items: center;
  grid-gap: 20px;

  @media screen and (min-width: 375px) {
    width: 320px;
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
    width: 1300px;
  }
`;

export const DivOurStoresItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-radius: 12px;
  background: white;
  &:hover {
    background-color: green;
    color: white;
  }
`;

export const Button = styled.button`
  background-color: springGreen;
  color: black;
  font-size: 16px;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  margin: 1rem;
  cursor: pointer;
  border: none;
  outline: none;
  &:hover {
    background-color: yellow;
    color: blue;
  }
`;
