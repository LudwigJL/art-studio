import Painting from '../domains/painting.js'
import { sendDataResponse, sendMessageResponse } from "../utils/responses.js";

export const create = async (req, res) => {
    const paintingToCreate = await Painting.fromJSON(req.body)

    try{
        const createdPainting = await paintingToCreate.save()

        return sendDataResponse(res, 201, createdPainting)
    } catch (error){
        return sendDataResponse(res, 500, 'Unable to create new painting')
    }
}

export const getAll = async (req, res) => {
    const foundPaintings = await Painting.findAll()
    
    const formattedPaintings = foundPaintings.map((painting) => {
        return {
            ...painting.toJSON().painting
        }
    })

    return sendDataResponse(res, 200, {paintings: formattedPaintings})
}
