const faker = require('faker');

module.exports = {
  up: async (queryInterface) => {
    const itemsList = [];
    for (let i = 0; i < 50; i += 1) {
      itemsList.push({
        name: `${faker.commerce.productName()}`,
        description: `${faker.commerce.productDescription()}`,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
    queryInterface.bulkInsert('Items', itemsList);
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Items', null, {});
  },
};
