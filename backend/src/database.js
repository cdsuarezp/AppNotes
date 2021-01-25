const mongoose = require('mongoose');



const URI = 'mongodb://localhost/mern';



async function connectBD(){
await mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

console.log('db is connected')

}

connectBD();