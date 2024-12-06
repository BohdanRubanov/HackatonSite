import { Prisma, PrismaClient } from '@prisma/client';
import client from '../client/prismaClient';


async function getMasterClassCount(){
    try{

        let count = await client.masterClass.count()
        if (!count){
            return {
                status: 'not found',
                message: 'Posts not found',
            }}
        
        return {

            status: 'success',
            message: 'Posts successfully found',
            count: count,
            }


        }catch (err) {
        if (err instanceof Prisma.PrismaClientKnownRequestError){
            if (err.code == 'P2002'){
                console.log(err.message);
                throw err;
            }
            else if (err.code == 'P2015'){
                console.log(err.message);
                throw err;
            }
            else if (err.code == 'P2019'){
                console.log(err.message);
                throw err;
            }
            

    }
    return {
        status: 'error',
        message: 'error',
    }
        }
}

async function getAllMasterClasses(){
    try{
        let masterClasses = await client.masterClass.findMany({
        
        })
        return masterClasses
    } catch(err){
        if (err instanceof Prisma.PrismaClientKnownRequestError){
            if (err.code == 'P2002'){
                console.log(err.message);
                throw err;
            }
        }
    }
}

async function getMasterClassById(id: number){

    let masterClass = await client.masterClass.findUnique({
        where:{
            id: id
        }
    })
    return masterClass
}


async function createMasterClass(data: Prisma.MasterClassCreateInput){
    try{
    let masterClass = await client.masterClass.create({
        data: data
    })
    if (!masterClass) {
        return {
            status: 'not found',
            message: 'Post not found',
            data: null
        }}
    return {
        status: 'success',
        message: 'Posts successfully found',
        masterClass: masterClass
    }
    }catch (err) {
        if (err instanceof Prisma.PrismaClientKnownRequestError){
            if (err.code == 'P2002'){
                console.log(err.message);
                throw err;
            }
            else if (err.code == 'P2015'){
                console.log(err.message);
                throw err;
            }
            else if (err.code == 'P2019'){
                console.log(err.message);
                throw err;
            }
    }}
}  


const studyRepository = {
    getAllMasterClasses:getAllMasterClasses,
    getMasterClassById:getMasterClassById,
    createMasterClass:createMasterClass,
    getMasterClassCount:getMasterClassCount
}
export default studyRepository