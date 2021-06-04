"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tablesExist = exports.tableExist = void 0;
const tableExist = (client, tableName) => {
    return client
        .query(`SELECT table_name FROM information_schema.tables WHERE table_schema = 'public' AND table_name = '${tableName}'`)
        .then(result => {
        if (result.rows.length > 0) {
            return Promise.resolve(true);
        }
        else {
            return Promise.resolve(false);
        }
    });
};
exports.tableExist = tableExist;
const tablesExist = (client, tableNames) => {
    return Promise.all(tableNames.map(() => exports.tableExist(client, 'Datasets'))).then(exists => {
        if (exists.includes(false)) {
            return Promise.resolve(false);
        }
        return Promise.resolve(true);
    });
};
exports.tablesExist = tablesExist;
//# sourceMappingURL=index.js.map