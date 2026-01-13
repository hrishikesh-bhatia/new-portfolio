import NeuralGrid from "@/app/components/NeuralGrid";
import Link from "next/link";

const projects = [
  {
    name: "UX Audit AI",
    tag: "AI SaaS",
    slug: "ux-audit-ai",
  },
  {
    name: "CodeMate",
    tag: "Real-time Platform",
    slug: "codemate",
  },
  {
    name: "BlogSmith",
    tag: "Core Engineering",
    slug: "blogsmith",
  },
  {
    name: "Web3 Payment Gateway",
    tag: "Fintech",
    slug: "web3-gateway",
  },
];

export default function Projects() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <NeuralGrid />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20">
        <h1 className="text-5xl font-bold text-green-400 mb-10">
          Systems
        </h1>

        <div className="space-y-6">
          {projects.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="group block border border-green-500 rounded-lg p-6 hover:bg-green-500/10 transition relative overflow-hidden"
            >
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-green-400 group-hover:text-green-300">
                  {p.name}
                </h2>

                <span className="text-sm text-green-300 border border-green-500 px-3 py-1 rounded">
                  {p.tag}
                </span>
              </div>

              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent"></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
