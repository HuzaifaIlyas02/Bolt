import { Pinecone } from "@pinecone-database/pinecone";

export const getPineconeClient = async () => {
  const client = new Pinecone();

  await client.createIndex({
    name: "bolt",
    dimension: 1536, // Replace with your model dimensions
    metric: "euclidean", // Replace with your model metric
    spec: {
      serverless: {
        cloud: "aws",
        region: "us-east-1",
      },
    },
  });

  return client;
};
