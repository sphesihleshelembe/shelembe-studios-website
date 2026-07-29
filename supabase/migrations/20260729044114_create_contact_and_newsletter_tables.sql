/*
# Create contact submissions and newsletter signup tables

1. New Tables
- `contact_submissions`
  - `id` (uuid, primary key)
  - `name` (text, not null) — sender's full name
  - `email` (text, not null) — sender's email address
  - `subject` (text) — optional subject line
  - `message` (text, not null) — the inquiry body
  - `service` (text) — which service they're interested in (e.g. "Film Production")
  - `status` (text, default 'new') — tracking: new / read / responded
  - `created_at` (timestamptz, default now())
- `newsletter_signups`
  - `id` (uuid, primary key)
  - `email` (text, unique, not null) — subscriber email
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on both tables.
- This is a public marketing site with no sign-in screen, so the anon-key client must be able to INSERT. SELECT/UPDATE/DELETE are intentionally restricted (only the service role / dashboard can read submissions).
- INSERT policies use `TO anon, authenticated` with `WITH CHECK (true)` because anyone visiting the site may submit a form.
- No SELECT/UPDATE/DELETE policies for anon — submissions are private to the studio owner.

3. Important Notes
- Newsletter email has a UNIQUE constraint to prevent duplicate subscriptions.
- Both tables are append-only from the frontend; management happens via the Supabase dashboard.
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text,
  message text NOT NULL,
  service text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact" ON contact_submissions;
CREATE POLICY "anon_insert_contact" ON contact_submissions FOR INSERT
  TO anon, authenticated WITH CHECK (true);

CREATE TABLE IF NOT EXISTS newsletter_signups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE newsletter_signups ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_newsletter" ON newsletter_signups;
CREATE POLICY "anon_insert_newsletter" ON newsletter_signups FOR INSERT
  TO anon, authenticated WITH CHECK (true);
