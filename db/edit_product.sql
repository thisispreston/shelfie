UPDATE product
SET name = $2
SET price = $3
SET img = $4
WHERE product_id = $1
;