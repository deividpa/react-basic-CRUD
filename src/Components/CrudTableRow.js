export default function CrudTableRow({ el }) {
  return (
    <tr>
      <td>{el.id}</td>
      <td>{el.name}</td>
      <td>{el.constellation}</td>
      <td>
        <button>Actualizar</button>
        <button>Eliminar</button>
      </td>
    </tr>
  );
}
