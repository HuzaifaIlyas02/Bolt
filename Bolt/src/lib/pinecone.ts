import { Pinecone } from "@pinecone-database/pinecone";

export const pc = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY!,
});

(async () => {
  await pc.createIndex({
    name: "bolt",
    dimension: 1536,
    spec: {
      serverless: {
        cloud: "aws",
        region: "us-west-1",
      },
    },
  });
})();
