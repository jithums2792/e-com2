const express = require('express');
const cors = require('cors')
require('./assets/db')
const productRoute = require('./routers/product.rout');
const categoryRoute = require('./routers/category.rout');
const subcategoryRoute = require('./routers/subcategory.route');
const attributeRoute = require('./routers/attribute.route');
const cartRoutes = require('./routers/cart.route');
const userRoute = require('./routers/user.router')
const loginRouter = require('./routers/login.router')
const bannerrouter = require('./routers/banner.router')
const orderrouter = require('./routers/order.route')
const checkoutRouter = require('./routers/checkout.route')
require('dotenv').config();
const app = express();
app.use(cors({
    origin: '*'
}));
const PORT = process.env.PORT;

app.listen(PORT || 3000, () => { console.log('server running') });

app.use(express.json({limit: '50mb'}))

app.use('/api/product', productRoute);
app.use('/api/category', categoryRoute);
app.use('/api/subcategory', subcategoryRoute);
app.use('/api/attribute', attributeRoute);
app.use('/api/cart', cartRoutes);
app.use('/api/user', userRoute)
app.use('/api/banner',bannerrouter)
app.use('/api/order',orderrouter)
app.use('/api/login', loginRouter)
app.use('/api/checkout', checkoutRouter)


