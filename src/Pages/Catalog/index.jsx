import React, { useState, useEffect } from "react";
import { set } from "react-hook-form";
import mascotasApi from "../../lib/mascotasApi";
import MascotaItem from "../../Components/mascotaItem";
import { Link } from "react-router-dom";

const Catalog = () => {
  const [filter, setFilter] = useState("especie");
  const [especieValue, setEspecieValue] = useState("");
  const [razaValue, setRazaValue] = useState("");
  const [mascotas, setMascotas] = useState([]);
  const [especies, setEspecies] = useState([]);
  const [filterData, setFilterData] = useState([]);

  const filterHandler = (event) => {
    setFilter(event.target.value);
  };

  const filterDataHandler = (event) => {
    const value = event.target.value;
    switch (filter) {
        case "especie":
            const filterDataEspecie = () => {
                return mascotas.filter((mascota) => {
                   return mascota[1].especie == value;
               })
           }
           const dataEspecie = filterDataEspecie();
           setFilterData(dataEspecie);
            break;
        case "raza":
            const filterDataRaza = () => {
                return mascotas.filter((mascota) => {
                   return mascota[1].raza.includes(value);
               })
           }
           const dataRaza = filterDataRaza();
           setFilterData(dataRaza);
            break;
        default:
            break;
    }
  }

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
            <h1 className="text-center">Catalogo de mascotas</h1>
            <Link className="btn btn-success" to={"mascotas/create"}>Crear mascota</Link>
            <div className="d-flex justify-content-around">
              <span>Filtrar por:</span>
              <form action="" className="d-flex">
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="especie"
                    id="exampleRadios1"
                    value="especie"
                    checked={filter == "especie"}
                    onChange={(event) => filterHandler(event)}
                  />
                  <label className="form-check-label" for="exampleRadios1">
                    Especie
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="especie"
                    id="exampleRadios2"
                    value="raza"
                    checked={filter == "raza"}
                    onChange={(event) => filterHandler(event)}
                  />
                  <label className="form-check-label" for="exampleRadios2">
                    Raza
                  </label>
                </div>
              </form>
            </div>
            {filter == "especie" && (
              <div className="form-group mt-3">
                <select
                  className="form-select"
                  onChange={(event) => filterDataHandler(event)}
                >
                  <option defaultValue=""></option>
                 {especies && especies.map((especie) => {
                    return (
                        <option key={especie} value={especie}>{especie}</option>
                    )
                 })}
                </select>
              </div>
            )}
            {filter == "raza" && (
              <div className="form-group mt-3">
                <input
                  type="text"
                  className="form-control"
                  id="raza"
                  placeholder="Filtro por raza"
                  onChange={(event) => filterDataHandler(event)}
                />
              </div>
            )}
          </div>
        </div>
        <div className="row mt-5">
            {filterData && filterData.length > 0 ? (
                filterData.map((mascota) => {
                    return (
                        <MascotaItem key={mascota[0]} mascotaObject={mascota[1]} type={"list"} id={mascota[0]} />
                      );
                })
            ) : mascotas ? (
                mascotas.map((mascota) => {
                  return (
                    <MascotaItem key={mascota[0]} mascotaObject={mascota[1]} type={"list"} id={mascota[0]} />
                  );
                })
              ) : (
                <p className="text-danger">No se encontro ninguna mascota</p>
              )}
        </div>
      </div>
    </>
  );
};

export default Catalog;
