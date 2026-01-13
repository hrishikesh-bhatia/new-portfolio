import MatrixBackground from "@/app/components/MatrixBackground";

export default function BlogSmith() {
  return (
    <main className="relative min-h-screen bg-black text-white py-10 overflow-hidden">
      <MatrixBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <h1 className="text-5xl font-bold text-green-400 mb-4">
          BlogSmith
        </h1>

        <p className="text-gray-300 max-w-2xl mb-6">
          A framework-free, performance-optimized blogging platform built using
          pure web technologies to prove that powerful software doesn’t require
          heavy frameworks.
        </p>

        <div className="flex gap-4 mb-12">
          <a
            href="https://blogsmith.onrender.com/"
            target="_blank"
            className="px-6 py-3 bg-green-500 text-black font-bold rounded hover:bg-green-400 transition"
          >
            🚀 Live Site
          </a>

          <a
            href="https://github.com/hrishikesh-bhatia/Blog"
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

  <div className="relative aspect-video border border-green-500 rounded-xl overflow-hidden shadow-[0_0_30px_rgba(34,197,94,0.4)]">
    <iframe
      className="w-full h-full"
      src="https://www.youtube.com/embed/Mc5YHrQRfA4"
      title="BlogSmith Demo"
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
                <li>• Create, edit, and delete blog posts</li>
                <li>• Persistent data storage</li>
                <li>• Responsive UI for all devices</li>
                <li>• Fast page loads & smooth navigation</li>
                <li>• Clean and distraction-free reading experience</li>
              </ul>
            </div>

            <div className="border border-green-500 p-6 rounded-lg h-full">
              <p className="text-gray-300">
                BlogSmith was built to demonstrate mastery over core web
                technologies without relying on frameworks while still
                delivering a full-featured, production-quality blogging
                experience.
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
                ✍️ <b>Writers & bloggers</b> who want a simple, fast publishing
                platform.
              </p>
            </div>

            <div className="border border-green-500 p-5 rounded-lg h-full">
              <p className="text-gray-300">
                🧑‍💻 <b>Developers</b> who want to learn how modern web apps work
                without frameworks.
              </p>
            </div>

            <div className="border border-green-500 p-5 rounded-lg h-full">
              <p className="text-gray-300">
                🤖 <b>Indie creators</b> who want a lightweight CMS.
              </p>
            </div>

            <div className="border border-green-500 p-5 rounded-lg h-full">
              <p className="text-gray-300">
                📚 <b>Students</b> studying JavaScript and web fundamentals.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-green-400 mb-6">
            🧠 Why it’s impressive
          </h2>

          <div className="space-y-6 max-w-3xl">
            <div className="border border-green-500 p-5 rounded-lg">
              <p className="text-gray-300">
                Most developers rely on React or frameworks. BlogSmith is built
                with <b>pure JavaScript</b>, proving deep understanding of the
                browser and DOM.
              </p>
            </div>

            <div className="border border-green-500 p-5 rounded-lg">
              <p className="text-gray-300">
                Optimized DOM operations reduced rendering overhead by
                <b>40%</b>, improving performance on low-end devices.
              </p>
            </div>

            <div className="border border-green-500 p-5 rounded-lg">
              <p className="text-gray-300">
                Modular architecture makes it easy to extend without
                sacrificing speed.
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
                <b>Frontend:</b> Vanilla JavaScript, HTML, CSS
              </p>
            </div>

            <div className="border border-green-500 p-6 rounded-lg h-full">
              <p className="text-gray-300">
                <b>Backend:</b> Node.js, Express.js
              </p>
            </div>

            <div className="border border-green-500 p-6 rounded-lg h-full">
              <p className="text-gray-300">
                <b>Storage:</b> Local persistence & server-side storage
              </p>
            </div>

            <div className="border border-green-500 p-6 rounded-lg h-full">
              <p className="text-gray-300">
                <b>Architecture:</b> Modular, low-DOM-overhead design
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
