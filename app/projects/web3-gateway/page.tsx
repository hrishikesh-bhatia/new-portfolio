import MatrixBackground from "@/app/components/MatrixBackground";

export default function Web3Gateway() {
  return (
    <main className="relative min-h-screen bg-black text-white py-10 overflow-hidden">
      <MatrixBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <h1 className="text-5xl font-bold text-green-400 mb-4">
          Web3 Payment Gateway
        </h1>

        <p className="text-gray-300 max-w-2xl mb-6">
          A blockchain-powered payment gateway that allows SaaS companies,
          freelancers, and global businesses to accept instant, low-fee,
          stablecoin-based payments from anywhere in the world.
        </p>

        <div className="mb-12">
          <span className="inline-block px-4 py-2 bg-yellow-400 text-black font-bold rounded">
            🚧 Work in Progress
          </span>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-green-400 mb-6">
            🧠 Vision
          </h2>

          <p className="text-gray-300 max-w-3xl">
            Traditional payment gateways are slow, expensive, and often
            unavailable across borders. This project aims to replace them with
            a Web3-based system powered by stablecoins like USDT and USDC,
            enabling instant global payments with near-zero fees.
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-green-400 mb-6">
            🧩 Planned Architecture
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="border border-green-500 p-6 rounded-lg h-full">
              <p className="text-gray-300">
                <b>Frontend:</b> Merchant dashboard for generating invoices,
                tracking payments, and managing wallets.
              </p>
            </div>

            <div className="border border-green-500 p-6 rounded-lg h-full">
              <p className="text-gray-300">
                <b>Smart Contracts:</b> Solidity contracts handling escrow,
                confirmations, and settlement.
              </p>
            </div>

            <div className="border border-green-500 p-6 rounded-lg h-full">
              <p className="text-gray-300">
                <b>Blockchain Layer:</b> USDT / USDC on low-fee chains like
                Polygon or Arbitrum.
              </p>
            </div>

            <div className="border border-green-500 p-6 rounded-lg h-full">
              <p className="text-gray-300">
                <b>Backend:</b> Node.js + Web3 listeners to verify payments and
                update merchant dashboards in real time.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-green-400 mb-6">
            🏗️ What’s being built right now
          </h2>

          <ul className="text-gray-300 space-y-3 max-w-3xl">
            <li>• Smart contract design & payment flow</li>
            <li>• Wallet connection & transaction verification</li>
            <li>• Merchant dashboard UI</li>
            <li>• Stablecoin settlement pipeline</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-green-400 mb-6">
            🛣️ Roadmap
          </h2>

          <ul className="text-gray-300 space-y-3 max-w-3xl">
            <li>• MVP: Accept USDT payments via wallet & invoice</li>
            <li>• Phase 2: Auto-confirmations & webhooks</li>
            <li>• Phase 3: SaaS plugin & API</li>
            <li>• Phase 4: Multi-chain support</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
