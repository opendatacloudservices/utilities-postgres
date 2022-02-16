import {Client} from 'pg';

export const tableExist = (
  client: Client,
  tableName: string
): Promise<boolean> => {
  return client
    .query(
      `SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' AND table_name = '${tableName}'`
    )
    .then(result => {
      if (result.rows.length > 0) {
        return Promise.resolve(true);
      } else {
        return Promise.resolve(false);
      }
    });
};

export const tablesExist = (
  client: Client,
  tableNames: string[]
): Promise<boolean> => {
  return Promise.all(
    tableNames.map(tableName => tableExist(client, tableName))
  ).then(exists => {
    if (exists.includes(false)) {
      return Promise.resolve(false);
    }
    return Promise.resolve(true);
  });
};
