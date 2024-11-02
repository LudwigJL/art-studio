import dbClient from "../utils/dbClient.js";

export default class Painter {

    static fromDb(painter){
        return new Painter (
            painter.id,
            painter.name,
            painter.country,
            painter.alive,
        )
    }

    static async fromJSON(json) {
        const { name, country, alive } = json
        return new Painter( name, country, alive )
    }

    constructor(
        id,
        name,
        country, 
        alive,
    ) {
        this.id = id
        this.name = name
        this.country = country
        this.alive = alive
    }

    toJSON(){
        return{
            painter: {
                id: this.id,
                name: this.name,
                country: this.country,
                alive: this.alive
            }
        }
    }

    async save(){
        const data = {
            name: this.name,
            country: this.country,
            alive: this.alive,
        }

        const createdPainter = await dbClient.painter.create({
            data
        })

        return Painter.fromDb(createdPainter)
    }

    static async findAll() {
        return Painter._findMany()
    }


    static async _findMany(key, value) {
        //Create a query here later

       const foundPainters = await dbClient.painter.findMany()
       return foundPainters.map((painter) => Painter.fromDb(painter))
    }
}


