import { axiosInstance } from '../helper/axios-config';

const getProductoras = () => {
    return axiosInstance.get('productora', {
        header: {
            'content-type':'application/json'
        }
    });
}

const createProductora = (data) => {
    return axiosInstance.post('productora', data, {
        header: {
            'content-type':'application/json'
        }
    });
}

const updateProductora = (productora_id, data) => {
    return axiosInstance.put(`productora/${productora_id}`, data, {
        header: {
            'content-type':'application/json'
        }
    });
}


export{
    getProductoras, createProductora, updateProductora
}