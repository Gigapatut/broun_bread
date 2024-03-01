import styled from 'styled-components';
import image from '../../img/flag.jpg';

export const Container = styled.div`
  
  min-width: 320px;
  margin: 0 auto;
  background-image: url(${image});
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.9;
  padding-bottom: 20px;
  

  @media screen and (min-width: 375px) {
    width: 320px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
  }
`;
export const NavMenu = styled.nav`
  position: sticky;  
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 150px;
  display: flex;
  gap: 32px;
  justify-content: center;
  background-color: yellow;
  font-size: 18px;
  font-weight: 500;
  `;
export const DivLogo = styled.div`
  width: 100%;
  position: absolute;
  top: 40px;
  left: 10px;

`;