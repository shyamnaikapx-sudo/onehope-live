import logo from "../assets/logo.png";
import heroImage from "../assets/hero-pharma.jpg";

import { motion } from "framer-motion";
import { useState } from "react";

function HomePage() {

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const askAI = async () => {

    setLoading(true);

    try {

      const response = await fetch(
        "https://onehope-live.onrender.com/api/ask-ai",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            question,
            name,
            company,
            email,
          }),
        }
      );

      const data = await response.json();

      setAnswer(data.answer);

    } catch (error) {

      setAnswer("AI service temporarily unavailable.");

    }

    setLoading(false);
  };

  return (

    <div className="bg-[#f4f7fb] overflow-hidden">

      {/* HEADER */}

      <header className="bg-white shadow-md sticky top-0 z-50">

        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <div className="flex items-center gap-4">

            <img
              src={logo}
              alt="logo"
              className="w-16"
            />

            <div>

              <h1 className="text-3xl font-extrabold text-blue-950">
                ONE HOPE
              </h1>

              <p className="text-gray-600">
                Solution
              </p>

            </div>

          </div>

          <div className="hidden lg:flex gap-8 font-semibold text-blue-950">

            <a href="/">HOME</a>

            <a href="#services">SERVICES</a>
<a
  href="/interactive-ai-audit"
  className="hover:text-green-400 transition"
>
  INTERACTIVE AI AUDIT
</a>
            <a href="/ai-audit-simulator">
              AUDIT SIMULATOR
            </a>

            <a href="#ai">AI ASSISTANT</a>

            <a href="#contact">CONTACT</a>

          </div>

        </div>

      </header>

{/* HERO */}

<section
  className="relative text-white min-h-screen flex items-center"
  style={{
    backgroundImage: `linear-gradient(rgba(2,16,63,0.82), rgba(2,16,63,0.86)), url(${heroImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>

  <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 px-6 py-24 items-center">

    {/* LEFT */}

    <motion.div>

      <div className="inline-block bg-green-500/20 text-green-300 px-5 py-2 rounded-full text-sm font-semibold">

        AI-Powered Compliance Platform

      </div>

      <h1 className="mt-6 text-5xl md:text-6xl font-extrabold leading-tight">

        AI-Powered Global
        <br />
        Pharma Compliance
        <br />
        Platform

      </h1>

      <p className="mt-8 text-xl text-gray-200 leading-9">

        Simulate GMP audits, get instant compliance insights,
        and prepare for global regulatory success.

      </p>

      <div className="mt-8 space-y-3 text-lg text-gray-200">

        <p>
          ✅ Supporting Pharma, API, Nutraceutical & Healthcare industries
        </p>

        <p>
          👨‍🔬 Team having more than 15 years of experience in Pharma & Food industries
        </p>

      </div>

      <div className="mt-10 flex flex-wrap gap-4">

        <a href="/ai-audit-simulator">

          <button className="bg-green-500 hover:bg-green-600 px-7 py-4 rounded-2xl font-bold text-lg">

            Start AI Audit Simulation

          </button>

        </a>

        <a href="#ai">

          <button className="bg-white/10 border border-white/20 px-7 py-4 rounded-2xl font-bold text-lg">

            Ask AI Expert

          </button>

        </a>

        <a href="#contact">

          <button className="bg-white/10 border border-white/20 px-7 py-4 rounded-2xl font-bold text-lg">

            Contact Us

          </button>

        </a>

      </div>

    </motion.div>

    {/* RIGHT */}

    <motion.div
      id="ai"
      className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[35px] p-8 shadow-2xl"
    >

      <h2 className="text-3xl font-extrabold text-white">

        AI COMPLIANCE & TRAINING ASSISTANT

      </h2>

      <p className="mt-4 text-gray-200 leading-8">

        Get AI-assisted GMP guidance, interview preparation,
        audit support and Pharma compliance training backed
        by industry expertise.

      </p>

      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full mt-6 rounded-2xl bg-white/20 border border-white/20 p-4 text-white"
      />

      <input
        type="text"
        placeholder="Company Name"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        className="w-full mt-4 rounded-2xl bg-white/20 border border-white/20 p-4 text-white"
      />

      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full mt-4 rounded-2xl bg-white/20 border border-white/20 p-4 text-white"
      />

      <select
        className="w-full mt-4 rounded-2xl bg-white/20 border border-white/20 p-4 text-white"
      >

        <option className="text-black">
          GMP Guidance
        </option>

        <option className="text-black">
          GMP Interview Questions
        </option>

        <option className="text-black">
          GMP Training
        </option>

        <option className="text-black">
          QA/QC Training
        </option>

        <option className="text-black">
          Regulatory Affairs
        </option>

        <option className="text-black">
          Audit Preparation
        </option>

      </select>

      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask GMP, QA/QC, Validation, Regulatory or Interview Questions..."
        className="w-full h-40 mt-4 rounded-2xl bg-white/20 border border-white/20 p-5 text-white"
      />

      <button
        onClick={askAI}
        className="bg-green-600 hover:bg-green-700 w-full py-4 rounded-2xl text-lg font-bold mt-6 text-white"
      >

        {loading
          ? "Thinking..."
          : "ASK AI CONSULTANT"}

      </button>

      {answer && (

        <div className="bg-white/10 rounded-2xl p-7 mt-6 text-gray-100 leading-8 whitespace-pre-line">

          {answer}

        </div>

      )}

    </motion.div>

  </div>

</section>
{/* PROBLEM SOLUTION */}

<section className="py-20 bg-white">

  <div className="max-w-6xl mx-auto px-6 text-center">

    <h1 className="text-4xl font-extrabold text-blue-950">

      Pharma Compliance Is Complex

    </h1>

    <p className="mt-6 text-xl text-gray-600 leading-9">

      Manual audit preparation and regulatory compliance
      processes consume time, resources and increase
      inspection risks.

    </p>

    <div className="grid md:grid-cols-3 gap-6 mt-14">

      <div className="bg-[#f8fafc] rounded-[30px] p-8">

        <h3 className="text-red-500 text-2xl font-bold">
          ❌ Delayed Audit Preparation
        </h3>

      </div>

      <div className="bg-[#f8fafc] rounded-[30px] p-8">

        <h3 className="text-red-500 text-2xl font-bold">
          ❌ Dependency on Experts
        </h3>

      </div>

      <div className="bg-[#f8fafc] rounded-[30px] p-8">

        <h3 className="text-red-500 text-2xl font-bold">
          ❌ Risk of Non-Compliance
        </h3>

      </div>

    </div>

    <div className="mt-12 inline-block bg-green-100 text-green-700 px-8 py-4 rounded-full font-bold text-lg">

      ✅ Now Simplified with AI

    </div>

  </div>

</section>
{/* CORE FEATURES */}

<section className="py-20 bg-[#f8fafc]">

  <div className="max-w-7xl mx-auto px-6">

    <div className="text-center">

      <h1 className="text-5xl font-extrabold text-blue-950">

        AI-Powered Compliance Tools

      </h1>

    </div>

    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 mt-16">

      {[
        {
          title: "AI Expert",
          desc: "Instant pharma compliance answers",
        },

        {
          title: "AI Audit Simulator",
          desc: "Simulate real GMP audits",
        },
  {
    title: "Interactive AI Audit Simulator",
    desc:
      "Experience realistic GMP audit conversations with AI-powered compliance analysis and gap assessment.",
  },
        {
          title: "AI Training",
          desc: "Interactive GMP learning",
        },

        {
          title: "Discussion Panel",
          desc: "Industry knowledge exchange",
        },

      ].map((item, index) => (

        <div
          key={index}
          className="bg-white rounded-[30px] p-8 shadow-md"
        >

          <h2 className="text-2xl font-extrabold text-blue-950">

            {item.title}

          </h2>

          <p className="mt-5 text-gray-600 leading-8">

            {item.desc}

          </p>

        </div>

      ))}

    </div>

  </div>

</section>


      {/* AI AUDIT SIMULATOR */}

      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="bg-gradient-to-r from-blue-950 to-[#0f2f75] rounded-[40px] p-10 lg:p-14 grid lg:grid-cols-2 gap-14 items-center shadow-2xl">

            <div>

              <div className="inline-block bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm font-semibold">

                Innovative AI Compliance Tool

              </div>

              <h1 className="mt-6 text-5xl font-extrabold text-white leading-tight">

                AI Audit Simulator

              </h1>

              <p className="mt-6 text-lg text-gray-200 leading-9">

                Practice WHO GMP & USFDA inspections using AI-powered
                audit simulations with instant audit evaluation,
                CAPA recommendations and audit readiness scoring.

              </p>

            </div>

            <div className="bg-white rounded-[35px] p-8 shadow-2xl">

              <h2 className="text-3xl font-extrabold text-blue-950">

                Available Simulations

              </h2>

              <div className="mt-8 space-y-5">

                <div className="bg-[#f4f7fb] rounded-2xl p-5">

                  <h3 className="font-bold text-blue-950">
                    WHO GMP Audit
                  </h3>

                </div>

                <div className="bg-[#f4f7fb] rounded-2xl p-5">

                  <h3 className="font-bold text-blue-950">
                    USFDA Inspection
                  </h3>

                </div>

              </div>

              <a href="/ai-audit-simulator">
              <a href="/interactive-ai-audit">

  <button className="bg-white text-blue-950 hover:bg-gray-100 px-7 py-4 rounded-2xl font-bold text-lg shadow-xl">

    Interactive AI Audit Simulator

  </button>

</a>

                <button className="w-full mt-8 bg-green-500 hover:bg-green-600 py-4 rounded-2xl text-lg font-bold text-white">

                  Launch Audit Simulator

                </button>

              </a>

            </div>

          </div>

        </div>

      </section>
      <div className="bg-white rounded-[35px] shadow-xl p-10 mt-16">

  <h2 className="text-4xl font-extrabold text-blue-950 text-center">

    AI-Powered Audit Intelligence

  </h2>

  <p className="mt-8 text-lg leading-9 text-gray-700 text-center max-w-5xl mx-auto">

    AI performs gap assessment based on your responses,
    and where required, it can request supporting documents
    as objective evidence for review and validation.

  </p>

  <p className="mt-8 text-lg leading-9 text-gray-700 text-center max-w-5xl mx-auto">

    We develop customized AI audit simulators based on
    your specific audit requirements, enabling organizations
    to simulate real audit scenarios and improve compliance readiness.

  </p>

  <div className="flex flex-wrap justify-center gap-5 mt-10">

    <a href="/interactive-ai-audit">

      <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl font-bold text-lg">

        Launch Interactive AI Audit

      </button>

    </a>

    <a
      href="https://wa.me/919740802199"
      target="_blank"
    >

      <button className="bg-blue-950 hover:bg-blue-900 text-white px-8 py-4 rounded-2xl font-bold text-lg">

        Talk to AI Audit Expert

      </button>

    </a>

  </div>

</div>

      {/* SERVICES */}

      <section
        id="services"
        className="py-20 bg-[#f8fafc]"
      >

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <h1 className="text-5xl font-extrabold text-blue-950">

              Our Services

            </h1>

            <p className="mt-4 text-lg text-gray-600">

              End-to-end Pharma, GMP & Regulatory compliance solutions.

            </p>

          </div>

          <div className="space-y-6 mt-16">

            {[
              {
                no: "01",
                title: "NEW FACILITY PROJECTS",
                services: [
                  "Cleanroom Design",
                  "Factory Setup",
                  "HVAC & Validation",
                ],
                promise:
                  "Complete GMP-compliant facility setup and execution.",
              },

              {
                no: "02",
                title: "AUDIT & COMPLIANCE",
                services: [
                  "GMP Audits",
                  "Gap Analysis",
                  "Third-Party Audits",
                ],
                promise:
                  "Inspection readiness and compliance support.",
              },

              {
                no: "03",
                title: "QMS & ISO CERTIFICATION",
                services: [
                  "QMS Setup",
                  "ISO Documentation",
                  "Certification Support",
                ],
                promise:
                  "End-to-end quality system implementation.",
              },

              {
                no: "04",
                title: "REGULATORY & DOSSIER",
                services: [
                  "CTD/eCTD",
                  "Documentation",
                  "Global Submissions",
                ],
                promise:
                  "Regulatory support for approvals and exports.",
              },

            ].map((item, index) => (

              <div
                key={index}
                className="bg-white rounded-[30px] p-8 shadow-md border border-gray-100 grid lg:grid-cols-3 gap-8 items-center"
              >

                <div className="flex items-center gap-6">

                  <div className="bg-blue-950 text-white w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold">

                    {item.no}

                  </div>

                  <h2 className="text-2xl font-extrabold text-blue-950">

                    {item.title}

                  </h2>

                </div>

                <div>

                  <h3 className="text-green-700 font-bold text-lg">

                    Key Services

                  </h3>

                  <ul className="mt-4 space-y-2 text-gray-700">

                    {item.services.map((service, i) => (

                      <li key={i}>
                        • {service}
                      </li>

                    ))}

                  </ul>

                </div>

                <div>

                  <h3 className="text-blue-950 font-bold text-lg">

                    Our Promise

                  </h3>

                  <p className="mt-4 text-gray-600 leading-7">

                    {item.promise}

                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>
      <div className="bg-blue-950 text-white rounded-[35px] p-12 text-center mt-20">

  <h2 className="text-5xl font-extrabold">

    Experience Realistic AI GMP Audits

  </h2>

  <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto leading-9">

    Simulate real auditor conversations,
    identify compliance gaps and improve
    inspection readiness with AI-powered
    audit simulations.

  </p>

  <a href="/interactive-ai-audit">

    <button className="bg-green-500 hover:bg-green-600 px-10 py-5 rounded-2xl font-bold text-xl mt-10">

      Launch Interactive Audit Simulator

    </button>

  </a>

</div>
{/* GLOBAL TRUST */}

<section className="py-16 bg-white">

  <div className="max-w-6xl mx-auto px-6 text-center">

    <h1 className="text-4xl font-extrabold text-blue-950">

      Supporting Pharma Professionals Globally

    </h1>

    <div className="flex justify-center gap-10 mt-10 text-2xl font-bold text-green-700">

      <div>🌍 India</div>
      <div>🌍 USA</div>
      <div>🌍 Europe</div>

    </div>

  </div>

</section>
      {/* HOW WE WORK */}

      <section className="py-16 bg-[#f8fafc]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <h1 className="text-4xl font-extrabold text-blue-950">

              How We Work

            </h1>

          </div>

          <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-5 mt-14">

            {[
              "Discussion",
              "Gap Assessment",
              "Documentation",
              "Audit Support",
              "Ongoing Assistance",
            ].map((step, index) => (

              <div
                key={index}
                className="bg-white rounded-[24px] p-6 shadow-sm text-center"
              >

                <div className="text-4xl font-extrabold text-green-600">

                  0{index + 1}

                </div>

                <h3 className="mt-4 text-lg font-bold text-blue-950">

                  {step}

                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>
{/* FINAL CTA */}

<section className="py-20 bg-[#02103f] text-white">

  <div className="max-w-5xl mx-auto px-6 text-center">

    <h1 className="text-5xl font-extrabold leading-tight">

      Need Professional GMP &
      <br />
      Regulatory Support?

    </h1>

    <p className="mt-8 text-xl text-gray-300 leading-9">

      Get expert consultation from One Hope Solution.

    </p>

    <div className="flex flex-wrap justify-center gap-5 mt-10">

      <a
        href="https://wa.me/919740802199"
        target="_blank"
      >

        <button className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-2xl text-lg font-bold">

          Chat on WhatsApp

        </button>

      </a>

      <a href="#contact">

        <button className="bg-white/10 border border-white/20 px-8 py-4 rounded-2xl text-lg font-bold">

          Contact Now

        </button>

      </a>

    </div>

  </div>

</section>
      {/* FOOTER */}

      <footer
        id="contact"
        className="bg-[#02103f] text-white py-10"
      >

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-4 md:grid-cols-2 gap-10">

          <div>

            <h2 className="text-2xl font-extrabold">

              ONE HOPE SOLUTION

            </h2>

            <p className="mt-4 text-gray-300 leading-7 text-sm">

              GMP, Regulatory, Validation and AI-powered compliance solutions
              for Pharma, API, Food and Healthcare industries.

            </p>

          </div>

          <div>

            <h3 className="text-lg font-bold">

              SERVICES

            </h3>

            <div className="mt-4 space-y-2 text-gray-300 text-sm">

              <p>GMP Compliance</p>
              <p>Audit Support</p>
              <p>Validation</p>
              <p>Regulatory Affairs</p>

            </div>

          </div>

          <div>

            <h3 className="text-lg font-bold">

              CONTACT

            </h3>

            <div className="mt-4 space-y-2 text-gray-300 text-sm">

              <p>info@onehopesolution.com</p>
              <p>+91 9740802199</p>
              <p>www.onehopesolution.com</p>

            </div>

          </div>

          <div>

            <h3 className="text-lg font-bold">

              BUSINESS HOURS

            </h3>

            <div className="mt-4 space-y-2 text-gray-300 text-sm">

              <p>Monday - Saturday</p>
              <p>9:00 AM - 6:00 PM</p>
              <p>Online Consultation Available</p>

            </div>

          </div>

        </div>

      </footer>
<a
  href="https://wa.me/919740802199"
  target="_blank"
  className="fixed bottom-6 right-6 z-50"
>

  <div className="bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-full shadow-2xl font-bold">

    💬 WhatsApp Chat

  </div>

</a>
    </div>

  );
}

export default HomePage;