const getShippingRate = require("../utils/rateCalculator");

export default function handler(req, res) {
  const { country = "DE", subtotal = 0, weight = 0 } = req.query;

  const rate = getShippingRate(country, parseInt(subtotal), parseFloat(weight));
  if (!rate) {
    return res.status(404).json({ error: "Keine Versandkosten gefunden" });
  }

  return res.status(200).json(rate);
}