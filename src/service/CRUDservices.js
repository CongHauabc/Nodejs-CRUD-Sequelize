import bcrypt from 'bcryptjs';
import db from '../models/index';
const salt = bcrypt.genSaltSync(10);
let createNewUser = async(data) =>{
   return new Promise(async(resolve,reject)=>{
    try{
    let hashPasswordForm = await hashUserPassword(data.password)
    await db.User.create({
        email: data.email,
    password:hashPasswordForm,
    firstName: data.firstname,
    lastName:data.lastname,
    address: data.address,
    gender:data.gender === '1' ? true :false,
    roleId:data.RoleId,
    phonenumber:data.phonenumber,
    
    })
    resolve('ok create user succeed')
    }catch(e){
        reject(e)
    }
   })

}
let hashUserPassword = (password)=>{
    return new Promise(async(resolve,reject)=>{
        try{

            let hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword)
        }catch(e){
            reject(e)
        }
    })
}
let getAllUser = ()=>{
    return new Promise(async(resolve,reject)=>{
        try{
            let users = db.User.findAll()
            resolve(users)
        }catch(e){
            reject(e)
        }
    })
}
module.exports={
    createNewUser:createNewUser,
    getAllUser:getAllUser,
}