import styled from 'styled-components';
import image from '../../img/bread.webp';
export const HomeScreenDiv = styled.div`
  background-image: url(${image});
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.9;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;  
  color: yellow;
  margin: 0 auto;
`;
export const HeaderSite = styled.p`
  margin-bottom: 40px;
  font-size: 80px;
  
`;

export const BlockInfo = styled.p`  
  margin: 40px;
  font-size: 18px;
  color: var(--beige-color);
`;