import { MongoClient } from "mongodb";

async function main() {
  const url = process.env.DATABASE_URL;

  if (!url) {
    throw new Error("DATABASE_URL env var is not set");
  }

  const client = new MongoClient(url);

  try {
    await client.connect();

    const db = client.db();
    const projects = db.collection("projects");

    console.log("Removing FTRD field from all projects...");

    const result = await projects.updateMany(
      {},
      {
        $unset: { FTRD: "" },
      },
    );

    console.log(`Updated ${result.modifiedCount} project documents.`);
  } finally {
    await client.close();
  }
}

main().catch((err) => {
  console.error("Error while removing FTRD field:", err);
  process.exit(1);
});
