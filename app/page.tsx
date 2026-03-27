"use client";

import Link from "next/link";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { AuroraBackground } from "./components/AuroraBackground";

interface Project {
  id: string;
  title: string;
  description?: string;
  category?: string;
  language?: string;
  link?: string;
  gif?: string;
  featured?: boolean;
  new_feature?: boolean;
}

export default function Home() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/projects");
        if (response.ok) {
          const data = await response.json();
          setProjects(data.filter((p: Project) => p.featured));
        }
      } catch (err) {
        console.error("Failed to fetch projects");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <AuroraBackground showRadialGradient={true} animationSpeed={15}>
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 w-full">
        <Navbar />

      {/* Hero Section - Full Screen */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-4xl text-center">
          <h1 className="text-7xl md:text-8xl font-bold text-white mb-6">
            Hi, I'm Morris
          </h1>
          <p className="text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            A passionate developer building beautiful and functional web applications.
            Experienced in modern web technologies and full-stack development.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/skills">
              <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition text-lg">
                View My Skills
              </button>
            </Link>
            <button className="border border-blue-500 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-500/10 transition text-lg">
              Get in Touch
            </button>
          </div>
        </div>
      </section>

        {/* Featured Projects Section */}
        <section className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-5xl font-bold text-white mb-12">Featured Projects</h2>
          
          {!loading && projects.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="group bg-slate-800 border border-slate-700 rounded-xl overflow-hidden hover:border-blue-500 transition hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1"
                >
                  {project.gif && (
                    <div className="relative w-full h-48 bg-slate-700 overflow-hidden">
                      <img
                        src={project.gif}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition"
                      />
                    </div>
                  )}

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 mb-4">
                      {project.description}
                    </p>

                    <div className="flex gap-2 mb-4">
                      {project.category && (
                        <span className="px-3 py-1 text-xs font-semibold text-blue-300 bg-blue-900/30 rounded-full">
                          {project.category}
                        </span>
                      )}
                      {project.language && (
                        <span className="px-3 py-1 text-xs font-semibold text-purple-300 bg-purple-900/30 rounded-full">
                          {project.language}
                        </span>
                      )}
                    </div>

                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition"
                      >
                        <FaExternalLinkAlt size={16} />
                        Visit Project
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          <Link href="/projects">
            <button className="border border-blue-500 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-500/10 transition text-lg">
              View All Projects
            </button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
      </div>
    </AuroraBackground>
  );
}
