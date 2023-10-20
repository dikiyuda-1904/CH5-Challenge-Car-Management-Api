"use strict";

const { User } = require("../models");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", [
      {
        name: "Diki",
        address: "Karawang",
        age: 21,
        role: "SuperAdmin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Candra",
        address: "Bandung",
        age: 21,
        role: "SuperAdmin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Yuda",
        address: "Ciamis",
        age: 21,
        role: "SuperAdmin",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    const users = await User.findAll();

    await queryInterface.bulkInsert("Auths", [
      {
        email: "diki@mail.com",
        password:
          "$2a$12$1aDGTK98Gu06uPCpskzuwe8ys0jgl7sng1uQGwK5EMIa3IWJLN67C",
        userId: users[0].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "candra@mail.com",
        password:
          "$2a$12$1aDGTK98Gu06uPCpskzuwe8ys0jgl7sng1uQGwK5EMIa3IWJLN67C",
        userId: users[1].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: "yuda@mail.com",
        password:
          "$2a$12$1aDGTK98Gu06uPCpskzuwe8ys0jgl7sng1uQGwK5EMIa3IWJLN67C",
        userId: users[2].id,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
    await queryInterface.bulkDelete("Auths", null, {});
  },
};
