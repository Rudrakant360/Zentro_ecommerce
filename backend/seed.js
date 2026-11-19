const dotenv = require('dotenv')
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const User = require('./model/User')
const Product = require('./model/Product')

dotenv.config()
 
const dummyUsers = [
  { name: 'Aarav Sharma', email: 'aarav@gmail.com', password: 'Demo1234!', role: 'user', verified: true },
  { name: 'Maya Patel', email: 'maya@gmail.com', password: 'Demo1234!', role: 'user', verified: true },
  { name: 'Store Admin', email: 'admin@gmail.com', password: 'Demo1234!', role: 'admin', verified: true }
]

const dummyProducts = [
  {
    name: 'Classic Cotton T-Shirt',
    description: 'Soft, breathable cotton t-shirt for everyday wear.',
    price: 799,
    category: 'Clothing',
    stock: 40,
    imageUrl: 'https://placehold.co/600x600?text=Cotton+T-Shirt',
    rating: 4.5,
    numReviews: 18
  },
  {
    name: 'Wireless Bluetooth Headphones',
    description: 'Comfortable over-ear headphones with clear wireless audio.',
    price: 2499,
    category: 'Electronics',
    stock: 25,
    imageUrl: 'https://placehold.co/600x600?text=Headphones',
    rating: 4.7,
    numReviews: 32
  },
  {
    name: 'Everyday Canvas Backpack',
    description: 'Durable backpack with a roomy main compartment and front pocket.',
    price: 1599,
    category: 'Accessories',
    stock: 16,
    imageUrl: 'https://placehold.co/600x600?text=Backpack',
    rating: 4.2,
    numReviews: 11
  },
  {
    name: 'Insulated Steel Water Bottle',
    description: 'Reusable stainless steel bottle for work, travel, and exercise.',
    price: 899,
    category: 'Home & Living',
    stock: 55,
    imageUrl: 'https://placehold.co/600x600?text=Water+Bottle',
    rating: 4.6,
    numReviews: 24
  },
  {
    name: 'Minimal Desk Lamp',
    description: 'Compact desk lamp for reading, studying, or working from home.',
    price: 1299,
    category: 'Home & Living',
    stock: 12,
    imageUrl: 'https://placehold.co/600x600?text=Desk+Lamp',
    rating: 4.3,
    numReviews: 9
  }
]

async function seedDatabase() {
  if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URI is not set. Add it to backend/.env before running the seed.')
  }

  await mongoose.connect(process.env.MONGO_URI)

  for (const userData of dummyUsers) {
    const password = await bcrypt.hash(userData.password, 10)
    await User.updateOne(
      { email: userData.email },
      { $setOnInsert: { ...userData, password } },
      { upsert: true }
    )
  }

  for (const productData of dummyProducts) {
    await Product.updateOne(
      { name: productData.name },
      { $setOnInsert: productData },
      { upsert: true }
    )
  }

  console.log(`Seed complete: ${dummyUsers.length} users and ${dummyProducts.length} products are available.`)
}

seedDatabase()
  .catch((error) => {
    console.error('Seed failed:', error.message)
    process.exitCode = 1
  })
  .finally(async () => {
    await mongoose.disconnect()
  })
