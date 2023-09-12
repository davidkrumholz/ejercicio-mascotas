import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import mascotasApi from "../../lib/mascotasApi";

const MascotaItem = ({mascotaObject, type, id}) => {
  const typesMap = {
    list: "col-md-3",
    edit: "col-md-6"
  }
    const {foto, raza, especie, nombre} = mascotaObject;
    const [mascotasUser, setMascotasUser] = useState([]);

    const userId = localStorage.getItem("token");

    useEffect(() => {
      const getAllMascotasForUser = async () => {
        const mascotasData = await mascotasApi.getAllMascotasAsignToUser(userId);
        setMascotasUser(mascotasData);
      }
      getAllMascotasForUser();
    }, []);

    const addMascotaToUser = async () => {
      mascotasUser[mascotasUser.length] = id;
      const data = await mascotasApi.addMascotaToUser(userId, mascotasUser);
    }

    return (
        <div className={`col-12 ${typesMap[type]} mb-4`}>
        <div className="card">
          <img className="card-img-top" src={foto} alt="Card image cap" height={200}/>
          <div className="card-body">
            <h5 className="card-title">{nombre}</h5>
             <p>Raza: {raza}</p>
             <p>Especie: {especie}</p>
             {type=="list" && !mascotasUser.includes(id) && (
                <button className="btn btn-success" onClick={() => addMascotaToUser()}>
                Adoptar
              </button>
             )}
             {type=="list" ? (
              <Link to={`/mascotas/editar`} className="btn btn-primary mx-2">
              Editar
             </Link>
             ) : (
              <Link to={`/mascotas/editar/${id}`} className="btn btn-primary mx-2">
             Editar
            </Link>
             )}
          </div>
        </div>
      </div>
    )
}

export default MascotaItem;