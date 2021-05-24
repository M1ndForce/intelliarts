const {
  getAllReportsSortedByDate,
  getCategoryPriceByName,
} = require("../../services/report.service");
const calculateReport = require("../../helpers/calculateReportHelper");

class ReportController {
  async createReportFromDate(req, res) {
    try {
      const reportsArr = await getAllReportsSortedByDate();
      const reportResult = reportsArr.filter(
        (item) => item.date >= `${req?.query?.date}`
      );
      const result = await calculateReport(
        getCategoryPriceByName,
        reportResult
      );
      res.json(result);
    } catch (e) {
      console.log(e);
    }
  }

  async createReport(req, res) {
    try {
      const reportsArr = await getAllReportsSortedByDate({
        name: req?.query?.name,
      });
      const reportResult = reportsArr?.filter((item) =>
        item.date.startsWith(`${req?.query?.date}`)
      );
      const result = await calculateReport(
        getCategoryPriceByName,
        reportResult
      );

      res.json(result);
    } catch (e) {
      console.log(e);
    }
  }
}

module.exports = new ReportController();
