import {getFruitsDB, getFruitDB, insertFruitDB, deleteFruitDB, updateFruitDB} from '../model/fruitDB.js'
import { getUserDB } from '../model/modelUsersDB.js'
const fetchFruits = async(req,res)=>{
    res.json(await getFruitsDB())
}
const getFruit = async(req,res)=>{
    res.json(await getFruitDB(req.params.id))
}
const insertFruit = async(req,res)=>{
    let {fruit_name,weight,amount}  = req.body
        res.send('Data was inserted successfully')
        await insertFruitDB(fruit_name,weight,amount)
}
const deleteFruit = async(req,res)=>{
    res.json(await deleteFruitDB(req.params.id))
}
const updateFruit = async(req,res)=>{
    res.json(await updateFruitDB(req.params.id))
}

const addToCart = async(req,res)=>{
    console.log(req.body);
    let{id}= await getUserDB(req.body.user)
    console.log(id)
    await addToCartDB(req.body.id,id)
    res.json({meesage:"You've added an item to cart "})
}
export {fetchFruits, getFruit, insertFruit, deleteFruit, updateFruit}