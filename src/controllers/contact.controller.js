exports.create = (rea, res) => {
    return res.send({ message: 'create handler' });
};
exports.findAll = (req, res) => {
    return res.send({ message: 'findAll handler' });
};
exports.findOne = (reg, res) => {
    return res.send({ message: "findOne handler" });
};
exports.update = (reg, res) => {
    return res.send({ message: 'update handler' });
};
exports.delete = (reg, res) => {
    return res.send({ message: 'delete handler' });
};
exports.deleteAll = (red, res) => {
    return res.send({ message: 'deleteAll handler' });
};
exports.findAllFavorite = (reg, res) => {
    return res.send({ message: 'findAllFavorite handler' });
};