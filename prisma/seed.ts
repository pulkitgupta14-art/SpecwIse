import { PrismaClient } from '../lib/generated/prisma'
import { phones } from '../lib/phones'

const prisma = new PrismaClient()

async function main() {
  console.log(`Start seeding ...`)
  for (const p of phones) {
    const phone = await prisma.phone.upsert({
      where: { id: p.id },
      update: {},
      create: {
        id: p.id,
        name: p.name,
        brand: p.brand,
        price: p.price,
        processor: p.processor,
        cameraScore: Math.round(p.cameraScore),
        batteryScore: Math.round(p.batteryScore),
        performanceScore: Math.round(p.performanceScore),
        heatingIssue: p.heatingIssue,
        longTermScore: Math.round(p.longTermScore),
        pros: JSON.stringify(p.pros),
        cons: JSON.stringify(p.cons),
        imageUrl: p.imageUrl,
        backImageUrl: p.backImageUrl || null,
        releaseYear: p.releaseYear,
        updateYears: p.updateYears,
      },
    })
    console.log(`Created phone with id: ${phone.id}`)
  }
  console.log(`Seeding finished.`)
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
