import type { Dispatch } from "react";
import styled from "styled-components";

type Props = {
  setPage: Dispatch<React.SetStateAction<string>>;
};

const LogoContainer = styled.div`
  color: #5BC0EB;
`;

export const Navbar = ({ setPage }: Props) => {
  return (
    <nav className="navbar">
      <LogoContainer className="logo">Taqueria</LogoContainer>
      <ul className="nav-links">
        <li>
          <a onClick={() => setPage("inicio")}>Inicio</a>
        </li>
        <li>
          <a onClick={() => setPage("compras")}>Compra</a>
        </li>
        <li>
          <a onClick={() => setPage("ventas")}>Venta</a>
        </li>
        <li>
          <a onClick={() => setPage("usuarios")}>Usuarios</a>
        </li>
      </ul>
    </nav>
  );
};
