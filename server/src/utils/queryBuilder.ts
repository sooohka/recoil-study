import Table from "../@types/table";

class Query {
  query: string;

  constructor(query?: string) {
    this.query = query || "";
  }

  SELECT(table: Table) {
    this.query = `SELECT * FROM ${table} `;
    return this;
  }

  INSERT(table: Table, ob: Record<string, string | number>) {
    const keys = Object.keys(ob);
    this.query = `INSERT INTO ${table}(${keys.map(
      (key) => key
    )}) VALUES(${keys.map((key) => {
      if (ob[key] === undefined) throw new Error("values is undefined");
      return `'${ob[key]}'`;
    })}) `;
    return this;
  }

  UPDATE(table: Table, ob: Record<string, string | number>) {
    const keys = Object.keys(ob);
    const parsed = keys.map((key, i) => {
      if (ob[key] === undefined) throw new Error("values is undefined");
      if (i === 0) return `SET ${key}='${ob[key]}'`;
      return `${key}='${ob[key]}'`;
    });
    this.query = `UPDATE ${table} ${parsed.map((p) => p)} `;
    return this;
  }

  DELETE(table: Table) {
    this.query = `DELETE FROM ${table} `;
    return this;
  }

  WHERE(key: string, value: string | number) {
    this.query = this.query.concat(`WHERE ${key}='${value}' `);
    return this;
  }

  LIMIT(limit: number) {
    this.query = this.query.concat(`LIMIT ${limit} `);
    return this;
  }

  end() {
    return `${this.query};`;
  }
}

export default Query;