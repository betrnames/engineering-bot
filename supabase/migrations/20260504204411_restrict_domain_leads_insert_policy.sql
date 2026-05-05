/*
  # Restrict domain_leads INSERT policy

  1. Security
    - Drop the existing permissive `Anyone can submit a lead` policy that
      used `WITH CHECK (true)` which effectively bypasses RLS.
    - Replace it with a validated INSERT policy that enforces input
      constraints at the database layer so the endpoint can only be used
      for its intended purpose.

  2. Validation Rules
    - `email` must be non-empty and match a basic email shape
    - `email` is capped at 320 characters (RFC 5321 max)
    - `company` and `message` are length-capped to prevent abuse
    - `intent` must be one of the known allowed values
    - `created_at` cannot be set to a future or past value by the client
      (must be close to server now())

  3. Notes
    - Read/update/delete remain locked down (no policies = no access)
    - Validation is intentionally tight so the public form is usable but
      cannot be exploited to write arbitrary rows
*/

DROP POLICY IF EXISTS "Anyone can submit a lead" ON domain_leads;

CREATE POLICY "Public can submit valid leads"
  ON domain_leads
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (
    length(email) BETWEEN 3 AND 320
    AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$'
    AND length(company) <= 200
    AND length(message) <= 2000
    AND intent IN ('claim', 'demo', 'inquiry')
    AND created_at >= now() - interval '1 minute'
    AND created_at <= now() + interval '1 minute'
  );
