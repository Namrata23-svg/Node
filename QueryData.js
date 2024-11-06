
const db = require('./db');

const getMasterWithDetails = (masterId) => {
  return new Promise((resolve, reject) => {
    const query = `
      SELECT master.id AS masterId, master.name AS categoryName, detail.id AS detailId, detail.question
      FROM master
      LEFT JOIN detail ON master.id = detail.masterId
      WHERE master.id = ?
    `;
    
    db.query(query, [masterId], (err, results) => {
      if (err) return reject(err);
      resolve(results);
    });
  });
};

// Example usage
(async () => {
  try {
    const data = await getMasterWithDetails(1);
    console.log('Master with details:', JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Error fetching data:', error);
  }
})();
