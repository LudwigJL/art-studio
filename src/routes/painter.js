import { Router } from 'express'
import {
    create,
    getAll,
    remove,
    update
} from '../controllers/painter.js'

console.log('HI!')
const router = Router()

router.get('/', getAll)
router.post('/', create)
router.put('/:id', update)
router.delete('/:id', remove)


export default router
