import dbClient from "../utils/dbClient.js";

export default class Painting {

    static fromDb(painting){
        return new Painting(
            painting.id,
            painting.name,
            painting.genre,
            painting.creationYear,
            painting.dimensionsSize,
            painting.painterId,
            painting.painter
        )
    }

    static async fromJSON(json){
        const { name, genre, creationYear, dimensionsSize, painterId } = json
        return new Painting (null, name, genre, creationYear, dimensionsSize, painterId)
    }

    constructor(
        id,
        name,
        genre,
        creationYear,
        dimensionsSize,
        painterId,
        painter
    ){
        this.id = id,
        this.name = name,
        this.genre = genre,
        this.creationYear = creationYear,
        this.dimensionsSize = dimensionsSize,
        this.painterId = painterId,
        this.painter = painter
    }

    toJSON(){
        return{
            id: this.id,
            name: this.name,
            genre: this.genre,
            creationYear: this.creationYear,
            dimensionsSize: this.dimensionsSize,
            painter: {
                id: this.painter.id,
                name: this.painter.name,
                country: this.painter.country,
                alive: this.painter.alive
            }
        }
    }
    
    async save(){
        const data = {
            name: this.name,
            genre: this.genre,
            creationYear: this.creationYear,
            dimensionsSize: this.dimensionsSize,
            painterId: this.painterId
        }

        const createdPainting = await dbClient.painting.create({
            data
        })

        return Painter.fromDb(createdPainting)
    }


    static async findAll() {
        return Painting._findMany()
    }

    static async _findMany(key, value) {
        const query = {
            include: {
                painter: true
            }
        }

        if (key !== undefined && value !== undefined) {
            query.where = {
                painter: {
                    [key]: value
                }
            }
        }

       const foundPaintings = await dbClient.painting.findMany(query)
       console.log('This is the one: ', foundPaintings)
       return foundPaintings.map((painting) => Painting.fromDb(painting))
    }
}