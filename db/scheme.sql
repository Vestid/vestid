CREATE TABLE users (
  id SERIAL PRIMARY KEY ,
  firstname TEXT,
  lastname TEXT,
  email TEXT,
  password TEXT,
  tokenKey TEXT,
  expiration TEXT,
  offering_loan BOOLEAN,
  seeking_loan BOOLEAN
);

CREATE TABLE seeking_loans (
  id SERIAL PRIMARY KEY,
  created_by INTEGER REFERENCES users(id),
  location TEXT,
  business_type TEXT,
  business_name TEXT,
  amount MONEY,
  description TEXT
);

CREATE TABLE offering_loans (
  id SERIAL PRIMARY KEY,
  created_by INTEGER REFERENCES users(id),
  location TEXT,
  category TEXT
);

CREATE TABLE favorited (
  id INTEGER REFERENCES seeking_loans(id),
  faved_by INTEGER REFERENCES users(id)
)
