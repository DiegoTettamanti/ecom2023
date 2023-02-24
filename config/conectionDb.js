

import { mongoose} from 'mongodb';

const initConnections = async () => {
  const url = "mongodb+srv://Tettacorp:Fullstack23@cluster17.63yiu.mongodb.net/?retryWrites=true&w=majority";
  try {
    console.log("Conectado a MongoDB");
    return await mongoose.connect(url)
  } catch (error) {
    console.log("Error connecting")
    process.exit(1)
  }
}

export default { initConnections } 




