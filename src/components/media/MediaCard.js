import React from 'react'
import { Link } from 'react-router-dom';

export const MediaCard = (props) => {

    const { media } = props
    return (
    <div className="col">
        <div className="card">
            <img src={media.Url} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">Caracteristicas</h5>
                <hr/>
                <p className="card-text">{`Serial: ${media.Serial}`}</p>
                <p className="card-text">{`Titulo: ${media.Titulo}`}</p>
                <p className="card-text">{`Sinopsis: ${media.Sinopsis}`}</p>
                <p className="card-text">{`Estreno: ${media.Estreno}`}</p>
                <p className="card-text">{`Genero: ${media.Genero.Nombre}`}</p>
                <p className="card-text">{`Director: ${media.Director.Nombre}`}</p>
                <p className="card-text">{`Productora: ${media.Productora.Nombre}`}</p>
                <p className="card-text">{`Tipo: ${media.Tipo.Nombre}`}</p>
                <p className="card-text">
                  <Link to = {`medias/edit/${media._id}`}>Ver mas</Link>
                </p>
            </div>
        </div>
    </div>   
  );
};
