
import { nanoid } from 'nanoid';
import { WrapperStyled } from './ProductList.styled';
import {
  Button,
  DivProductItem,
} from '../ProductList/ProductList.styled';
import { categories } from '../../data';



const ProductList = () => { 
  
  
    return (
      <WrapperStyled>
        {
          categories.map((category) => ( 
          <DivProductItem key={nanoid()}>
            <img src={category.image} alt={category.title} />
            <h3>{category.title}</h3>
            <Button>ЯК ЦЕ</Button>
          </DivProductItem>
        ))}        
      </WrapperStyled>
    );
  };
  
  export default ProductList;