const orm = require('../config/orm');

const burger = {
    selectAll: function(cb) {
        orm.selectAll('burgers', function(result) {
            cb(result);
        });
    },
    createOne: function(value, cb) {
        orm.insertOne('burgers', 'burger_name', value, function(result) {
            cb(result);
        });
    },
    updateOne: function(value, cb) {
        orm.updateOne('burgers', 'devoured', value, function(result) {
            cb(result);
        });
    }
};

module.exports = burger;