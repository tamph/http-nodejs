const Model = require ('../models/model')

exports.increase = async (req, res, next) => {
    res.send('saaa')
}
exports.value = async (req, res, next) => {
    const val = new Model();
    console.log(val)
    const ste = val.value();
    console.log(ste)
    res.send(ste)

}