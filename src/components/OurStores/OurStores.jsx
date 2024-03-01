import { nanoid } from "nanoid";

import { Button, DivOurStoresItem, WrapperStyled } from "./OurStores.styled";
import { stores } from "../../data";

// const handleClick = (type) => {
//   console.log('button clicked', type);
//   setContent(type)
// }

const OurStores = () => {

  const handleClick = (type) => {
    console.log("button clicked", type);
    // setContent(type);
  };

  return (
    <WrapperStyled>
      {stores.map((store) => (
        <DivOurStoresItem key={nanoid()}>
          <h3>{store.title}</h3>
          <img src={store.image} alt={store.title} />
          <Button onClick={() => handleClick(store.title)}>
            АДРЕСИ
          </Button>
        </DivOurStoresItem>
      ))}
    </WrapperStyled>
  );
};

export default OurStores;
