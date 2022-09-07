import { Routes as WrapperRoutes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Cadastro from "./Components/Cadastro";
import Perfil from "./Components/Perfil";
import Feed from "./Components/Feed";

export default function Routes() {
  return (
    <WrapperRoutes>
      <Route path="/" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/perfil" element={<Perfil />} />
      <Route path="/feed" element={<Feed />} />
    </WrapperRoutes>
  );
}
