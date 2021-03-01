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
    insertOne(tableName, colName, value) {
        const query = 'INSERT INTO ?? (??) VALUES (?)';
        connection.query(query, [tableName, colName, value],
            (err, result) => {
                if (err) throw err;
                console.log(result);
            }
        );
    },
};
  
module.exports = orm;  