import { neon } from "@netlify/neon";

export default async () => {
  const sql = neon({ connectionString: process.env.NETLIFY_DATABASE_URL });

  const users = await sql`
    SELECT id, name, email
    FROM users
    ORDER BY id;
  `;

  return new Response(JSON.stringify(users), {
    headers: { "Content-Type": "application/json" },
  });
};
