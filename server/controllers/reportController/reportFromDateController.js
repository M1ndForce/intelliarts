const {
  getAllReportsSortedByDate,
  getCategoryPriceByName,
} = require("../../services/report.service");
const calculateReport = require("../../helpers/calculateReportHelper");

module.exports = async (req, res) => {
  try {
    const reportsArr = await getAllReportsSortedByDate();
    const reportResult = reportsArr.filter(
      (item) => item.date >= `${req?.query?.date}`
    );
    const result = await calculateReport(getCategoryPriceByName, reportResult);
    res.json(result);
  } catch (e) {
    console.log(e);
  }
};
