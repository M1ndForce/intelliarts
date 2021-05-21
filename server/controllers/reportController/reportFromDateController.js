const { reportFromDate } = require("../../services/report.service");

module.exports = async (req, res) => {
  try {
    await reportFromDate(req, res);
  } catch (e) {
    console.log(e);
  }
};
