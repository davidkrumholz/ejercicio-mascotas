import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import MascotaItem from "../../../Components/mascotaItem";
import mascotasApi from "../../../lib/mascotasApi";
const EditMascota = () => {
  const [mascotas, setMascotas] = useState([]);
  const [especies, setEspecies] = useState([]);

  useEffect(() => {
    const getAllMascotas = async () => {
      const mascotasData = await mascotasApi.getAllMascotas();
      setMascotas(Object.entries(mascotasData));
      setEspecies(
        Object.values(mascotasData).reduce((accum, current) => {
          return accum.includes(current.especie)
            ? [...accum]
            : [...accum, current.especie];
        }, [])
      );
    };
    getAllMascotas();
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center">Editar mascotas</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6 mt-2">
          <div className="row">
                {
                mascotas.map((mascota) => {
                  return (
                    <MascotaItem key={mascota[0]} mascotaObject={mascota[1]} type={"edit"} id={mascota[0]} />
                  );
                })
                }
                </div>
          </div>
          <div className="col-12 col-md-6 mt-2">
          <Outlet/>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditMascota;
