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

    console.log('Created painter 1:', painter1)
    console.log('Created painter 2', painter2)
    console.log('Created painter: ', painter3)

    const painting1 = await prisma.painting.create({
        data: {
            name: 'Starnight',
            painterId: 1,
            genre: 'Postimpressionism',
            creationYear: 1889,
            dimensionsSize: '73 x 92 cm'
        }
    })

    const painting2 = await prisma.painting.create({
        data: {
            name: 'Van Gogh self-portait',
            painterId: 1,
            genre: 'Postimpressionism',
            creationYear: 1889,
            dimensionsSize: '65 x 54 cm'
        }
    })

    
    const painting3 = await prisma.painting.create({
        data: {
            name: 'Self-Portait with Death Plaing the Fiddle',
            painterId: 2,
            genre: 'Symbolism',
            creationYear: 1889,
            dimensionsSize: '65 x 54 cm'
        }
    })

    const painting4 = await prisma.painting.create({
        data: {
            name: 'Plague',
            painterId: 2,
            genre: 'Symbolism',
            creationYear: 1889,
            dimensionsSize: '65 x 54 cm'
        }
    })

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