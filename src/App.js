import { Route, Routes } from "react-router-dom";
import { GrReactjs } from "react-icons/gr";

import { Container, Header, Logo, Link } from "./App.styled";
import './styles.css';

import HomePage from "./pages/HomePage";
import ControlledFormPage from "./pages/ControlledFormPage";
import UncontrolledFormPage from "./pages/UncontrolledFormPage";
import FormikFormPage from './pages/FormikFormPage';

export const App = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <GrReactjs />
          <b>Fortune Fame</b>
        </Logo>
        <nav>
          <Link to="/">
            Home
          </Link>
          <Link to="/controlled-form">
            Controlled Form
          </Link>
          <Link to="/uncontrolled-form">
            Uncontrolled Form
          </Link>
          <Link to="/formik-form">
            Formik Form
          </Link>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/controlled-form" element={<ControlledFormPage />} />
        <Route path="/uncontrolled-form" element={<UncontrolledFormPage />} />
        <Route path="/formik-form" element={<FormikFormPage />} />
      </Routes>
    </Container>
  );
};

export default App;