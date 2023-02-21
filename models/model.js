const db = require('../config/db');
class Model {
    constructor(){

    }
    async increase(){

    }
    async value(){
        let sql = 'SELECT * FROM clicky';
        const rees = await db.execute(sql)
        console.log(rees)
        return rees;
    }
}
module.exports = Model;