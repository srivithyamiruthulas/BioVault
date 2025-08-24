function Features() {
  const features = [
    { title: "Register Securely", desc: "Connect biometrics with encrypted templates stored on IPFS." },
    { title: "Encrypted Access", desc: "AES-based encryption keeps data safe with your org’s public keys." },
    { title: "Tamper-Proof Verification", desc: "Blockchain-style proof & audit logs guarantee trust." },
    { title: "Fast Authentication", desc: "Quick multi-factor verification ensures frictionless access." },
  ]

  return (
    <section className="py-16 text-center"
    data-aos="fade-up" data-aos-delay="200"
    >
      <h2 className="text-3xl font-bold mb-10">How It Works?</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-8">
        {features.map((f, i) => (
          <div 
            key={i}
            className="relative p-[2px] rounded-xl overflow-hidden hover:scale-105 transition transform"
          >
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-200 via-blue-900 to-black animate-border"></div>
            
            <div className="relative bg-[#162056] rounded-xl p-6">
              <h3 className="text-lg font-semibold text-blue-400">{f.title}</h3>
              <p className="text-sm text-gray-300 mt-2">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features
