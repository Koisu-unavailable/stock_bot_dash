import sqlite3 from "sqlite3";

export function readDb() {
  let rows: any[] = [];
  let db = new sqlite3.Database("../stock_prices.db");
  db.all("SELECT * FROM stock", (err, dbrows) => {
    dbrows.forEach((row) => {
      rows.push(row);
    });
  });

  return rows;
}
