const connection = require('./connection.js');

const orm = {
    selectAll(tableName) {
        const query = 'SELECT * FROM ??';
        connection.query(query, [tableName],
            (err, result) => {
                if (err) throw err;
                console.log(result);
            }
        );
    },
};
  
module.exports = orm;  