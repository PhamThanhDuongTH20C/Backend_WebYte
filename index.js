const express = require('express');
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;
const productRoutes = require("./routes/product");
const authRouter = require('./routes/auth');
app.use(express.json());
app.use(express.static('public'));
const specificationsRouter = require("./routes/specifications");



// Connect to MongoDB using Mongoose
mongoose.connect('mongodb+srv://phamduongrcvn2012:Zxc55555@cluster0.fxa0xjz.mongodb.net/<database>?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});


app.use('/products', productRoutes);

app.use('/auth', authRouter);

app.use("/specifications", specificationsRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
