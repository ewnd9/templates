CREATE SCHEMA api;

CREATE TABLE api.todos (
  id SERIAL PRIMARY KEY,
  done BOOLEAN NOT NULL DEFAULT false,
  task TEXT NOT NULL,
  due TIMESTAMPTZ
);

INSERT INTO api.todos (task) VALUES
  ('finish tutorial 0'), ('pat self on back');

CREATE ROLE web_anon nologin;

GRANT USAGE ON schema api TO web_anon;
GRANT SELECT ON api.todos TO web_anon;
