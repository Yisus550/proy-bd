import { useState } from "react";
import { Navbar } from "./components/Navbar";
import Inicio from "./components/Inicio";
import Compras from "./components/Compras";
import { Footer } from "./components/Footer";
import Login from "./components/Login";
import RegistroUsuarios from "./components/RegistroUsuarios";

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
