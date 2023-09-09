const MascotaItem = ({mascotaObject}) => {
    const {foto, raza, especie, nombre} = mascotaObject;
    return (
        <div className="col-12 col-md-3">
        <div className="card">
          <img className="card-img-top" src={foto} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{nombre}</h5>
             <p>Raza: {raza}</p>
             <p>Especie: {especie}</p>
            <button className="btn btn-success">
              Adoptar
            </button>
            <button className="btn btn-primary mx-2">
             Editar
            </button>
          </div>
        </div>
      </div>
    )
}

export default MascotaItem;