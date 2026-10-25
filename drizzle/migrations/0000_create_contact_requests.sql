CREATE TABLE public.contact_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (char_length(name) BETWEEN 2 AND 100),
  company text CHECK (company IS NULL OR char_length(company) <= 150),
  email text NOT NULL CHECK (char_length(email) <= 255),
  message text NOT NULL CHECK (char_length(message) BETWEEN 10 AND 2000),
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT INSERT ON public.contact_requests TO anon, authenticated;
GRANT ALL ON public.contact_requests TO service_role;
ALTER TABLE public.contact_requests ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can submit contact" ON public.contact_requests FOR INSERT TO anon, authenticated WITH CHECK (true);