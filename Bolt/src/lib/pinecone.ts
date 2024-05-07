import { Pinecone } from "@pinecone-database/pinecone";

// import { PineconeClient } from "@pinecone-database/pinecone";

// export const getPineconeClient = async () => {
//   const client = new PineconeClient();

//   await client.init({
//     apiKey: process.env.PINECONE_API_KEY!,
//     environment: "us-east-1",
//     region: "aws",
//     type: "Serverless",
//   });

//   return client;
// };

export const pc = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY!,
});

await pc.createIndex({
  name: "serverless-index",
  dimension: 1536,
  metric: "cosine",
  spec: {
    serverless: {
      cloud: "aws",
      region: "us-east-1",
    },
  },
});
