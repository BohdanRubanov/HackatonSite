// Здесь вся логика работы с данными 
import studyRepository from "./studyRepository";
import { Prisma, PrismaClient } from '@prisma/client';
import client from '../client/prismaClient';



async function getAllMasterClasses(){
    
    const context = {
        masterClasses: await studyRepository.getAllMasterClasses()
    }
    
    return context
}

async function getMasterClassById(id: number){
    const data = await studyRepository.getMasterClassById(id)

    if (data.status == 'error' || data.status == 'error'){
        return {
                    status: 'error',
                    message: 'not found',
                }}
    console.log(data)

        
    return {
        context: data.masterClass,
        message: data.message,
        status: data.status
    }}
    


async function createMasterClass(data: Prisma.MasterClassCreateInput){
    await studyRepository.createMasterClass(data)
}

const service_funcs = {
    getAllMasterClasses: getAllMasterClasses,
    getMasterClassById: getMasterClassById,
    createMasterClass: createMasterClass
} 

export default service_funcs