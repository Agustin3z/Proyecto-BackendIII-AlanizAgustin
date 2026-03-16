import { faker } from "@faker-js/faker"

export const generateMockPets = (num) => {

 const pets = []

 for (let i = 0; i < num; i++) {

  pets.push({

   name: faker.animal.cat(),
   specie: "cat",
   birthDate: faker.date.past(),
   adopted: false

  })

 }

 return pets

}