import styled from 'styled-components';

export const WrapperStyled = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  flex-wrap: wrap;
  margin-top: 20px;
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 16px;
  }
  @media screen and (min-width: 1440px) {
    width: 1300px;
  }
`;

export const DivProductItem = styled.div`
  
  width: 600px;
  
  border-radius: 12px;
  background: skyblue;
  border: 1px solid rgba(239, 237, 232, 0.2);
  @media screen and (min-width: 768px) {
    width: 224px;
  }
  @media screen and (min-width: 1440px) {
    width: 237px;
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
outline: none
&:hover {
  background-color: green;
  color: white;
}
`;