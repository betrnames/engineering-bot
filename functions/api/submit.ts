interface Env {
  DB: D1Database;
}

export const onRequestPost: PagesFunction<Env> = async (context) => {
  try {
    const body = await context.request.json() as {
      email?: string;
      company?: string;
      message?: string;
      intent?: string;
    };

    if (!body.email) {
      return new Response(JSON.stringify({ error: "Email is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    await context.env.DB.prepare(
      "INSERT INTO domain_leads (email, company, message, intent) VALUES (?, ?, ?, ?)"
    )
      .bind(body.email, body.company || null, body.message || null, body.intent || "claim")
      .run();

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
};
