import { Router } from 'express'
import {
    create,
    getAll,
} from '../controllers/painting.js'

const router = Router()

router.get('/', getAll)
router.post('/', create)



export default router
