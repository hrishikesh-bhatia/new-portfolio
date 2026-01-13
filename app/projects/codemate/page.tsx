import { motion } from "framer-motion";
import MatrixBackground from "@/app/components/MatrixBackground";

export default function CodeMate() {
  return (
    <main className="relative min-h-screen bg-black text-white py-10 overflow-hidden">
  <MatrixBackground />

       <div className="relative z-10 max-w-6xl mx-auto px-6">

      <h1 className="text-5xl font-bold text-green-400 mb-4">
        CodeMate
      </h1>

      <p className="text-gray-300 max-w-2xl mb-6">
  A real-time collaborative coding and voice platform designed to make
  doubt-solving between students and mentors instant, natural, and human.
</p>

<div className="flex gap-4 mb-12">
  <a
    href="https://code-mate-pi.vercel.app/"
    target="_blank"
    className="px-6 py-3 bg-green-500 text-black font-bold rounded hover:bg-green-400 transition"
  >
     Live Platform
  </a>

  <a
    href="https://github.com/hrishikesh-bhatia/CodeMate"
    target="_blank"
    className="px-6 py-3 border border-green-500 text-green-400 rounded hover:bg-green-500/10 transition"
  >
    💻 GitHub
  </a>
</div>

{/* <section className="mb-16">
  <h2 className="text-3xl font-bold text-green-400 mb-6">
    🎥 Live Product Demo
  </h2>

  <div className="relative aspect-video border border-green-500 rounded-xl overflow-hidden shadow-[0_0_30px_rgba(34,197,94,0.4)]">
    <iframe
      className="w-full h-full"
      src="https://www.youtube.com/embed/dQw4w9WgXcQ"
      title="CodeMate Demo"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
</section> */}



      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">

        <div className="border border-green-500 h-full p-6 rounded-lg shadow-[0_0_20px_rgba(34,197,94,0.3)]">
          <h2 className="text-2xl font-bold text-green-400 mb-4">
            🤖 What it does
          </h2>
          <ul className="text-gray-300 space-y-2">
            <li>• Real-time collaborative code editor</li>
            <li>• Voice chat using WebRTC</li>
            <li>• Live cursor & typing sync via WebSockets</li>
            <li>• Online code execution (Judge0 / Docker)</li>
            <li>• Mentor-student session rooms</li>
          </ul>
        </div>

        <div className="border border-green-500 h-full p-6 rounded-lg shadow-[0_0_20px_rgba(34,197,94,0.3)]">
          <h2 className="text-2xl font-bold text-green-400 mb-4">
            🧠 Why I built this
          </h2>
          <p className="text-gray-300">
            Most doubt-solving platforms feel slow and robotic. I wanted to
            recreate the experience of two people sitting next to each other,
            writing and speaking at the same time. CodeMate removes friction
            between learning and understanding.
          </p>
        </div>
      </section>

<section className="mt-12">
  <h2 className="text-3xl font-bold text-green-400 mb-6">
    🎯 Who this is for
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

    <div className="border border-green-500 h-full p-5 rounded-lg">
      <p className="text-gray-300">
        👨‍🎓 <b>Students</b> who want instant doubt-solving while practicing
        DSA, CP, or development.
      </p>
    </div>

    <div className="border border-green-500 h-full p-5 rounded-lg">
      <p className="text-gray-300">
        👨‍🏫 <b>Mentors</b> who want to teach and debug student code live,
        without screen sharing lag.
      </p>
    </div>

    <div className="border border-green-500 h-full p-5 rounded-lg">
      <p className="text-gray-300">
        🏫 <b>EdTech platforms</b> that want built-in real-time coding rooms.
      </p>
    </div>

    <div className="border border-green-500 h-full p-5 rounded-lg">
      <p className="text-gray-300">
        ⭐ <b>Bootcamps & communities</b> running live coding sessions and mock
        interviews.
      </p>
    </div>
  </div>
</section>




      <section className="mt-12">
        <h2 className="text-3xl font-bold text-green-400 mb-6">
          🧩 Architecture
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">

          <div className="border border-green-500 h-full p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Frontend</h3>
            <p className="text-gray-300">
              React + Monaco Editor for collaborative coding UI,
              WebSocket client for real-time updates, and WebRTC for voice.
            </p>
          </div>

          <div className="border border-green-500 h-full p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Backend</h3>
            <p className="text-gray-300">
              Node.js server handling WebSocket rooms, WebRTC signaling,
              session persistence, and integration with code execution engines.
            </p>
          </div>

          <div className="border border-green-500 h-full p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Code Execution</h3>
            <p className="text-gray-300">
              Judge0 containers execute user code securely and return
              outputs in real time.
            </p>
          </div>

          <div className="border border-green-500 h-full p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Database</h3>
            <p className="text-gray-300">
              MongoDB / Firebase stores session data, users, and message logs.
            </p>
          </div>
        </div>
      </section>




<section className="mt-12">
  <h2 className="text-3xl font-bold text-green-400 mb-6">
    ⚡ Why CodeMate is different
  </h2>

  <div className="space-y-6 max-w-3xl">
    <div className="border border-green-500 p-5 rounded-lg">
      <p className="text-gray-300">
        Most platforms use <b>Zoom + Screen Share</b>. That is slow, laggy, and
        awkward for coding. CodeMate is built around <b>real-time shared
        editors</b>.
      </p>
    </div>

    <div className="border border-green-500 p-5 rounded-lg">
      <p className="text-gray-300">
        Traditional tools separate <b>voice</b> and <b>code</b>. CodeMate
        merges them into one live workspace.
      </p>
    </div>

    <div className="border border-green-500 p-5 rounded-lg">
      <p className="text-gray-300">
        It is designed for <b>low-latency human interaction</b>, not recorded
        lectures or async chats.
      </p>
    </div>
  </div>
</section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold text-green-400 mb-6">
          📈 What I learned
        </h2>

        <ul className="text-gray-300 space-y-3 max-w-2xl">
          <li>• How to build real-time systems with WebSockets</li>
          <li>• Implementing WebRTC for low-latency voice</li>
          <li>• Handling concurrency & syncing shared state</li>
          <li>• Securely running untrusted code in containers</li>
          <li>• Designing systems that feel human, not robotic</li>
        </ul>
      </section>
      </div>
    </main>
  );
}
