import React, {useState} from "react";
import { useForm } from "react-hook-form";
import mascotasApi from "../../../lib/mascotasApi";

const CreateMascota = () => {
    const { register, handleSubmit, formState: {errors}} = useForm();

    const createMascotaApi = async (mascotaData) => {
        const data = await mascotasApi.createMascota(mascotaData);
        console.log(data);
    }
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1 className="text-center">Crear mascota</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <form
                    onSubmit={handleSubmit((data) => createMascotaApi(data))}
                    className="bg-dark text-white rounded p-3"
                    noValidate>
                        <div className="form-group mb-2">
                            <label htmlFor="nombre" className="mb-2">Nombre</label>
                            <input type="text" className="form-control" placeholder="Nombre" id="nombre" name="nombre"{...register("nombre", {
                                required: {value: true, message: "Campo requerido"}
                            })}/>
                            {errors.nombre && (
                                 <p className="font-weight-bold m-0">{errors.nombre.message}</p>
                            )}
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="ubicacion" className="mb-2">Ubicación</label>
                            <input type="text" className="form-control" placeholder="ubicacion" id="ubicacion" name="ubicacion" {...register("ubicacion", {
                                required: {value: true, message: "Campo requerido"}
                            })}/>
                            {errors.ubicacion && (
                                <p className="font-weight-bold m-0">{errors.ubicacion.message}</p>
                            )}
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="raza" className="mb-2">Raza</label>
                            <input type="text" className="form-control" placeholder="raza" id="raza" name="raza" {...register("raza", {
                                required: {value: true, message: "Campo requerido"}
                            })}/>
                            {errors.raza && (
                                <p className="font-weight-bold m-0">{errors.raza.message}</p>
                            )}
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="especie" className="mb-2">Especie</label>
                            <input type="text" className="form-control" placeholder="especie" id="especie" name="especie" {...register("especie", {
                                required: {value: true, message: "Campo requerido"}
                            })}/>
                            {errors.especie && (
                                <p className="font-weight-bold m-0">{errors.especie.message}</p>
                            )}
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="genero" className="mb-2">Genero</label>
                            <select name="genero" id="genero" className="form-select" {...register("genero", {
                                required: {value: true, message: "Campo requerido"}
                            })}>
                                <option value="">Seleccione un genero</option>
                                <option value="Macho">Macho</option>
                                <option value="Hembra">Hembra</option>
                            </select>
                            {errors.genero && (
                                <p className="font-weight-bold m-0">{errors.genero.message}</p>
                            )}
                        </div>
                        <div className="form-group mb-2">
                            <label htmlFor="foto" className="mb-2">Imagen</label>
                            <input type="text" className="form-control" placeholder="foto" id="foto" name="foto" {...register("foto", {
                                required: {value: true, message: "Campo requerido"}
                            })}/>
                             {errors.foto && (
                                <p className="font-weight-bold m-0">{errors.foto.message}</p>
                            )}
                        </div>
                        <button type="submit" className="btn btn-light mt-2">Guardar</button>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default CreateMascota;