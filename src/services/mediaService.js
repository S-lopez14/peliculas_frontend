import { axiosInstance } from '../helper/axios-config';

const getMedias = () => {
    return axiosInstance.get('media', {
        header: {
            'content-type':'application/json'
        }
    });
}

const createMedia = (data) => {
    return axiosInstance.post('media', data, {
        header: {
            'content-type':'application/json'
        }
    });
}

const updateMedia = (media_id, data) => {
    return axiosInstance.put(`media/${media_id}`, data, {
        header: {
            'content-type':'application/json'
        }
    });
}

const getMediaForId = (media_id) => {
    return axiosInstance.get(`media/${media_id}`,{
        header: {
            'content-type':'application/json'
        }
    });
}

export{
    getMedias, createMedia, updateMedia, getMediaForId
}