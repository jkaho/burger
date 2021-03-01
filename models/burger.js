const orm = require('../config/orm');

const selectAll = orm.selectAll(burgers);
const insertOne = orm.insertOne(burgers, burger_name, user_input);
const updateOne = orm.updateOne(burgers, burger_name, user_input);

module.exports = selectAll;
module.exports = insertOne;
module.exports = updateOne;