module.exports = async (getCategoryPriceByName, result) => {
  const calculatedTotalReport = [];
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
  return calculatedTotalReport;
};
