import { axiosInstance } from '../helper/axios-config';

const getGeneros = () => {
    return axiosInstance.get('genero', {
        header: {
            'content-type':'application/json'
        }
    });
}

const createGenero = (data) => {
    return axiosInstance.post('genero', data, {
        header: {
            'content-type':'application/json'
        }
    });
}

const updateGenero = (genero_id, data) => {
    return axiosInstance.put(`genero/${genero_id}`, data, {
        header: {
            'content-type':'application/json'
        }
    });
}


export{
    getGeneros, createGenero, updateGenero
}