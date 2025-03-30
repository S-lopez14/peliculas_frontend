import { axiosInstance } from '../helper/axios-config';

const getDirectores = () => {
    return axiosInstance.get('director', {
        header: {
            'content-type':'application/json'
        }
    });
}

const createDirector = (data) => {
    return axiosInstance.post('director', data, {
        header: {
            'content-type':'application/json'
        }
    });
}

const updateDirector = (director_id, data) => {
    return axiosInstance.put(`director/${director_id}`, data, {
        header: {
            'content-type':'application/json'
        }
    });
}


export{
    getDirectores, createDirector, updateDirector
}