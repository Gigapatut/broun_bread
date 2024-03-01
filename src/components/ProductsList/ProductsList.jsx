
import { products } from "../../products";
import MoreFotos from "../MoreFotos/MoreFotos";
import {
  Title,
  Card,
  Description,
  Info,
  MainImage,
  FotosList,
  Container,
} from "./ProductsList.styled";
import { useLocation } from "react-router-dom";

const ProductsList = () => {
  const location = useLocation();

  const filter = location.pathname.slice(12);

  const product = products.filter((item) => {
    return item.category === filter
  });

  const [trude] = product;
  const { title } = trude;
  return (
    
    <>
      <Title>
        <h1>{title}</h1>;
      </Title>
      {product.map((item) => {
        
        const {
          id,
          image,
          appellations,
          description,
          weight,
          validity,
          composition,
          fotos,
        } = item;
        
        return (
          <Container>
            <Card key={id}>
              <MainImage>
                <img src={image} alt="product" width="100%" height="100%" />
              </MainImage>
              <Description>
                <h2>{appellations}</h2>
                <Info>{description}</Info>
                <Info>
                  <b>Маса нетто:</b> {weight}
                </Info>
                <Info>
                  <b>Термін реалізації:</b>Термін реалізації: {validity}
                </Info>
                <Info>
                  <b>Склад:</b> {composition}
                </Info>
                <FotosList><MoreFotos fotos={fotos} /></FotosList>
              </Description>
            </Card>
          </Container>
        )
      })}
    </>
  );
};
export default ProductsList;
