import React, { useState, useEffect } from 'react';
import { getDirectores } from '../../services/directorService';
import { getGeneros } from '../../services/generoService';
import { getTipos } from '../../services/tipoService';
import { getProductoras } from '../../services/productoraService';
import { createMedia } from '../../services/mediaService';
import Swal from 'sweetalert2';


export const MediaNew = ({handleOpenModal, listInventories}) => {

  const [ Generos, setGeneros ] = useState([]);
  const [ Directores, setDirectores ] = useState([]);
  const [ Productoras, setProductoras ] = useState([]);
  const [ Tipos, setTipos ] = useState([]);
  const [ valoresForm, setValoresForm ] = useState([]);
  const { Serial = '', Titulo = '', Sinopsis = '', Url = '', Imagen = '', Estreno = '', Genero, Director, Productora, Tipo } = valoresForm

  const listGeneros = async () => {
    try {
      const { data } = await getGeneros();
      setGeneros(data);

    } catch (error) {
      console.log(error);
    }
  } 
  useEffect(() => {
    listGeneros();
  },[]);


  const listDirectores = async () => {
    try {
      const { data } = await getDirectores();
      setDirectores(data);

    } catch (error) {
      console.log(error);
    }
  } 
  useEffect(() => {
   listDirectores();
  },[]);


  const listProductoras = async () => {
    try {
      const { data } = await getProductoras();
      setProductoras(data);

    } catch (error) {
      console.log(error);
    }
  } 
  useEffect(() => {
   listProductoras();
  },[]);


  const listTipos = async () => {
    try {
      const { data } = await getTipos();
      setTipos(data);

    } catch (error) {
      console.log(error);
    }
  } 
  useEffect(() => {
   listTipos();
  },[]);


  const handleOnChange = ({ target }) => {
    const { name, value } = target;
    setValoresForm({...valoresForm, [name]: value })
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const media = {
      Serial, Titulo, Sinopsis, Url, Imagen, Estreno,
      Genero:{ _id: Genero}, Director:{ _id: Director}, Productora:{ _id: Productora}, Tipo:{ _id: Tipo}
    }
    console.log(media);

    try {

      Swal.fire({
        allowOutsideClick: false,
        text: 'Cargando...'
      });
      Swal.showLoading();
      const { data } = await createMedia(media);
      handleOpenModal();
      listInventories();
      Swal.close();

    } catch (error) {
      console.log(error);
      Swal.close();
    }

  }


  return (
    <div className='sidebar'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col'>
            <div className='sidebar-header'>
              <h3>Nueva Pelicula</h3>
              <i className="fa-solid fa-xmark" onClick={handleOpenModal}></i>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <hr />
          </div>
        </div>

        <form onSubmit={(e) => handleOnSubmit(e)} >
          <div className='row'>

            <div className='col'>
              <div className="mb-3">
                <label className="form-label">Serial</label>
                <input type="text" name='Serial' value={Serial} onChange={e => handleOnChange(e)} required  className="form-control"/>
              </div>
            </div>

            <div className='col'>
              <div className="mb-3">
                <label className="form-label">Titulo</label>
                <input type="text" name='Titulo' value={Titulo} onChange={e => handleOnChange(e)} required  className="form-control"/>
              </div>
            </div>

            <div className='col'>
              <div className="mb-3">
                <label className="form-label">Sinopsis</label>
                <input type="text" name='Sinopsis' value={Sinopsis} onChange={e => handleOnChange(e)} required  className="form-control"/>
              </div>
            </div>

            <div className='col'>
              <div className="mb-3">
                <label className="form-label">Url</label>
                <input type="url" name='Url' value={Url} onChange={e => handleOnChange(e)} required  className="form-control"/>
              </div>
            </div>

          </div>
          <div className='row'>
          <div className='col'>
              <div className="mb-3">
                <label className="form-label">Imagen</label>
                <input type="text" name='Imagen' value={Imagen} onChange={e => handleOnChange(e)} required  className="form-control"/>
              </div>
            </div>

            <div className='col'>
              <div className="mb-3">
                <label className="form-label">Estreno</label>
                <input type="date" name='Estreno' value={Estreno} onChange={e => handleOnChange(e)} required  className="form-control"/>
              </div>
            </div>

            <div className='col'>
              <div className="mb-3">
                <label className="form-label">Genero</label>
                <select name='Genero' value={Genero} onChange={e => handleOnChange(e)} required  className="form-select">
                <option value="">-- Seleccione --</option> 
                {
                  Generos.map(({ _id, Nombre}) => {
                    return <option key={_id} value={_id}> {Nombre} </option>
                  })
                }
                </select>
              </div>
            </div>

            <div className='col'>
              <div className="mb-3">
                <label className="form-label">Director</label>
                <select name='Director' value={Director} onChange={e => handleOnChange(e)} required  className="form-select">
                <option value="">-- Seleccione --</option> 
                {
                  Directores.map(({ _id, Nombre}) => {
                    return <option key={_id} value={_id}> {Nombre} </option>
                  })
                }
                </select>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col'>
                <div className="mb-3">
                  <label className="form-label">Productora</label>
                  <select name='Productora' value={Productora} onChange={e => handleOnChange(e)} required  className="form-select">
                  <option value="">-- Seleccione --</option> 
                  {
                    Productoras.map(({ _id, Nombre}) => {
                      return <option key={_id} value={_id}> {Nombre} </option>
                    })
                  }
                  </select>
                </div>
              </div>

              <div className='col'>
                <div className="mb-3">
                  <label className="form-label">Tipo</label>
                  <select name='Tipo' value={Tipo} onChange={e => handleOnChange(e)} required  className="form-select">
                  <option value="">-- Seleccione --</option> 
                  {
                    Tipos.map(({ _id, Nombre}) => {
                      return <option key={_id} value={_id}> {Nombre} </option>
                    })
                  }
                  </select>
                </div>
              </div>
            </div>
            
            <div className='row'>
              <div className='col'>
                <button className="btn btn-primary">Guardar</button>
              </div>
            </div>

        </form>
      </div>
    </div>
  )
}