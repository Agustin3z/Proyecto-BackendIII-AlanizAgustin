import { faker } from '@faker-js/faker';
import bcrypt from 'bcrypt';

export const generateMockUsers = async (qty = 50) => {
  const users = [];
  const hashedPassword = await bcrypt.hash('coder123', 10);

  for (let i = 0; i < qty; i++) {
    users.push({
      _id: faker.database.mongodbObjectId(),
      first_name: faker.person.firstName(),
      last_name: faker.person.lastName(),
      email: faker.internet.email(),
      password: hashedPassword,
      role: faker.helpers.arrayElement(['user', 'admin']),
      pets: []
    });
  }

  return users;
};

export const generateMockPets = (qty = 10) => {
  const pets = [];

  for (let i = 0; i < qty; i++) {
    pets.push({
      name: faker.animal.dog(),
      species: faker.animal.type(),
      age: faker.number.int({ min: 1, max: 15 })
    });
  }

  return pets;
};