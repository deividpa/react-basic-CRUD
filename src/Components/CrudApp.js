import React from "react";

const initialDb = [
  { id: 1, name: "naruto", aldea: "Konoha" },
  {
    id: 2,
    name: "Gaara",
    aldea: "Arena",
  },
  {
    id: 3,
    name: "Tsunade",
    aldea: "Konoha",
  },
  { id: 4, name: "Sasuke", aldea: "Ojos rojos" },
];

export default function CrudApp() {
  return (
    <>
      <h1>CRUD App</h1>
      <form></form>
      <table></table>
    </>
  );
}
