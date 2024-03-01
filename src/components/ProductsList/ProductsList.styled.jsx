import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;
  
`;
export const Title = styled.div`
  display: flex;
  justify-content: center;
`;

export const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap; 20px;
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  margin: 40px;
`;
export const MainImage = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 20px;
`;
export const Info = styled.div``;
export const Description = styled.div``;

export const FotosList = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, 60px);
  grid-gap: 10px;
`;
export const Foto = styled.div``;