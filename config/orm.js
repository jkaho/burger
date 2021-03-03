const connection = require('./connection.js');

const orm = {
    selectAll(tableName, cb) {
        const query = 'SELECT * FROM ??';
        connection.query(query, [tableName, cb],
            (err, result) => {
                if (err) throw err;
                cb(result);
            }
        );
    },
    insertOne(tableName, colName, value, cb) {
        const query = 'INSERT INTO ?? (??) VALUES (?)';
        connection.query(query, [tableName, colName, value],
            (err, result) => {
                if (err) throw err;
                cb(result);
            }
        );
    },
    updateOne(tableName, colName, colVal, conditionCol, conditionVal, cb) {
        const query = 'UPDATE ?? SET ?? = ? WHERE ?? = ?';
        connection.query(query, [tableName, colName, colVal, conditionCol, conditionVal],
            (err, result) => {
                if (err) throw err;
                cb(result);
            }
        );
    }
};
  
module.exports = orm;  