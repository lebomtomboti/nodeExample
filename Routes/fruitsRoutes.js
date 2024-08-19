import express from 'express'
import {fetchFruits,getFruit, insertFruit, deleteFruit, updateFruit} from '../controller/fruitController.js'
const router = express.Router()
import { verifyAToken } from '../middleware/middlewareAuthentication.js'
router.get('/',verifyAToken, fetchFruits)
router.get('/:id',getFruit)
router.post('/insert',insertFruit)
router.delete('/:id', deleteFruit)
router.patch('/:id', updateFruit)
export default router