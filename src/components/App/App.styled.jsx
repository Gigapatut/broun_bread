import styled from 'styled-components';
import image from '../../img/flag.jpg';

export const Container = styled.div`
  width: 1440px;
  margin: auto;
  padding: 0 128px 150px 128px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${image});
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.9;
`;
export const NavMenu = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;

  margin-bottom: 100px;

  display: flex;
  z-index: 100;
  gap: 32px;
  justify-content: center;
  background-color: yellow;
   

  font-size: 18px;
  font-weight: 500;
  `;
export const DivLogo = styled.div`
  position: absolute;
  left: 150px;

`;