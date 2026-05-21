import { Pool } from "pg";

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

export async function GET() {
  if (!process.env.POSTGRES_URL) {
    return Response.json(
      { error: "POSTGRES_URL is not set in .env.local" },
      { status: 500 },
    );
  }

  const result = await pool.query("SELECT NOW() AS now");
  return Response.json({ time: result.rows[0] });
}
