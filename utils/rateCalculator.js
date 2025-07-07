const rates = require("../data/shipping-rates.json");

function getShippingRate(country, subtotal, weight) {
  const countryRates = rates[country] || rates["DE"];
  for (let rule of countryRates) {
    if (
      subtotal >= rule.from_subtotal &&
      subtotal <= rule.to_subtotal &&
      weight >= rule.from_weight &&
      weight <= rule.to_weight
    ) {
      return {
        price: rule.price,
        label: rule.label,
        formatted:
          rule.price === 0
            ? "Kostenlos"
            : rule.price.toFixed(2).replace(".", ",") + " €"
      };
    }
  }
  return null;
}

module.exports = getShippingRate;