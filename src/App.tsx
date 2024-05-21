import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import Inicio from "./components/Inicio";
import Compras from "./components/Compras";
import Login from "./components/Login";
import RegistroUsuarios from "./components/RegistroUsuarios";
import Ventas from "./components/Ventas";

export default function App() {
  const [page, setPage] = useState("");
  const [isLogged, setIsLogged] = useState(false);

  function getPage() {
    switch (page) {
      case "inicio":
        return <Inicio />;
      case "compras":
        return <Compras />;
      case "usuarios":
        return <RegistroUsuarios />;
      case "ventas":
        return <Ventas />;
      default:
        return <Inicio />;
    }
  }
  
  return (
    <>
      {!isLogged ? (
        <Login setIsLogged={setIsLogged} />
      ) : (
        <>
          <Navbar setPage={setPage} />
          {getPage()}
          <Footer />
        </>
      )}
    </>
  );
}
