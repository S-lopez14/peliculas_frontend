import { axiosInstance } from '../helper/axios-config';

const getTipos = () => {
    return axiosInstance.get('tipo', {
        header: {
            'content-type':'application/json'
        }
    });
}

const createTipo = (data) => {
    return axiosInstance.post('tipo', data, {
        header: {
            'content-type':'application/json'
        }
    });
}

const updateTipo = (tipo_id, data) => {
    return axiosInstance.put(`tipo/${tipo_id}`, data, {
        header: {
            'content-type':'application/json'
        }
    });
}


export{
    getTipos, createTipo, updateTipo
}