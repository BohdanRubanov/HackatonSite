// Обрабатывает запрос и формирует ответ

import express, { Express, Request, Response } from 'express'

// const postService = require('../services/postServices')

import service_funcs from './studyServices'

async function getAllMasterClasses(req: Request, res: Response) {
    
    const context = await service_funcs.getAllMasterClasses()
    if (context.status == "error"){
        res.send("error")
    } else{
        console.log(context.data)
        res.render('study', {masterClasses: context.data})
    }
}

async function getMasterClassById(req: Request, res: Response){
    let id = req.params.id
    const result = await productService.getProductById(+id)
    if (result.status == "error"){
        res.send("ban")
        
    } else{
        res.render('product', result.data)
    }

}

async function createMasterClass(req: Request, res: Response){
        
        const data = req.body
        console.log(data)
        await service_funcs.createMasterClass(data);
        res.send(200)
        console.log('Всё супер')

}


const controller_funcs = {
    getAllMasterClasses: getAllMasterClasses,
    getMasterClassById: getMasterClassById,
    createMasterClass: createMasterClass
}

export default controller_funcs
