"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { LightWavesBackground } from "../components/LightWavesBackground";
import { GlassButton } from "../components/ui/glass-button";
import { RippleButton } from "@/components/ui/ripple-button";

interface Project {
  id: string;
  title: string;
  description?: string;
  category?: string;
  language?: string;
  link?: string;
  gif?: string;
  new_feature?: boolean;
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/projects");
        if (response.ok) {
          const data = await response.json();
          setProjects(data);
        }
      } catch (err) {
        // ignore
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const categories = Array.from(new Set(projects.map((p) => p.category).filter(Boolean))) as string[];
  const languages = Array.from(new Set(projects.map((p) => p.language).filter(Boolean))) as string[];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = !selectedCategory || project.category === selectedCategory;
    const matchesLanguage = !selectedLanguage || project.language === selectedLanguage;
    return matchesCategory && matchesLanguage;
  });

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    const aFeatured = a.new_feature ? 1 : 0;
    const bFeatured = b.new_feature ? 1 : 0;
    return bFeatured - aFeatured;
  });

  let headingTitle = "All Projects";
  if (selectedCategory || selectedLanguage) {
    const parts: string[] = [];
    if (selectedCategory) parts.push(selectedCategory);
    if (selectedLanguage) parts.push(selectedLanguage);
    headingTitle = `${parts.join(" ")} Projects`;
  }

  return (
    <LightWavesBackground>
      <div className="relative z-10 bg-transparent w-full min-h-screen flex flex-col">
        <Navbar />
        <section className="px-6 pt-20 pb-0 flex-1">
          <div className="max-w-4xl mx-auto w-full">
            <h2 className="text-5xl font-bold text-white mb-2">{headingTitle}</h2>
            <p className="text-slate-400 text-lg mb-10 cursor-default">
              All of my Projects are Open-Source Live Websites or Applications Available for Download.
            </p>
            
            {/* Filter Buttons */}
            {!loading && projects.length > 0 && (
              <div className="mb-8 space-y-4">
                {/* Category Filter */}
                {categories.length > 0 && (
                  <div>
                    <p className="text-slate-400 text-sm mb-2 cursor-default">Category:</p>
                    <div className="flex flex-wrap gap-2">
                      <GlassButton
                        onClick={() => setSelectedCategory(null)}
                        selected={selectedCategory === null}
                      >
                        All Categories
                      </GlassButton>
                      {categories.map((cat) => (
                        <GlassButton
                          key={cat}
                          onClick={() =>
                            setSelectedCategory((current) =>
                              current === cat ? null : cat
                            )
                          }
                          selected={selectedCategory === cat}
                        >
                          {cat}
                        </GlassButton>
                      ))}
                    </div>
                  </div>
                )}

                {/* Language Filter */}
                {languages.length > 0 && (
                  <div>
                    <p className="text-slate-400 text-sm mb-2 cursor-default">Language:</p>
                    <div className="flex flex-wrap gap-2">
                      <GlassButton
                        onClick={() => setSelectedLanguage(null)}
                        selected={selectedLanguage === null}
                      >
                        All
                      </GlassButton>
                      {languages.map((lang) => (
                        <GlassButton
                          key={lang}
                          onClick={() =>
                            setSelectedLanguage((current) =>
                              current === lang ? null : lang
                            )
                          }
                          selected={selectedLanguage === lang}
                        >
                          {lang}
                        </GlassButton>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            )}
            {loading ? (
              <div className="text-center py-12">
                <p className="text-slate-400 text-xl cursor-default">Loading projects...</p>
              </div>
            ) : sortedProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-9">
                {sortedProjects.map((project) => (
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
                        {project.new_feature && (
                          <span className="bg-blue-500/30 text-blue-300 px-2 py-1 rounded text-xs font-semibold cursor-default">
                            Featured
                          </span>
                        )}
                      </div>
                      <p className="text-slate-400 mb-4 cursor-default">
                        {project.description}
                      </p>
                      <div className="flex gap-2 mb-4">
                        {project.category && (
                          <span className="px-3 py-1 text-xs font-semibold text-blue-300 bg-blue-900/30 rounded-full cursor-default">
                            {project.category}
                          </span>
                        )}
                        {project.language && (
                          <span className="px-3 py-1 text-xs font-semibold text-purple-300 bg-purple-900/30 rounded-full cursor-default">
                            {project.language}
                          </span>
                        )}
                      </div>
                      {project.link && (
                        <RippleButton
                          type="button"
                          variant="default"
                          className="mt-1 bg-black text-white hover:bg-black/80 cursor-pointer"
                          onClick={() => {
                            window.open(
                              project.link as string,
                              "_blank",
                              "noopener,noreferrer"
                            );
                          }}
                        >
                          <FaExternalLinkAlt size={16} />
                          Visit Project
                        </RippleButton>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-slate-300 text-xl cursor-default">
                  {projects.length === 0 ? "No projects available." : "No projects match your filters."}
                </p>
                {projects.length === 0 && (
                  <p className="text-slate-400 cursor-default">Check the API or database seeding.</p>
                )}
              </div>
            )}

            {/* Contact icons below projects, matching home page */}
            <div className="text-center pt-[30px] pb-[30px]">
              <div className="inline-block rounded-xl px-6 py-4 shadow-md shadow-black/40 bg-gradient-to-r from-black/40 via-black/90 to-black/40">
                <div className="text-slate-100 italic text-4xl text-center mb-3 cursor-default">
                  Keep in Touch
                </div>
                <div className="flex items-center justify-center gap-6">
                  <a
                    href="mailto:morriskharrison@outlook.com"
                    className="text-white hover:text-blue-400 transition text-2xl"
                    aria-label="Email"
                  >
                    <FaEnvelope />
                  </a>
                  <a
                    href="https://github.com/morris-harrison"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-400 transition text-2xl"
                    aria-label="GitHub"
                  >
                    <FaGithub />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </LightWavesBackground>
  );
}
