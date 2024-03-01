
import { nanoid } from "nanoid";
import { Foto } from './MoreFotos.styled';
import { useState } from "react";
import Modal from "../Modal/Modal";
import "./Scss/index.scss";

  

const MoreFotos = ({ fotos }) => {
    const [open, setOpen] = useState(false);
    
  return fotos.map((item) => {    
    return (
      <>
        <Foto
          key={nanoid()}
          onClick={() => {
            setOpen(true);
          }}
        >
          <img src={item} alt="Product" width="50px" height="50px" />
        </Foto>
        <Modal open={open} setOpen={setOpen}>
          <img
            src={item}
            alt="foto"
            width="600px"
            height="800px"
          />
        </Modal>
      </>
    );
    });
  };
export default MoreFotos;
