const User = require('./models/User');
const connectDB = require('./models/mongodb');

const seedUser = async () => {
  try {
    await connectDB(); // Connect to MongoDB first
    await User.create({
      email: 'marsya.putra@binus.ac.id',
      password: '2702367220'
    });
    console.log('User seeded successfully');
    process.exit(0);
  } catch (err) {
    console.error('Error seeding user:', err);
    process.exit(1);
  }
};

seedUser(); 