
const db = require('./db');

const createTables = async () => {
  const masterTableQuery = `
    CREATE TABLE IF NOT EXISTS master (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL
    )
  `;

  const detailTableQuery = `
    CREATE TABLE IF NOT EXISTS detail (
      id INT AUTO_INCREMENT PRIMARY KEY,
      question VARCHAR(255) NOT NULL,
      masterId INT,
      FOREIGN KEY (masterId) REFERENCES master(id) ON DELETE CASCADE ON UPDATE CASCADE
    )
  `;

  db.query(masterTableQuery, (err, results) => {
    if (err) throw err;
    console.log('Master table created.');
  });

  db.query(detailTableQuery, (err, results) => {
    if (err) throw err;
    console.log('Detail table created.');
  });
};

createTables();
