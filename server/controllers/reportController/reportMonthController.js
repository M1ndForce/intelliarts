const {
    reportMonth,
} = require("../../services/report.service");

module.exports = async (req, res) => {
  try {
    await reportMonth(req, res);
  } catch (e) {
    console.log(e);
  }
};
