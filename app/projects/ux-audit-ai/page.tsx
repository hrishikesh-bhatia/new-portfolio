import MatrixBackground from "@/app/components/MatrixBackground";

export default function UXAuditAI() {
  return (
    <main className="relative min-h-screen bg-black text-white py-10 overflow-hidden">
      <MatrixBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <h1 className="text-5xl font-bold text-green-400 mb-4">
          UX Audit AI
        </h1>

        <p className="text-gray-300 max-w-2xl mb-6">
          An AI-powered platform that analyzes any live website via URL and
          generates structured UX scores, usability insights, and actionable
          recommendations to improve conversions and user experience.
        </p>

        <div className="flex gap-4 mb-12">
          <a
            href="https://ux-audit-ai.vercel.app/"
            target="_blank"
            className="px-6 py-3 bg-green-500 text-black font-bold rounded hover:bg-green-400 transition"
          >
            🚀 Live Platform
          </a>

          <a
            href="https://github.com/hrishikesh-bhatia/ux-saas"
            target="_blank"
            className="px-6 py-3 border border-green-500 text-green-400 rounded hover:bg-green-500/10 transition"
          >
            💻 GitHub
          </a>
        </div>


<section className="mb-16">
  <h2 className="text-3xl font-bold text-green-400 mb-6">
    🎥 Live Product Demo
  </h2>
{/* https://youtu.be/HcJJILT0XZk */}
  <div className="relative aspect-video border border-green-500 rounded-xl overflow-hidden shadow-[0_0_30px_rgba(34,197,94,0.4)]">
    <iframe
      className="w-full h-full"
      src="https://www.youtube.com/embed/HcJJILT0XZk"
      title="UX Audit AI Demo"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
</section>


        <section className="mb-16">
          <h2 className="text-3xl font-bold text-green-400 mb-6">
            ⚡ What it does
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
            <div className="border border-green-500 p-6 rounded-lg h-full">
              <ul className="text-gray-300 space-y-3">
                <li>• Enter any website URL</li>
                <li>• AI scans layout, navigation, and UX patterns</li>
                <li>• Generates usability & conversion scores</li>
                <li>• Produces structured UX feedback</li>
                <li>• Suggests concrete UI/UX improvements</li>
              </ul>
            </div>

            <div className="border border-green-500 p-6 rounded-lg h-full">
              <p className="text-gray-300">
                UX Audit AI replaces manual UX reviews with an automated,
                intelligent system that can evaluate any website in seconds
                instead of hours, making UX optimization accessible to
                founders, marketers, and product teams.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-green-400 mb-6">
            🎯 Who this is for
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-green-500 p-5 rounded-lg h-full">
              <p className="text-gray-300">
                🤖 <b>Startup founders</b> who want to improve landing page
                conversion without hiring expensive UX consultants.
              </p>
            </div>

            <div className="border border-green-500 p-5 rounded-lg h-full">
              <p className="text-gray-300">
                📈 <b>Growth marketers</b> optimizing funnels and retention.
              </p>
            </div>

            <div className="border border-green-500 p-5 rounded-lg h-full">
              <p className="text-gray-300">
                🎨 <b>Design teams</b> validating UX decisions with AI feedback.
              </p>
            </div>

            <div className="border border-green-500 p-5 rounded-lg h-full">
              <p className="text-gray-300">
                🧑‍💻 <b>Agencies & freelancers</b> offering UX audits to clients.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-green-400 mb-6">
            🧠 Why it’s different
          </h2>

          <div className="space-y-6 max-w-3xl">
            <div className="border border-green-500 p-5 rounded-lg">
              <p className="text-gray-300">
                Traditional UX audits are manual, slow, and expensive. UX Audit
                AI delivers results in seconds using AI-driven heuristics.
              </p>
            </div>

            <div className="border border-green-500 p-5 rounded-lg">
              <p className="text-gray-300">
                It evaluates <b>live websites</b>, not screenshots or mockups
                giving real-world UX insights.
              </p>
            </div>

            <div className="border border-green-500 p-5 rounded-lg">
              <p className="text-gray-300">
                It generates <b>structured, actionable recommendations </b>
                instead of vague feedback.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-green-400 mb-6">
            🧩 Tech Stack
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="border border-green-500 p-6 rounded-lg h-full">
              <p className="text-gray-300">
                <b>Frontend:</b> React, Tailwind CSS
              </p>
            </div>

            <div className="border border-green-500 p-6 rounded-lg h-full">
              <p className="text-gray-300">
                <b>Backend:</b> Python, Express.js, REST APIs
              </p>
            </div>

            <div className="border border-green-500 p-6 rounded-lg h-full">
              <p className="text-gray-300">
                <b>AI Logic:</b> Automated UX heuristics & AI-driven analysis
              </p>
            </div>

            <div className="border border-green-500 p-6 rounded-lg h-full">
              <p className="text-gray-300">
                <b>Infrastructure:</b> Live website scanning + analysis pipeline
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
