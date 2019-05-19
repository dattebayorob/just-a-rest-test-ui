import axios from 'axios'

const BASE_URL = 'http://localhost:8080/entities'
let api = axios.create({ baseURL: BASE_URL })

export class Api {
    get = async (params) => {
        return await api.get('', { params })
    }

    getById = async (id) => {
        return await api.get(`/${id}`)
    }

    delete = async (id) => {
        return await api.delete(`/${id}`)
    }

    save = async (entity) => {
        return await api.post('', { ...entity })
    }

    update = async (entity) => {
        return await api.put(`/${entity.id}`, { ...entity })
    }
}
