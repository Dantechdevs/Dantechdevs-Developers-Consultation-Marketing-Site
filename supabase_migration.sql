create table consultations (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  email text not null,
  phone text not null,
  organization text,
  service_needed text not null,
  preferred_date date,
  project_details text not null,
  status text default 'new',
  created_at timestamp default now()
);

-- Optional: enable row-level security and lock down direct client access,
-- since inserts happen through the API route using the service role key.
alter table consultations enable row level security;
