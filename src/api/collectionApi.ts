
import { Collection, ListResponse } from "../type"
import axiosInstance from "./axios"


const collectionAPI = {
    getAll() : Promise< ListResponse<Collection> > {
        const url = 'collections/all'
        return axiosInstance.get(url)
    },

    getById(id: string) : Promise<Collection> {
        const url = `collections/${id}`
        return axiosInstance.get(url)
    },

    add(data:Collection) : Promise<Collection> {
        const url = 'collections/add'
        return axiosInstance.post(url,data)
    },
    
    update( id:string, data:Collection ) : Promise<Collection> {
        const url = `collections/${id}`
        return axiosInstance.patch(url,data)
    },

    remove(id:string) : Promise<any> {
        const url = `collections/${id}`
        return axiosInstance.delete(url)
    },
}

export default collectionAPI