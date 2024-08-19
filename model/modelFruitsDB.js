// IMPORT POOL SO I CAN WRITE THE SQL Commands
import {pool} from '../config/config.js'
const getFruitsDB = async()=>{
    let [data] = await pool.query('SELECT * FROM fruits')
    return data
}
const getFruitDB = async (id)=>{
    //add the [] on '[data]'for removing the array square bracket
    let [[data]] = await pool.query('SELECT * FROM peers WHERE fruits_id = ?',[id])
    return data
}
const insertFruitDB= async(fruit_name, weight,amount)=>{
    let [data] = await pool.query('INSERT INTO peers (fruit_name,weight,amount(R)) VALUES (?,?,?)',[fruit_name, weight,amount])
    return data
}
const deleteFruitDB= async (id)=>{
    // we don't have to have 'let = [data] ...' as we only deleting, we don't want it to return anything as fetch
    let [data] = await pool.query('DELETE FROM peers WHERE fruits_id = ?',[id])
    return data
}
const updateFruitDB = async (fruit_name,weight,amount, id)=>{
    let [data] = await pool.query('UPDATE peers SET fruit_name = ?, weight = ?, amount(R) = ?, WHERE fruits_id = ?', [fruit_name,weight,amount,id])
    return data
}

const addToCart= async(fruit_id,user_id)=>{
    await pool.query('INSERT INTO cart(fruit_id,user_id) VALUES(?,?)')
}
export {getFruitsDB, getFruitDB, insertFruitDB, deleteFruitDB, updateFruitDB}