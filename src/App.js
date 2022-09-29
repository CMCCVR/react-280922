import { useState } from "react";
import "./App.css";
import Pagination from "./pagination";
import paises from "./paises";

function App() {
  const [pais, setPais] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

   return (
    <div className="App">
      <h2>PAÍS : {pais.nome}</h2>
      <input disabled type="text" value={pais.nome} />
      <div>
        {paises.slice(currentPage * 10 - 10, currentPage * 10).map((p) => (
          <img
            onMouseOver={() => setPais(p)}
            style={{
              margin: "1rem",
              maxWidth: "4rem",
              border: p.sigla === pais.sigla && "4px solid red",
              padding: p.sigla === pais.sigla && "4px",
            }}
            src={`https://countryflagsapi.com/svg/${p.sigla}`}
            alt={p.nome}
          />
        ))}
      </div>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={paises.length}
        pageSize={15}
        onPageChange={page => setCurrentPage(page)}
      />
    </div>
  );
}
export default App;


// variavel
// quantas bandeiras a ver por paginas
// 