const {
  getAllReportsSortedByDate,
  getCategoryPriceByName,
} = require("../../services/report.service");

module.exports = async (req, res) => {
  try {
    const calculatedTotalReport = [];
    const reportsArr = await getAllReportsSortedByDate();
    const result = reportsArr.filter(
      (item) => item.date >= `${req?.body?.date}`
    );

    const arrNames = [];
    result.map((item) => {
      arrNames.push(item.name);
    });
    const counts = {};
    for (let i = 0; i < arrNames.length; i++) {
      counts[arrNames[i]] = 1 + (counts[arrNames[i]] || 0);
    }
    for (const [key, value] of Object.entries(counts)) {
      let item = await getCategoryPriceByName({ name: key });
      calculatedTotalReport.push({
        name: key,
        soldItemsCount: value,
        totalPrice: item.price * value,
      });
    }
    res.json(calculatedTotalReport);
  } catch (e) {
    console.log(e);
  }
};
