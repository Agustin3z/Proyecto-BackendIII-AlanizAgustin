import { Router } from 'express';
import { generateMockUsers, generateMockPets } from '../utils/mocking.js';
import UserModel from '../models/user.model.js';
import PetModel from '../models/pet.model.js';

const router = Router();

/* GET /api/mocks/mockingpets */
router.get('/mockingpets', (req, res) => {
  const pets = generateMockPets(10);
  res.json({ status: 'success', payload: pets });
});

/* GET /api/mocks/mockingusers */
router.get('/mockingusers', async (req, res) => {
  const users = await generateMockUsers(50);
  res.json({ status: 'success', payload: users });
});

/* POST /api/mocks/generateData */
router.post('/generateData', async (req, res) => {
  const { users = 0, pets = 0 } = req.body;

  try {
    const mockUsers = await generateMockUsers(users);
    const mockPets = generateMockPets(pets);

    await UserModel.insertMany(mockUsers);
    await PetModel.insertMany(mockPets);

    res.json({
      status: 'success',
      message: 'Datos generados e insertados correctamente',
      usersInserted: users,
      petsInserted: pets
    });
  } catch (error) {
    res.status(500).json({ status: 'error', error: error.message });
  }
});

export default router;