const express = require('express');
const cors = require('cors')
require('./assets/db')
const productRoute = require('./routers/product.rout');
const categoryRoute = require('./routers/category.rout');
const subcategoryRoute = require('./routers/subcategory.route');
const attributeRoute = require('./routers/attribute.route');
require('dotenv').config();
const app = express();
app.use(cors());
const PORT = process.env.PORT;

app.listen(PORT || 3000, () => { console.log('server running') });

app.use(express.json({limit: '50mb'}))

app.use('/api/product', productRoute);
app.use('/api/category', categoryRoute);
app.use('/api/subcategory', subcategoryRoute);
app.use('/api/attribute', attributeRoute);
