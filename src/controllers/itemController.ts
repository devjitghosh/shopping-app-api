const Item = require("../models/itemModel");
exports.getItems = async (req, res, next) => {
  // res.setHeader('Access-Control-Allow-Origin', '*');
  console.log("req.query", req.query);
  const filterQuery = JSON.parse(
    JSON.stringify(req.query).replace("gte", "$gte").replace("lte", "$lte")
  );
  console.log(filterQuery);
  const query = Item.find();
  if (filterQuery.price) {
    query.find({ price: filterQuery.price });
  }
  if (filterQuery.ids) {
    const ids = filterQuery.ids.split(",");
    query.find({ _id: { $in: ids } });
  }

  const items = await query.exec();
  res.status(200).json({
    status: "success",
    count: items.length,
    body: {
      items,
    },
  });
};
