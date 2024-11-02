import { Router } from 'express'
import {
    create,
    getAll,
    update
} from '../controllers/painter.js'

console.log('HI!')
const router = Router()

router.get('/', getAll)
router.post('/', create)
router.put('/:id', update)


export default router
