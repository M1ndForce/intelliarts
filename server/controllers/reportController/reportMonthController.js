const {
  getAllReportsSortedByDate,
  getCategoryPriceByName,
} = require("../../services/report.service");
const calculateReport = require("../../helpers/calculateReportHelper");

module.exports = async (req, res) => {
  try {
    const reportsArr = await getAllReportsSortedByDate({
      name: req?.body?.name,
    });
    const reportResult = reportsArr?.filter((item) =>
      item.date.startsWith(`${req?.body?.date}`)
    );
    const result = await calculateReport(getCategoryPriceByName, reportResult);

    res.json(result);
  } catch (e) {
    console.log(e);
  }
};
