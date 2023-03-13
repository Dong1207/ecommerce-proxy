import axiosInstance from "./axios"
import { ListResponse, Product } from '../type'

const productApi = {
    getAll() : Promise<ListResponse<Product>> {
        const url = 'posts'
        return axiosInstance.get(url)
    },

    getById(id: string) : Promise<Product> {
        const url = `products/${id}`
        return axiosInstance.get(url)
    },

    add(data:Product) : Promise<Product> {
        const url = 'products/add'
        return axiosInstance.post(url,data)
    },
    
    update(id:string, data:Product) : Promise<Product> {
        const url = `products/${id}`
        return axiosInstance.patch(url,data)
    },

    remove(id:string) : Promise<any> {
        const url = `products/${id}`
        return axiosInstance.delete(url)
    },
}

export default productApi