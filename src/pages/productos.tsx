import  { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import Button from "../components/layouts/Button";

export default function Home() {
  const [jsonData, setJsonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('api/products/products.json')
      .then(response => response.json())
      .then(data => {
        setJsonData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error al cargar el archivo JSON:', error);
        setError(true);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error al cargar el archivo JSON</div>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="table mt-10">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>Precio</th>
            <th>Acciones</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {jsonData.map((item:any) => (
            <tr key={item.id}>
              <td>
                <Link to="prueba">
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.imagen} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.nombre}</div>
                      
                      <div className="text-sm opacity-50">{item.descripcion}</div>
                    </div>
                  </div>
                </Link>
              </td>
              <td>
                {item.descripcion}
                <br />
                <span className="badge badge-ghost badge-sm">{item.nombre}</span>
              </td>
              <td>{item.precio}</td>
             
              <td> 
                   <Button text="Crear" />
                <Button text="Editar" />
                <Button text="Eliminar" />
            
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
