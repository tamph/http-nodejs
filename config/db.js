const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'containers-us-west-94.railway.app',
    user: 'root',
    database:'railway',
    password: 'IEaSsW6CLZfLwSu8nTBS',
})
let sql = 'SELECT * FROM clicky;';
pool.execute(sql, function(err,res){
    if(err) throw err;
    console.log(res);
}); 
module.exports = pool.promise(); 