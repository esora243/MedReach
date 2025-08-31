-- articles
create table articles (
  id uuid primary key default uuid_generate_v4(),
  title text,
  summary text,
  body text,
  tags text[],
  status text,
  author text,
  created_at timestamp
);

-- comments
create table comments (
  id uuid primary key default uuid_generate_v4(),
  article_id uuid references articles(id),
  body text,
  created_at timestamp default now()
);

-- likes
create table likes (
  id uuid primary key default uuid_generate_v4(),
  article_id uuid references articles(id),
  user_id uuid,
  created_at timestamp default now()
);

-- notifications
create table notifications (
  id serial primary key,
  message text,
  created_at timestamp default now()
);