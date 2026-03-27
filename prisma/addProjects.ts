import { prisma } from "@/lib/prisma";

async function main() {
  console.log("Adding your real projects...");

  const projects = [
    {
      title: "Portfolio V2",
      description: "MERN portfolio hosted on AWS EC2 and nginx.",
      category: "Web Development",
      language: "JavaScript",
      link: "https://morrisharrison.com",
      gif: "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnlxcHJuYndyaGEyNDVq…",
      featured: true,
    },
    {
      title: "tm7zap.com (WIP)",
      description: "Dynamic portfolio for my best friend and pro Super Smash Bros Ultimate player.",
      category: "Web Development",
      language: "JavaScript",
      link: "https://www.tm7zap.com/",
      gif: "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTY1MG5hMTlpeWRicmNz…",
      featured: true,
    },
    {
      title: "Discord Clone",
      description: "Real-time Discord clone made with Next + MySQL + SocketIO",
      category: "Full Stack",
      language: "TypeScript",
      link: "",
      gif: "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbXhmcjJxa3MzeHY0Ymdr…",
      featured: true,
    },
  ];

  for (const project of projects) {
    await prisma.project.create({
      data: project,
    });
  }

  console.log("Added 3 projects!");
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
