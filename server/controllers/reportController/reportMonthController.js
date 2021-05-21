const { getAllReportsSortedByDate } = require("../../services/report.service");

module.exports = async (req, res) => {
  try {
    const reportsArr = await getAllReportsSortedByDate({
      name: req?.body?.name,
    });
    const result = reportsArr?.filter((item) =>
      item.date.startsWith(`${req?.body?.date}`)
    );
    res.json(result);
  } catch (e) {
    console.log(e);
  }
};
