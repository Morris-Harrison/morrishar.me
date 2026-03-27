import Link from "next/link";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function About() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Navbar />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-6 pt-20">
        <div className="max-w-4xl mx-auto w-full">
          <h1 className="text-7xl font-bold text-white mb-6">About Me</h1>
          <p className="text-2xl text-slate-300 leading-relaxed">
            I'm Morris Harrison, a software developer and computer science student based in Nanaimo, BC. 
            I'm passionate about building beautiful web applications and solving complex problems.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="min-h-screen flex items-center px-6 py-20">
        <div className="max-w-4xl mx-auto w-full">
          <h2 className="text-5xl font-bold text-white mb-8">My Journey</h2>
          <div className="space-y-6">
            <p className="text-xl text-slate-300 leading-relaxed">
              I discovered my passion for coding in high school and haven't looked back since. 
              What started as curiosity with HTML and CSS evolved into a deep love for building full-stack applications.
            </p>
            <p className="text-xl text-slate-300 leading-relaxed">
              I'm currently a first-year student at Vancouver Island University, pursuing a Bachelor of Computer Science. 
              Beyond my studies, I'm actively building projects, learning new technologies, and contributing to open-source.
            </p>
            <p className="text-xl text-slate-300 leading-relaxed">
              My focus is on writing clean, maintainable code and creating intuitive user experiences. 
              I believe that great software is a combination of technical excellence and thoughtful design.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
