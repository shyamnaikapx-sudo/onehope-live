import logo from "./assets/logo.png";
import heroImage from "./assets/hero-pharma.jpg";

import {
  FaWhatsapp,
  FaRobot,
  FaIndustry,
  FaClipboardCheck,
  FaCertificate,
  FaFlask,
} from "react-icons/fa";

import { motion } from "framer-motion";
import { useState } from "react";

function App() {

  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const askAI = async () => {

    if (!name || !company || !email) {
      alert("Please fill Name, Company and Email");
      return;
    }

    if (!question) {
      alert("Please enter your question");
      return;
    }

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

  const services = [

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
      icon: <FaIndustry />,
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
      icon: <FaClipboardCheck />,
    },

    {
      no: "03",
      title: "QMS & ISO CERTIFICATION",
      services: [
        "QMS Setup",
        "ISO Certifications",
        "Documentation",
      ],
      promise:
        "End-to-end quality management system implementation.",
      icon: <FaCertificate />,
    },

    {
      no: "04",
      title: "REGULATORY & DOSSIER",
      services: [
        "CTD/eCTD",
        "Documentation",
        "Submissions",
      ],
      promise:
        "Regulatory support for approvals and exports.",
      icon: <FaClipboardCheck />,
    },

    {
      no: "05",
      title: "VALIDATION & QUALIFICATION",
      services: [
        "Process Validation",
        "Equipment Qualification",
        "HVAC Testing",
      ],
      promise:
        "Validation and qualification as per GMP standards.",
      icon: <FaFlask />,
    },

    {
      no: "06",
      title: "TRAINING & SUPPORT",
      services: [
        "GMP Training",
        "Staff Readiness",
        "Compliance Coaching",
      ],
      promise:
        "Practical training and audit preparation support.",
      icon: <FaClipboardCheck />,
    },

  ];

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

            <a href="#">HOME</a>
            <a href="#services">SERVICES</a>
            <a href="#ai">AI ASSISTANT</a>
            <a href="#contact">CONTACT</a>

          </div>

          <a
            href="https://wa.me/919740802199?text=Hi,%20I%20need%20help%20with%20GMP/ISO%20compliance."
            target="_blank"
          >

            <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl font-bold flex items-center gap-2">

              <FaWhatsapp />
              WhatsApp

            </button>

          </a>

        </div>

      </header>

      {/* HERO */}

      <section
        className="relative text-white min-h-screen flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(2,16,63,0.75), rgba(2,16,63,0.80)), url(${heroImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 px-6 py-28 items-center">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">

              GMP COMPLIANCE
              <br />
              & REGULATORY
              <br />
              SOLUTIONS

            </h1>

            <p className="mt-8 text-xl text-gray-200 leading-9">

              Supporting Pharma, API, Nutraceutical and Healthcare
              companies with expert-led compliance solutions.

            </p>

            <div className="mt-10 space-y-4 text-lg">

              <p>✅ GMP & Regulatory Support</p>
              <p>✅ Audit & Validation Experts</p>
              <p>✅ 20+ Years Industry Experience</p>

            </div>

          </motion.div>

          {/* AI SECTION */}

          <motion.div
            id="ai"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-[35px] p-8 shadow-2xl"
          >

            <div className="flex items-center gap-4">

              <FaRobot className="text-5xl text-green-400" />

              <div>

                <h2 className="text-3xl font-extrabold">
                  AI COMPLIANCE ASSISTANT
                </h2>

                <p className="text-gray-200 mt-2 text-sm leading-7">
                  Get instant regulatory guidance powered by AI + industry experts.
                </p>

              </div>

            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-8">

              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-2xl bg-white/20 border border-white/20 p-4 text-white placeholder:text-gray-200 outline-none"
              />

              <input
                type="text"
                placeholder="Company Name"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full rounded-2xl bg-white/20 border border-white/20 p-4 text-white placeholder:text-gray-200 outline-none"
              />

            </div>

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-2xl bg-white/20 border border-white/20 p-4 text-white placeholder:text-gray-200 outline-none mt-4"
            />

            <textarea
              value={question}
              onChange={(e) => {
                setQuestion(e.target.value);

                if (e.target.value === "") {
                  setAnswer("");
                }
              }}
              placeholder="Ask GMP, ISO, Validation or Regulatory Question..."
              className="w-full h-36 mt-6 rounded-2xl bg-white/20 border border-white/20 p-5 text-white placeholder:text-gray-200 outline-none"
            />

            <button
              onClick={askAI}
              className="bg-green-600 hover:bg-green-700 w-full py-4 rounded-2xl text-lg font-bold mt-6 transition-all"
            >

              {loading ? "Thinking..." : "ASK AI CONSULTANT"}

            </button>

            {answer && (

              <div className="bg-white/10 rounded-2xl p-7 mt-6 text-gray-100 leading-8 whitespace-pre-line w-full max-h-[420px] overflow-y-auto">

                {answer}

              </div>

            )}

          </motion.div>

        </div>

      </section>

      {/* EXPERT SUPPORT */}

      <section className="py-20 bg-white">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-5xl font-extrabold text-blue-950">
            Expert-Led Support
          </h1>

          <p className="mt-8 text-xl leading-10 text-gray-600 max-w-4xl mx-auto">

            Our team combines 20+ years of industry experience
            with AI-powered efficiency to deliver faster and smarter
            compliance solutions.

          </p>

        </div>

      </section>

      {/* SERVICES */}

      <section id="services" className="py-20 bg-[#f8fafc]">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">

            <h1 className="text-5xl font-extrabold text-blue-950">
              Our Services
            </h1>

            <p className="mt-5 text-xl text-gray-600 max-w-3xl mx-auto leading-9">

              End-to-end Pharma, GMP, QA/QC and Regulatory support solutions.

            </p>

          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 mt-16">

            {services.map((item, index) => (

              <div
                key={index}
                className="bg-white rounded-[28px] p-7 shadow-md hover:shadow-xl transition-all"
              >

                <div className="flex items-center gap-4">

                  <div className="bg-blue-900 text-white w-14 h-14 rounded-2xl flex items-center justify-center text-xl font-bold">
                    {item.no}
                  </div>

                  <h2 className="text-xl font-extrabold text-blue-950 leading-8">
                    {item.title}
                  </h2>

                </div>

                <ul className="mt-6 space-y-2 text-gray-700 leading-7">

                  {item.services.map((service, i) => (
                    <li key={i}>
                      • {service}
                    </li>
                  ))}

                </ul>

                <p className="mt-6 text-gray-600 leading-7">
                  {item.promise}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* TESTIMONIALS */}

      <section className="py-20 bg-white">

        <div className="max-w-6xl mx-auto px-4 text-center">

          <h1 className="text-5xl font-extrabold text-blue-950">
            WHAT OUR CLIENTS SAY
          </h1>

          <div className="grid md:grid-cols-3 gap-8 mt-14">

            {[
              "One Hope Solution helped us pass GMP audit smoothly.",
              "Very professional and affordable compliance support.",
              "Best partner for ISO certification.",
            ].map((review, index) => (

              <div
                key={index}
                className="bg-[#f4f7fb] rounded-[30px] p-8 shadow-lg"
              >

                <p className="text-gray-700 leading-8 text-lg">
                  “{review}”
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* FLOATING WHATSAPP */}

      <a
        href="https://wa.me/919740802199?text=Hi,%20I%20need%20help%20with%20GMP/ISO%20compliance."
        target="_blank"
        className="fixed bottom-6 right-6 z-50"
      >

        <div className="bg-green-500 hover:bg-green-600 px-6 py-4 rounded-full flex items-center gap-3 shadow-2xl">

          <FaWhatsapp className="text-white text-3xl" />

          <span className="text-white font-bold text-lg">
            Chat on WhatsApp
          </span>

        </div>

      </a>

      {/* FOOTER */}

      <footer
        id="contact"
        className="bg-[#02103f] text-white py-14"
      >

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 px-6">

          <div>

            <h2 className="text-3xl font-bold">
              ONE HOPE SOLUTION
            </h2>

            <p className="mt-5 text-gray-300 leading-8">
              Integrated GMP & Regulatory Consultancy Services.
            </p>

          </div>

          <div>

            <h2 className="text-2xl font-bold">
              CONTACT
            </h2>

            <div className="mt-5 space-y-3 text-gray-300">

              <p>Email: info@onehopesolution.com</p>
              <p>Website: www.onehopesolution.com</p>
              <p>Call: +91 9740802199</p>

            </div>

          </div>

          <div>

            <h2 className="text-2xl font-bold">
              BUSINESS HOURS
            </h2>

            <div className="mt-5 space-y-3 text-gray-300">

              <p>Monday - Saturday</p>
              <p>9:00 AM - 6:00 PM</p>
              <p>Online Consultation Available</p>

            </div>

          </div>

        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400">

          © 2026 One Hope Solution. All Rights Reserved.

        </div>

      </footer>

    </div>
  );
}

export default App;