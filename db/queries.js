// db/queries.js
const pool = require('./config');

const fetchPricingDetails = async (organizationId, zone, itemType) => {
  try {
    const query = `
      SELECT base_distance_in_km, km_price, fix_price
      FROM Pricing
      WHERE organization_id = $1 AND zone = $2 AND item_id = $3;
    `;
    const values = [organizationId, zone, itemType];
    const { rows } = await pool.query(query, values);
    return rows[0];
  } catch (error) {
    throw error;
  }
};

module.exports = {
  fetchPricingDetails,
};
// db/queries.js
const pool = require('./config');

const fetchPricingDetails = async (organizationId, zone, itemType) => {
  try {
    const query = `
      SELECT base_distance_in_km, km_price, fix_price
      FROM Pricing
      WHERE organization_id = $1 AND zone = $2 AND item_id = $3;
    `;
    const values = [organizationId, zone, itemType];
    const { rows } = await pool.query(query, values);
    return rows[0];
  } catch (error) {
    throw error;
  }
};

module.exports = {
  fetchPricingDetails,
};
