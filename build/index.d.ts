import { Client } from 'pg';
export declare const tableExist: (client: Client, tableName: string) => Promise<boolean>;
export declare const tablesExist: (client: Client, tableNames: string[]) => Promise<boolean>;
