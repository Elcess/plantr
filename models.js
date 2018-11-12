const Sequelize = require('sequelize');
const pg = require('pg');
const db = new Sequelize('postgres://localhost:5432/plantr', {logging: false});

const Gardener = db.define('gardener', {
  name: Sequelize.STRING,
  age: Sequelize.INTEGER

});
const Plot = db.define('plot', {
  // name: Sequelize.STRING,
  // age : Sequelize.INTEGER
  size: Sequelize.INTEGER,
  shaded: Sequelize.BOOLEAN

});

const Vegetable = db.define('vegetable', {
  name: Sequelize.STRING,
  // age : Sequelize.INTEGER
  color: Sequelize.STRING,
  planted_on: Sequelize.DATE

});

Plot.belongsTo(Gardener, {as: 'owner'});

Gardener.hasOne(Plot);

Plot.belongsToMany(Vegetable, {through: 'garden'});
Vegetable.belongsToMany(Plot, {through: 'garden'});

Gardener.belongsTo(Vegetable, {as: 'favorite_vegetable'});


module.exports = db;
