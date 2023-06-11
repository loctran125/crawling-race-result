import mongoose, { Connection } from "mongoose";
import dotenv from "dotenv";
dotenv.config();
function newConnection(uri: string): Connection {
  const conn: Connection = mongoose.createConnection(uri);

  conn.on("error", function (error) {
    console.log(`Mongodb:: connection ${conn.name} ${JSON.stringify(error)}`);
  });
  conn.on("disconnected", function () {
    console.log(`Mongodb:: disconnected:: ${conn.name} `);
  });
  conn.on("connected", function () {
    console.log(`Mongodb:: connected:: ${conn.name} `);
  });

  return conn;
}

// Make connection to DB atlas
// const uri: string = `mongodb+srv://${process.env.DB_ATLAS_USER_NAME}:${process.env.DB_ATLAS_PASS_WORD}@cluster0.c8suasf.mongodb.net/${process.env.DB_ATLAS_NAME}?retryWrites=true&w=majority`;
// Make connection to DB test
const uri = process.env.URI_MONGODB_TEST as string;
const testConnection: Connection = newConnection(uri);

export { testConnection };
