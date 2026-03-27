import Link from "next/link";
import { FaPython, FaJs } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Skills() {
  const skills = [
    { 
      name: "Python", 
      icon: FaPython,
      description: "Data processing, scripting, and backend development",
      proficiency: "Advanced"
    },
    { 
      name: "JavaScript", 
      icon: FaJs,
      description: "Interactive frontend experiences and web applications",
      proficiency: "Advanced"
    },
    { 
      name: "TypeScript", 
      icon: SiTypescript,
      description: "Type-safe development for scalable applications",
      proficiency: "Advanced"
    },
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-6 pt-20">
        <div className="max-w-4xl mx-auto w-full">
          <h1 className="text-7xl font-bold text-white mb-6">My Skills</h1>
          <p className="text-2xl text-slate-300 leading-relaxed">
            I work with modern technologies to build scalable, performant web applications. 
            Here's a breakdown of my technical expertise and the tools I'm proficient with.
          </p>
        </div>
      </section>

      {/* Skills Grid Section */}
      <section className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-5xl font-bold text-white mb-12">Core Technologies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="group relative bg-slate-800 border border-slate-700 rounded-xl p-8 hover:border-slate-600 transition hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1"
              >
                <div className="text-6xl mb-4 group-hover:scale-110 transition transform">
                  <skill.icon className="text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {skill.name}
                </h3>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-blue-400 font-semibold">
                    Proficiency
                  </span>
                  <span className="text-sm text-slate-300">
                    {skill.proficiency}
                  </span>
                </div>
                <p className="text-slate-400">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frameworks & Libraries Section */}
      <section className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-5xl font-bold text-white mb-12">Frameworks & Libraries</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-blue-400 mb-6">Frontend</h3>
              <ul className="space-y-4 text-slate-300 text-lg">
                <li>• React & Next.js</li>
                <li>• Tailwind CSS</li>
                <li>• HTML5 & CSS3</li>
                <li>• Responsive Design</li>
                <li>• State Management (Redux, Zustand)</li>
              </ul>
            </div>
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-cyan-400 mb-6">Backend</h3>
              <ul className="space-y-4 text-slate-300 text-lg">
                <li>• Node.js & Express</li>
                <li>• Django & FastAPI</li>
                <li>• MongoDB & PostgreSQL</li>
                <li>• RESTful APIs</li>
                <li>• Authentication & Security</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tools & Soft Skills Section */}
      <section className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-5xl font-bold text-white mb-12">Tools & Skills</h2>
          <div className="space-y-8">
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Development Tools</h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                Git, GitHub, VS Code, Docker, Firebase, AWS, Vercel, Netlify, Prisma ORM, 
                GraphQL, Webpack, npm, yarn, and various development workflows.
              </p>
            </div>
            <div className="bg-slate-800 border border-slate-700 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Soft Skills</h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                Problem-solving, communication, teamwork, project management, code review, 
                mentoring, and a strong commitment to continuous learning and improvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
