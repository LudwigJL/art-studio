import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {

    const painter1 = await prisma.painter.create({
        data: {
            name: 'Vincent van Gogh',
            alive: false,
            country: 'Belguim'
        }
    })

    const painter2 = await prisma.painter.create({
        data: {
            name: 'Arnold Böcklin',
            alive: false,
            country: 'Switzerland'
        }
    })

    const painter3 = await prisma.painter.create({
        data: {
            name: 'Gustav Klimt',
            alive: false,
            country: 'Austria'
        }
    })

    const painter4 = await prisma.painter.create({
        data: {
            name: 'Guiseppe Archimboldo',
            alive: false,
            country: 'Italy'
        }
    })

    console.log('Created painter 1 ', painter1)
    console.log('Created painter 2 ', painter2)
    console.log('Created painter 3 ', painter3)

    const testPainting = await prisma.painting.create({
        data: {
            "name": "The Jurist",
	        "genre": "Naturism",
	        "creationYear": 1555,
	        "dimensionsSize": "64 cm × 51 cm",
	        "painterId": 4
        },
        include: {
            painter: true
        }
    })

    const painting1 = await prisma.painting.create({
        data: {
            name: 'Starnight',
            painterId: 1,
            genre: 'Postimpressionism',
            creationYear: 1889,
            dimensionsSize: '73 x 92 cm'
        },
        include: {
            painter: true
        }
    })

    const painting2 = await prisma.painting.create({
        data: {
            name: 'Van Gogh self-portait',
            painterId: 1,
            genre: 'Postimpressionism',
            creationYear: 1889,
            dimensionsSize: '65 x 54 cm'
        },
        include: {
            painter: true
        }
    })

    
    const painting3 = await prisma.painting.create({
        data: {
            name: 'Self-Portait with Death Plaing the Fiddle',
            painterId: 2,
            genre: 'Symbolism',
            creationYear: 1889,
            dimensionsSize: '65 x 54 cm'
        },
        include: {
            painter: true
        }
    })

    const painting4 = await prisma.painting.create({
        data: {
            name: 'Plague',
            painterId: 2,
            genre: 'Symbolism',
            creationYear: 1889,
            dimensionsSize: '65 x 54 cm'
        },
        include: {
            painter: true
        }
    })

    console.log()
    console.log('Created painting 1:', painting1)
    console.log('Created painting 2: ', painting2)
    console.log('Created painting 1:', painting3)
    console.log('Created painting 1:', painting4)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })