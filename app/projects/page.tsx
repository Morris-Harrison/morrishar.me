"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { AuroraBackground } from "../components/AuroraBackground";

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

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/projects");
        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }
        const data = await response.json();
        setProjects(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
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

      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-6 pt-20">
        <div className="max-w-4xl mx-auto w-full">
          <h1 className="text-7xl font-bold text-white mb-6 italic">My Work</h1>
          <p className="text-2xl text-slate-300 leading-relaxed">
            Each of my projects are open-source live websites or applications available for download.
          </p>
        </div>
      </section>

        {/* Projects Grid Section */}
        <section className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-5xl font-bold text-white mb-12">Featured Projects</h2>
          {loading && (
            <div className="text-center py-12">
              <p className="text-slate-300 text-xl">Loading projects...</p>
            </div>
          )}

          {error && (
            <div className="bg-red-900/20 border border-red-500 rounded-lg p-6 mb-8">
              <p className="text-red-300 text-lg">Error: {error}</p>
            </div>
          )}

          {!loading && projects.length === 0 && !error && (
            <div className="text-center py-12">
              <p className="text-slate-400 text-xl">No projects found. Check back soon!</p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-white">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <span className="bg-blue-500/30 text-blue-300 px-2 py-1 rounded text-xs font-semibold">
                        Featured
                      </span>
                    )}
                  </div>

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
        </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </AuroraBackground>
  );
}
