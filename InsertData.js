
const db = require('./db');

const insertMaster = (name) => {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO master (name) VALUES (?)';
    db.query(query, [name], (err, results) => {
      if (err) return reject(err);
      resolve(results.insertId); 
    });
  });
};

const insertDetail = (question, masterId) => {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO detail (question, masterId) VALUES (?, ?)';
    db.query(query, [question, masterId], (err, results) => {
      if (err) return reject(err);
      resolve(results.insertId);
    });
  });
};

// Example usage
(async () => {
  try {
    const masterId = await insertMaster('Certificate A');
    await insertDetail('What is the validity?', masterId);
    await insertDetail('Who can issue this certificate?', masterId);

    console.log('Data inserted successfully.');
  } catch (error) {
    console.error('Error inserting data:', error);
  }
})();
