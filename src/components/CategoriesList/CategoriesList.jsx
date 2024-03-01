
import { WrapperStyled } from "./CategoriesList.styled";
import { Button, DivProductItem } from "./CategoriesList.styled";
import { categories } from "../../data";

import { useNavigate } from "react-router-dom";

const CategoriesList = () => {
  const navigate = useNavigate();
  
  const handleClick = (category) => {
    navigate(`${category}`);
  };

  return (
    <WrapperStyled>
      
      {categories.map((elem) => {
        const { id, title, image, category } = elem;

        return (
          <DivProductItem key={id}>
            <h3>{title}</h3>
            <img src={image} alt={title} />
            <Button onClick={() => handleClick(category)}>
              АСОРТИМЕНТ
            </Button>
          </DivProductItem>
        );
      })}
    </WrapperStyled>
  );
};

export default CategoriesList;
