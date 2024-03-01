import styled from "styled-components";


export const Foto = styled.div`
  cursor: pointer;
  &:hover {
    box-shadow: 0 8px 10px rgba(0, 0, 0, 0.1);
    transform: translateY(-1px);
  }

  &:active {
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    transform: translateY(0);
  }
`;

