import sqlite3 from "sqlite3";

let db = new sqlite3.Database('../stock_prices.db', sqlite3.READONLY);

export function readDb(){
    stuff = db.get("SELECT * FROM stock")
}