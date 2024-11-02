import Painter from "../domains/painter.js";
import { sendDataResponse, sendMessageResponse } from "../utils/responses.js";
import dbClient from "../utils/dbClient.js";

export const create = async (req, res)=> {
    const painerToCreate = await Painter.fromJSON(req.body)

    try {
        const createdPainter = await painerToCreate.save()

        return sendDataResponse(res, 201, createdPainter)
    } catch(error) {
        return sendDataResponse(res, 500, 'Unable to create new painter')
    }
}

export const getAll = async (req, res) => {

    const foundPainters = await Painter.findAll()

    const formattedPainters = foundPainters.map((painter) => {
        return {
            ...painter.toJSON().painter
        }
    })
    return sendDataResponse(res, 200, {painters: formattedPainters})
}