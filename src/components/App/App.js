import { Suspense, lazy } from "react";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import { Container, NavMenu } from "./App.styled";


const Home = lazy(() => import('../../screen/Home/Home'));
const About = lazy(() => import('../../screen/About/About'));
const Product = lazy(() => import('../../screen/Product/Product'));
const Cooperation = lazy(() => import('../../screen/Cooperation/Cooperation'));

function App() {
  return (
    <Container>

    <NavMenu>
      <NavLink className="link" to="/" end>Головна</NavLink>
      <NavLink className="link" to="/about">Хто ми</NavLink>
      <NavLink className="link" to="/product">Чим багаті</NavLink>
      <NavLink className="link" to="/cooperation">Для співробітництва</NavLink>
    </NavMenu>

    <Suspense fallback={"Loading....."}>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="product" element={<Product />} />
        <Route path="cooperation" element={<Cooperation />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  </Container>

  );
}

export default App;
