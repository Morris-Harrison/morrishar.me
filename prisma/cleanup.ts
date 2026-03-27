import { prisma } from "@/lib/prisma";

async function main() {
  console.log("Deleting sample seed projects...");

  // Delete the sample projects I created
  const result = await prisma.project.deleteMany({
    where: {
      title: {
        in: ["E-Commerce Platform", "AI Chat Application", "Task Management App"]
      }
    }
  });

  console.log(`Deleted ${result.count} sample projects`);
  console.log("Your real projects should now be visible!");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
