UPDATE users
SET tokenkey = $1, expiration = $2
WHERE id = $3
returning *