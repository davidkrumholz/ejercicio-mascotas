import React, { useState, useEffect } from "react";
import { set, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import mascotasApi from "../../lib/mascotasApi";

const MascotaFormEdit = () => {
  
  const { mascotaId } = useParams();
  const [mascotaData, setMascotaData] = useState({});
  const [mascotaObject, setMascotaObject] = useState({});

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues:{
        nombre:mascotaData.nombre || "",
        ubicacion: mascotaData.ubicacion || "",
        raza: mascotaData.raza || "",
        especie: mascotaData.especie || "",
        genero: mascotaData.genero || "",
        foto: mascotaData.foto || ""
    }
  })

  const HandleMascota = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    console.log(property, value);
  }

  useEffect(() => {
    const getMascotaById = async () => {
      const data = await mascotasApi.getMascotaById(mascotaId);
      setMascotaData(data);
      //Funciona para que cuando se tenga información de lo que le mandemos va a resetear el valor
      reset(data);
    };
    getMascotaById();
  }, [mascotaId]);

  

  const onSubmit = async dataObject => {
    const data = await mascotasApi.updateMascotaById(dataObject, mascotaId);
    console.log(data); 
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="bg-dark text-white rounded p-3"
              noValidate
            >
              <div className="form-group mb-2">
                <label htmlFor="nombre" className="mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre"
                  id="nombre"
                  name="nombre"
                  {...register("nombre", {
                    required: { value: true, message: "Campo requerido" },
                  })}
                />
                {errors.nombre && (
                  <p className="font-weight-bold m-0">
                    {errors.nombre.message}
                  </p>
                )}
              </div>
              <div className="form-group mb-2">
                <label htmlFor="ubicacion" className="mb-2">
                  Ubicación
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="ubicacion"
                  id="ubicacion"
                  name="ubicacion"
                  {...register("ubicacion", {
                    required: { value: true, message: "Campo requerido" },
                  })}
                />
                {errors.ubicacion && (
                  <p className="font-weight-bold m-0">
                    {errors.ubicacion.message}
                  </p>
                )}
              </div>
              <div className="form-group mb-2">
                <label htmlFor="raza" className="mb-2">
                  Raza
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="raza"
                  id="raza"
                  name="raza"
                  {...register("raza", {
                    required: { value: true, message: "Campo requerido" },
                  })}
                />
                {errors.raza && (
                  <p className="font-weight-bold m-0">{errors.raza.message}</p>
                )}
              </div>
              <div className="form-group mb-2">
                <label htmlFor="especie" className="mb-2">
                  Especie
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="especie"
                  id="especie"
                  name="especie"
                  {...register("especie", {
                    required: { value: true, message: "Campo requerido" },
                  })}
                />
                {errors.especie && (
                  <p className="font-weight-bold m-0">
                    {errors.especie.message}
                  </p>
                )}
              </div>
              <div className="form-group mb-2">
                <label htmlFor="genero" className="mb-2">
                  Genero
                </label>
                <select
                  name="genero"
                  id="genero"
                  className="form-select"
                  {...register("genero", {
                    required: { value: true, message: "Campo requerido" },
                  })}
                >
                  <option value="">Seleccione un genero</option>
                  <option
                    value="Macho"
                    selected={mascotaData.genero === "Macho"}
                  >
                    Macho
                  </option>
                  <option
                    value="Hembra"
                    selected={mascotaData.genero === "Hembra"}
                  >
                    Hembra
                  </option>
                </select>
                {errors.genero && (
                  <p className="font-weight-bold m-0">
                    {errors.genero.message}
                  </p>
                )}
              </div>
              <div className="form-group mb-2">
                <label htmlFor="foto" className="mb-2">
                  Imagen
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="foto"
                  id="foto"
                  name="foto"
                  {...register("foto", {
                    required: { value: true, message: "Campo requerido" },
                  })}
                />
                {errors.foto && (
                  <p className="font-weight-bold m-0">{errors.foto.message}</p>
                )}
              </div>
              <button type="submit" className="btn btn-light mt-2">
                Guardar
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default MascotaFormEdit;
