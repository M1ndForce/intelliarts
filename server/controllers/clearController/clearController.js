const { findAndDeleteWhereCountZero, findAndReturnItemsWhereCountZero } = require("../../services/clear.service");

module.exports = async (req, res) => {
    try {
        const result = await findAndReturnItemsWhereCountZero()
        await findAndDeleteWhereCountZero();
        res.json(result);
    } catch (e) {
        console.log(e);
    }
};
