const db = require('./models');
const Sequelize = require('sequelize');

// let synced = db.sync({force: true})
//   .then(() => {
//     db.close();
//     })
//       .catch(error =>
//         {
//           console.error(error);
//           db.close()
//   });

let veggies = db.models.vegetable
  .create(
    //[
    {
      name: 'tomato',
      color: 'red',
      planted_on: Date.now(),
    } //,
    //   {
    //     name: 'broccoli',
    //     color: 'green',
    //     planted_on: Date.now(),
    //   },
    //   {
    //     name: 'cauliflower',
    //     color: 'white',
    //     planted_on: Date.now(),
    //   },
    // ]
  )
  .then(() => {
    return db.models.plot.create({ size: 30, shaded: true });
  })
  // .then(() => {
  //   return db.models.garden.create({ plotId: id, vegetableId: vegetable.id });
  // })
  .then(() => {
    return db.models.gardener.create({
      name: 'Mary',
      age: 25,
    });
  })
  .then(() => {
    db.close();
  });
