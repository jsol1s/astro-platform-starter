import { neon } from "@netlify/neon";

const sql = neon(); // uses NETLIFY_DATABASE_URL automatically

export async function handler() {
  try {
    const landlords = await sql`
      SELECT id, name, city, created_at
      FROM landlords
      ORDER BY created_at DESC
      LIMIT 50
    `;

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(landlords),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Database query failed", details: String(err) }),
    };
  }
}
