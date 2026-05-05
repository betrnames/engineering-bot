/*
  # Create domain_leads table

  1. New Tables
    - `domain_leads`
      - `id` (uuid, primary key)
      - `email` (text) - contact email
      - `company` (text) - company name (optional)
      - `message` (text) - message / interest
      - `intent` (text) - e.g. "claim", "demo", "inquiry"
      - `created_at` (timestamptz)
  2. Security
    - Enable RLS on `domain_leads`
    - Allow anonymous inserts (this is a public lead-capture form)
    - No read/update/delete policies (locked down to backend only)
*/

CREATE TABLE IF NOT EXISTS domain_leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL DEFAULT '',
  company text NOT NULL DEFAULT '',
  message text NOT NULL DEFAULT '',
  intent text NOT NULL DEFAULT 'inquiry',
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE domain_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a lead"
  ON domain_leads
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
