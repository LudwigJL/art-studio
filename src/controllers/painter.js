import Painter from "../domains/painter.js";
import { sendDataResponse, sendMessageResponse } from "../utils/responses.js";
import dbClient from "../utils/dbClient.js";

export const create = async (req, res) => {
    const painterToCreate = await Painter.fromJSON(req.body)

    try {
        const createdPainter = await painterToCreate.save()

        return sendDataResponse(res, 201, createdPainter)
    } catch(error) {
        return sendDataResponse(res, 500, 'Unable to create new painter')
    }
}

export const getAll = async (req, res) => {
    const { name: name } = req.query

    let foundPainters

    if(name){
        foundPainters = await Painter.findManyByName(name)
    } else {
        foundPainters = await Painter.findAll()
    }
    
    const formattedPainters = foundPainters.map((painter) => {
        return {
            ...painter.toJSON().painter
        }
    })
    return sendDataResponse(res, 200, {painters: formattedPainters})
}

export const update = async (req, res) => {
    const id = parseInt(req.params.id)
    const newPainterData = await Painter.fromJSON(req.body)

    try {
        let foundPainter = await Painter.findById(id)

        if(!foundPainter){
            return sendDataResponse(res, 404, 'Painter with that id found')
        }

        foundPainter.name = newPainterData.name
        foundPainter.country = newPainterData.country
        foundPainter.alive = newPainterData.alive

        const updatedPainter = await foundPainter.update()

        return sendDataResponse(res, 200, updatedPainter)
    }catch(error){
        return sendMessageResponse(res, 500, 'Unable to update user')
    }
}

export const remove = async (req, res) => {
    const id = parseInt(req.params.id)
    const testFoundPainter = await Painter.findById(id)

    console.log(id)
    console.log(testFoundPainter)

    try{
        const foundPainter = await Painter.findById(id)

        if(!foundPainter){
            return sendDataResponse(res, 404, 'Painter with that id not found')
        }

        const removedPainter = await foundPainter.remove()
        
        return sendDataResponse(res, 200, removedPainter)
    }catch(error){
        return sendMessageResponse(res, 500, 'Unable to remove user')
    }
}


