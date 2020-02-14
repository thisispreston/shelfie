CREATE TABLE products (
    product_id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(40) NOT NULL,
    price INTEGER,
    img TEXT
)
;

-- INSERT INTO products
-- (name, price, img)
-- VALUES
-- ('shoe-1', 40, 'https://image.cnbcfm.com/api/v1/image/105680013-1547583426762nike1.jpg?v=1547583682&w=1600&h=900')
-- ('scarf-01', 25, 'https://us.sandro-paris.com/on/demandware.static/-/Sites-sandro-catalog-master-H13/default/dwbfa4e7e8/images/h13/Sandro_SHABO00155-441_V_1.jpg')
-- ('jacket-01', 120, 'https://dks.scene7.com/is/image/dkscdn/19WHGM21RNJCKTXXXAPO_Black_is?wid=685&fmt=jpg')
-- ;

-- SELECT * FROM products