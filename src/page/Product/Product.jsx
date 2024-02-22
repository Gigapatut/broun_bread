
import {
    CatalogDiv,
  } from './Product.styled';
import ProductList from '../../components/ProductList/ProductList';


const Catalog = () => {
    return (
      <CatalogDiv>
        
        <h2>ЧИМ БАГАТІ</h2>
        <ProductList />
                
      </CatalogDiv>
    );
  };
  export default Catalog;