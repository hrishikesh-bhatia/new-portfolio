"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, X, Send, Cpu } from "lucide-react";

export default function GeminiChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: string; text: string }[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMsg = { role: "user", text: input };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      setMessages((m) => [...m, { role: "assistant", text: data.reply }]);
    } catch (e) {
      setMessages((m) => [...m, { role: "assistant", text: "CONNECTION_LOST: system override failed." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* --- CYBER TRIGGER BUTTON --- */}
      {/* --- ROBOT MASCOT TRIGGER --- */}
<motion.button
  whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(34,197,94,0.6)" }}
  whileTap={{ scale: 0.9 }}
  onClick={() => setOpen(!open)}
  className="fixed bottom-6 right-6 z-9999 bg-black border-2 border-green-500 p-3 rounded-2xl shadow-[0_0_15px_rgba(34,197,94,0.3)] flex items-center justify-center group"
>
  {open ? (
    <X size={28} className="text-green-500" />
  ) : (
    <svg 
      width="32" 
      height="32" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className="text-green-500 group-hover:animate-bounce"
    >
      {/* Robot Head */}
      <rect x="3" y="11" width="18" height="10" rx="2" />
      <circle cx="12" cy="5" r="2" />
      <path d="M12 7v4" />
      <line x1="8" y1="16" x2="8" y2="16" strokeWidth="3" />
      <line x1="16" y1="16" x2="16" y2="16" strokeWidth="3" />
      {/* Visor Glow */}
      <path d="M7 14h10" strokeOpacity="0.5" strokeWidth="4" className="blur-[1px]" />
    </svg>
  )}
</motion.button>

      {/* --- CHAT WINDOW --- */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 w-[90vw] md:w-96 h-[550px] bg-[#050505] border-2 border-green-500 rounded-tl-3xl rounded-br-3xl flex flex-col z-9999 overflow-hidden shadow-[0_0_30px_rgba(34,197,94,0.2)]"
          >
            {/* Header */}
            <div className="p-4 border-b border-green-900 bg-green-500/10 flex items-center gap-2">
              <Cpu size={18} className="text-green-400 animate-pulse" />
              <span className="text-green-400 font-mono text-sm tracking-widest uppercase">
                Hrishikesh.exe_v2.5
              </span>
            </div>

            {/* Messages Area */}
            <div 
              ref={scrollRef}
              className="flex-1 p-4 overflow-y-auto space-y-4 scrollbar-thin scrollbar-thumb-green-900"
            >
              {messages.length === 0 && (
                <p className="text-green-800 font-mono text-xs italic">
                  {">"} system initialized... awaiting input_
                </p>
              )}
              {messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] px-3 py-2 font-mono text-xs border ${
                      m.role === "user"
                        ? "bg-green-500/20 border-green-500 text-green-100 rounded-tl-xl rounded-br-xl"
                        : "bg-black border-green-900 text-green-400 rounded-tr-xl rounded-bl-xl shadow-[0_0_5px_rgba(34,197,94,0.1)]"
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex justify-start">
                  <div className="bg-black border border-green-900 p-2 rounded-tr-xl rounded-bl-xl">
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 bg-green-500 animate-bounce" />
                      <div className="w-1.5 h-1.5 bg-green-500 animate-bounce [animation-delay:0.2s]" />
                      <div className="w-1.5 h-1.5 bg-green-500 animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-3 border-t border-green-900 bg-black/50">
              <div className="flex items-center gap-2 bg-green-900/10 border border-green-800 rounded-full px-4 py-1 focus-within:border-green-500 transition-colors">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Execute command..."
                  className="flex-1 bg-transparent text-green-400 py-2 outline-none font-mono text-xs placeholder:text-green-900"
                  onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                />
                <button
                  onClick={sendMessage}
                  className="text-green-500 hover:text-green-300 transition-transform active:scale-90"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}