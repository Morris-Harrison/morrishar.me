import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

interface FooterProps {
  github?: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
}

export default function Footer({
  github = "https://github.com/morrisharrison",
  linkedin = "https://linkedin.com/in/morrisharrison",
  twitter = "https://twitter.com/morrisharrison",
  email = "morris@example.com",
}: FooterProps) {
  return (
    <footer className="bg-slate-900/50 border-t border-slate-700 py-12 mt-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col items-center justify-center gap-8">
          {/* Social Media Icons */}
          <div className="flex gap-6">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition text-2xl"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            )}
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition text-2xl"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
            )}
            {twitter && (
              <a
                href={twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-blue-400 transition text-2xl"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
            )}
            {email && (
              <a
                href={`mailto:${email}`}
                className="text-slate-400 hover:text-blue-400 transition text-2xl"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>
            )}
          </div>

          {/* Copyright */}
          <p className="text-slate-400 text-center">
            2026 Morris Harrison
          </p>
        </div>
      </div>
    </footer>
  );
}
