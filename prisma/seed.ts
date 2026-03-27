import { prisma } from "@/lib/prisma";

async function main() {
  console.log("Seeding database with sample projects...");

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce platform with authentication, product management, and payment integration using Stripe.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
      link: "https://example-ecommerce.com",
      github: "https://github.com/morris/ecommerce-platform",
      technologies: ["React", "Next.js", "TypeScript", "MongoDB", "Stripe"],
    },
    {
      title: "AI Chat Application",
      description:
        "An intelligent chat application powered by OpenAI API with real-time messaging and conversation history.",
      image: "https://images.unsplash.com/photo-1587384335014-e7442cab4005?w=600&h=400&fit=crop",
      link: "https://example-chat.com",
      github: "https://github.com/morris/ai-chat",
      technologies: ["Next.js", "TypeScript", "OpenAI", "Socket.io", "MongoDB"],
    },
    {
      title: "Task Management App",
      description:
        "A productive task management application with drag-and-drop UI, reminders, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
      link: "https://example-tasks.com",
      github: "https://github.com/morris/task-manager",
      technologies: ["React", "TypeScript", "Python", "FastAPI", "PostgreSQL"],
    },
  ];

  for (const project of projects) {
    await prisma.project.create({
      data: project,
    });
  }

  console.log("Seeding complete!");
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
