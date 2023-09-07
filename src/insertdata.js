const mysql = require('mysql2');

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'Gyanshu',
  password: 'Password@54321',
  database: 'Ecommerce',
});

const sampleProducts = [
    {
      title: 'Product 1',
      description: 'Yonex 1650',
      price: 29.99,
      imageURL: 'https://rukminim1.flixcart.com/image/850/1000/ksru0sw0/racquet/r/d/6/g4-8-25-cm-strung-astrox-smash-astroxsmash-badminton-racquet-original-imag69g7p7ztdjgu.jpeg?q=90',
    },
    {
      title: 'Product 2',
      description: 'Yonex 1800',
      price: 49.99,
      imageURL: 'https://m.media-amazon.com/images/I/61qYCfbe6EL._AC_UF894,1000_QL80_.jpg',
    },
];
  
// Insert sample products
sampleProducts.forEach((product) => {
    const { title, description, price, imageURL } = product;
    const sql = 'INSERT INTO products (title, description, price, imageURL) VALUES (?, ?, ?, ?)';
    const values = [title, description, price, imageURL];
  
    connection.query(sql, values, (err, result) => {
      if (err) {
        console.error('Error inserting product: ', err);
      } else {
        console.log('Product inserted successfully');
      }
    });
  });


