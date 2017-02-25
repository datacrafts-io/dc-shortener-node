module.exports = {
  type: "postgres",
  url: process.env.DATABASE_URL,
  entities: ["dist/**/*.entity{.ts,.js}"],
  migrationsTableName: "orm_migrations",
  migrations: ["migrations/*.{ts,js}"],
  migrationsRun: true,
  synchronize: process.env.NODE_ENV !== "production",
  cli: {
    migrationsDir: "migrations"
  },
  ssl: {
    rejectUnauthorized: false
  }
}