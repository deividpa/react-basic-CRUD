import React from "react";
import CrudApp from "./Components/CrudApp";
import CrudForm from "./Components/CrudForm";
import CrudTable from "./Components/CrudTable";

function App() {
  return (
    <div>
      <h2>Creación de CRUD App con React</h2>
      <CrudApp />
      <hr />
      <CrudForm />
      <hr />
      <CrudTable />
    </div>
  );
}

export default App;
