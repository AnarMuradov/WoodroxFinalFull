import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../Context/UserContext";
import { FurnitureDelete } from "../../../Services/DataCrud";
const AllFurniture = () => {
  const [cv, setCv] = useState(null);
  const { token } = useContext(UserContext);
  async function getApi() {
    await fetch("http://localhost:3000/furniture", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setCv(data);
      });
  }
  useEffect(() => {
    getApi();
  }, []);

  async function handleDelete(id) {
    await FurnitureDelete(id);
    await getApi();
  }
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>title</th>
            <th>Price</th>
            <th>Date</th>
            <th>image</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {cv &&
            cv.map((x) => {
              return (
                <tr key={x._id}>
                  <td>{x.title}</td>
                  <td>
                    {x.price}
                  </td>
                  <td>{x.date.slice(0, 10)}</td>
                  <td><img width={100} src={x.image} alt="" /></td>
                  <td>
                    <button className="btn" onClick={() => handleDelete(x._id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default AllFurniture;
