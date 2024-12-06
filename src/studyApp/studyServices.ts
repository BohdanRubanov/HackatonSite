// Здесь вся логика работы с данными 
import studyRepository from "./studyRepository";
import { Prisma, PrismaClient } from '@prisma/client';
import client from '../client/prismaClient';

interface IMasterClass{
  id:          number
  Name:        String
  Description: String
  Video:       String
  Examples:    String
  DopInfo:     String
  Author:      String
}

interface IMasterClassError{
    status: 'error',
    message: string
}


interface IMasterClassesSuccess{
    status: 'success',
    data: IMasterClass[]
}

interface IMasterClassSuccess{
    status: 'success',
    data: IMasterClass
}


async function getAllMasterClasses(): Promise< IMasterClassesSuccess | IMasterClassError >{
    
    const masterClasses = await studyRepository.getAllMasterClasses()


    if (!masterClasses){
        return {status: 'error', message: 'products not found'};
    }
    return {status: 'success', data: masterClasses};
}

async function getMasterClassById(id: number): Promise< IMasterClassSuccess | IMasterClassError > {
    let masterClass = await studyRepository.getMasterClassById(id)

    if (!masterClass) {
        return {status: 'error', message: 'product not found'}
    }

    return {status: 'success', data: masterClass}
    
}

    


async function createMasterClass(data: Prisma.MasterClassCreateInput){
    await studyRepository.createMasterClass(data)
}

const service_funcs = {
    getAllMasterClasses: getAllMasterClasses,
    getMasterClassById: getMasterClassById,
    createMasterClass: createMasterClass
} 

export default service_funcs