import { Request, Response } from "express"
import ProductoApi from "../models/Productos";
import { paginationHandler } from "../handlers/paginationHandler";
import { EditProduct, ProductsData } from "../interfaces/interfaces";
import { editProductHandler } from "../handlers/editProductHandler";
import dotenv from "dotenv"
dotenv.config();
const { URL_HOST } = process.env

export const apiBase = async (req:Request, res:Response) => {
    try {
        
    res.status(200).json({products:`https://product-api-backend-production.up.railway.app/api/v1/product`})
    } catch (error) {
    res.status(400).json({error:error})
    }
}

export const allProducts = async (req:Request, res:Response) => {
    try {
        const result = await ProductoApi.find({})
    const totalResults = result.length
    // allCreate()
    res.status(200).json({TotalResults:totalResults, results: result})
    // res.status(200).json(result)
    } catch (error: any) {
    res.status(404).json({error:error.message})
    }
}

export const pageProducts = async (req:Request, res:Response) => {
    try {
        const {page} = req.query;
    
        let pageNumber = page ? Number(page) : 1;

        const products = await ProductoApi.find({})
        
        const productsData: ProductsData[] = products.map(product => product.toObject());

        const productsInPage = paginationHandler(productsData, pageNumber)

        const totalResults = productsInPage.length;

        const pages = Math.ceil(products.length / 20);

        res.status(200).json(
            {info: {totalResults:totalResults ,
            pages:pages, 
            currentPage:Number(page),
            nextPage:pageNumber > pages || pageNumber === pages ? null : `${URL_HOST}/api/v1/product/?page=${pageNumber < 0 ? pageNumber = 1 : pageNumber+1}`,
            prevPage:pageNumber - 1 === 0 || pageNumber <= 0 ? null : `${URL_HOST}/api/v1/product/?page=${pageNumber > pages ? pageNumber = pages : pageNumber-1}`
            },
            results: pageNumber !== pages + 1? productsInPage : null}
            )
    } catch (error) {
        res.status(404).json({ error: error });

    }
}
export const idProduct = async (req:Request, res:Response) => {
    try {
        const {id} = req.params
       
        const result = await ProductoApi.findById(id)
        
        res.status(200).json({results: result})
    } catch (error) {
        res.status(404).json({error:error})
    }
}


export const filterProducts = async (req:Request, res:Response) => {
    try {
        const {name} = req.query;
        const {category} = req.query;
        const {type} = req.query;
        const {brand} = req.query;

        if(!name && !category && !brand && !type){
            res.status(200).json({message:"Error Query"})
        }

        const allProducts = await ProductoApi.find({})

        const productsFiltred = allProducts.filter((product) => 
                (name && product.name?.toString().toLowerCase().includes(name.toString().toLowerCase())) ||
                (category && product.category?.toString().toLowerCase().includes(category.toString().toLowerCase())) ||
                (type && product.type?.toString().toLowerCase().includes(type.toString().toLowerCase())) ||
                (brand && product.brand?.toString().toLowerCase().includes(brand.toString().toLowerCase()))
        );

        res.status(200).json({totalResults:productsFiltred.length, results: productsFiltred})
    } catch (error) {
        res.status(404).json({ error: error });
    }
}

export const uploadProduct = async (req:Request, res:Response) => {
    try {
        const productPost = req.body;

        const result  = await ProductoApi.create(productPost)
        res.status(200).json({successCreate: result})
    } catch (error) {   
        res.status(404).json({ error: error });
    }
}

export const deleteProduct = async (req:Request, res:Response) => {
    try {
        const {id} = req.params

        const result = await ProductoApi.findByIdAndDelete(id)
        if (!result) {
            res.status(200).json({successDelete: "Product No Exist"})
        }else{
            res.status(200).json({successDelete: result})
        }
    } catch (error) {
        res.status(404).json({error: error})
    }
}

export const editProduct = async (req:Request, res:Response) => {
   try {
    const {id} = req.params
    const product: EditProduct = req.body;
    if (!product.name && 
        !product.image && 
        !product.description && 
        !product.brand && 
        !product.price && 
        !product.category && 
        !product.type && 
        !product.sizes && 
        !product.stock && 
        !product.availeble_colors ) {
        return null
    }
    const result = await editProductHandler(id, product)

    res.status(200).json({successEdit: result})
   } catch (error) {
    res.status(404).json({error: error})
   }
}
