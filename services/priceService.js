// services/priceService.js
const { fetchPricingDetails } = require('../db/queries');

class PriceService {
  async calculatePrice(organizationId, zone, totalDistance, itemType) {
    try {
      const { base_distance_in_km, km_price, fix_price } = await fetchPricingDetails(organizationId, zone, itemType);
      const basePrice = totalDistance <= base_distance_in_km ? fix_price : fix_price + (totalDistance - base_distance_in_km) * km_price;
      return basePrice;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new PriceService();
