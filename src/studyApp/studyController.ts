// Обрабатывает запрос и формирует ответ

import express, { Express, Request, Response } from 'express'

// const postService = require('../services/postServices')

import service_funcs from './studyServices'

async function getAllMasterClasses(req: Request, res: Response) {
    
    const context = await service_funcs.getAllMasterClasses()
    if (!context.masterClasses){
        res.send("error")
    }
    console.log(context)
    
    res.render('masterclass', context.masterClasses)
}

async function getMasterClassById(req: Request, res: Response){
    console.log(req.params.id)
    const id = Number(req.params.id)
    const data = await service_funcs.getMasterClassById(id)
    if (data.status == 'error'){
        res.send("post not found")
    }
    if (data.status == 'success'){
        res.render('masterclass', {masterClass: data.context})
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
