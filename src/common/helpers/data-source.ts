import { DataSource } from 'typeorm';
import * as fs from 'fs';

const configPath = process.env.CONFIG_PATH || './config.dev.json';
const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: config.DB_HOST,
  port: config.DB_PORT,
  username: config.DB_USER,
  password: config.DB_PASSWORD,
  database: config.DB_NAME,
  entities: ['src/**/*.entity{.ts,.js}'], // Adjust the path if needed
  synchronize: false,
  migrations: ['src/migrations/*.ts'],
});
