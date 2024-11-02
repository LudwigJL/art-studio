import { Router } from 'express'
import {
    create,
    getAll
} from '../controllers/painter.js'

console.log('HI!')
const router = Router()

router.get('/', getAll)
router.post('/', create)


export default router
