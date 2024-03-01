import { Suspense, lazy } from "react";
import {
  Routes,
  Route,
  NavLink,
  Navigate,  
} from "react-router-dom";

import { Container, NavMenu, DivLogo } from "./App.styled";
import logo from '../../img/logo_bakery.png';

const Home = lazy(() => import('../../page/Home/Home'));
const About = lazy(() => import('../../page/About/About'));
const Categories = lazy(() => import('../../page/Categories/Categories'));
const Shops = lazy(() => import('../../page/Shops/Shops'));
const Cooperation = lazy(() => import('../../page/Cooperation/Cooperation'));
const ProductList = lazy(() => import("../ProductsList/ProductsList"));

function App() {
  
  return (
    <Container>
      <NavMenu>
        <DivLogo>
          <NavLink className="link" to="/" end>
            <img src={logo} alt="logo" />
          </NavLink>
        </DivLogo>
        <NavLink className="link" to="/about">
          Хто ми
        </NavLink>
        <NavLink className="link" to="/categories">
          Чим багаті
        </NavLink>
        <NavLink className="link" to="/shops">
          Наші магазини
        </NavLink>
        <NavLink className="link" to="/cooperation">
          Для співробітництва
        </NavLink>
      </NavMenu>
      <Suspense fallback={"Loading....."}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="categories" element={<Categories />} />

          <Route
            path="categories/:category"
            element={<ProductList />}
          />
          <Route path="shops" element={<Shops />} />
          <Route path="cooperation" element={<Cooperation />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
      
    </Container>
  );
}

export default App;
