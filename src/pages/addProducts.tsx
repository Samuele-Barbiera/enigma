import axios, { AxiosRequestConfig } from 'axios'
import Layout from '../components/Layout'
import ProductList from '../components/ProductList'

export default function addProducts() {
    const createProduct = (data: AxiosRequestConfig<unknown> | undefined) => axios.get('/api/data/createProduct', data)

    return (
        <Layout>
            <div className="mx-auto max-w-screen-xl flex-col">
                <h1 className="justify-center text-3xl font-medium text-gray-200">Add your Products</h1>
                <div className="mt-8">
                    <ProductList buttonText="Add Product" redirectPath="/products" onSubmit={createProduct} />
                </div>
            </div>
        </Layout>
    )
}
