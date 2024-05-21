import { useState } from "react";
import { Navbar } from "./components/Navbar";
import Inicio from "./components/Inicio";
import Compras from "./components/Compras";
import { Footer } from "./components/Footer";

export default function App() {
  const [page, setPage] = useState("")

  function getPage() {
    switch (page) {
      case "inicio":
        return <Inicio />
      case "compras":
        return <Compras />
      default:
        return <Inicio />
    }
  }

  return (
    <>
      <Navbar setPage={setPage} />
      {getPage()}
      <Footer />
    </>
  )
}
