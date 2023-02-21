const Model = require ('../models/model')

exports.increase = async (req, res, next) => {
    res.send('saaa')
}
exports.value = async (req, res, next) => {
    const val = new Model();
    const res = val.value();
    res.send(res)

}