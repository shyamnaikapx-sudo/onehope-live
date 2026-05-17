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
        "http://localhost:5000/api/ask-ai",
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
        "Factory Setup (Pharma, API, Food)",
        "HVAC & Validation",
      ],
      promise:
        "We design and build your complete GMP-compliant facility from scratch.",
      icon: <FaIndustry />,
    },

    {
      no: "02",
      title: "AUDIT & COMPLIANCE",
      services: [
        "GMP Audits",
        "US FDA/ISO Gap Analysis",
        "Third-Party Audits",
      ],
      promise:
        "We inspect your facility through an auditor’s lens before inspection.",
      icon: <FaClipboardCheck />,
    },

    {
      no: "03",
      title: "QMS & ISO CERTIFICATION",
      services: [
        "QMS Setup",
        "ISO 9001, 22000, FSSC, BRCGS",
        "Documentation",
      ],
      promise:
        "We build your quality systems from the ground up for certification.",
      icon: <FaCertificate />,
    },

    {
      no: "04",
      title: "REGULATORY & DOSSIER",
      services: [
        "CTD/eCTD",
        "Documentation",
        "Regulatory Submissions",
      ],
      promise:
        "We prepare every document required for approvals and submissions.",
      icon: <FaClipboardCheck />,
    },

    {
      no: "05",
      title: "VALIDATION & QUALIFICATION",
      services: [
        "Cleanroom Validation",
        "Equipment Qualification",
        "HVAC Testing",
      ],
      promise:
        "We test and certify your systems according to GMP standards.",
      icon: <FaFlask />,
    },

    {
      no: "06",
      title: "TRAINING & SUPPORT",
      services: [
        "GMP & SOP Training",
        "Staff Readiness",
        "Compliance Coaching",
      ],
      promise:
        "We empower your team to confidently handle audits and procedures.",
      icon: <FaClipboardCheck />,
    },

    {
      no: "07",
      title: "ECOMMERCE SERVICES",
      services: [
        "Product Listing",
        "A+ Content Creation",
        "Product Content Writing",
        "Ecommerce Marketing",
      ],
      promise:
        "We help build a strong online presence and grow product visibility.",
      icon: <FaIndustry />,
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

          <div className="flex gap-3">

            <button className="bg-blue-900 hover:bg-blue-800 text-white px-5 py-3 rounded-xl font-bold">
              Book FREE Consultation
            </button>

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

        </div>

      </header>

      {/* HERO */}

      <section
  className="relative text-white min-h-screen flex items-center"
  style={{
    backgroundImage: `linear-gradient(rgba(2,16,63,0.70), rgba(2,16,63,0.75)), url(${heroImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
  }}

      >

       <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 px-6 py-32 items-center relative z-10">

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >

            <h2 className="text-green-400 text-2xl font-bold">
              YOUR PARTNER IN
            </h2>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mt-5">
              GMP COMPLIANCE
              <br />
              & REGULATORY
              <br />
              EXCELLENCE
            </h1>

            <p className="mt-8 text-xl text-gray-200 leading-9">
              End-to-End Solutions for Pharma, API, Nutraceutical &
              Healthcare Industries.
            </p>

            <p className="mt-8 text-lg text-gray-200 leading-8">
              ✅ Serving Pharma & Food Industry Clients
              <br />
              💰 Affordable Solutions
              <br />
👨‍🔬 Team having expertise with 20+ years of industry experience
            </p>

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
                  AI GMP ASSISTANT
                </h2>

                <p className="text-gray-200 mt-2 text-sm leading-7">
                  Get instant answers to all your Pharma & Food compliance questions — powered by AI + backed by experts.
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

                <div className="mt-6 border-t border-white/20 pt-5">

                  <p className="font-bold text-green-300">
                    ✅ Need expert help? Book FREE consultation
                  </p>

                </div>

              </div>

            )}

          </motion.div>

        </div>

      </section>
      {/* TRUST LINE */}

<section className="py-12 bg-white">

  <div className="max-w-6xl mx-auto px-4 text-center">

    <h2 className="text-3xl font-extrabold text-blue-950">
      Serving Pharma & Food Industry Clients
    </h2>

    <div className="grid md:grid-cols-3 gap-8 mt-10">

      {[
        "GMP, ISO & FSSAI Expertise",
        "Practical & Cost-Effective Solutions",
        "End-to-End Compliance Support",
      ].map((item, index) => (

        <div
          key={index}
          className="bg-[#f4f7fb] rounded-2xl py-8 shadow-lg font-bold text-blue-950"
        >

          ✔ {item}

        </div>

      ))}

    </div>

  </div>

</section>

{/* SERVICES */}

<section id="services" className="py-20 bg-[#f4f7fb]">

  <div className="max-w-7xl mx-auto px-4">

    <div className="text-center mb-14">

      <h1 className="text-5xl font-extrabold text-blue-950">
        OUR SERVICES
      </h1>

      <p className="text-xl text-gray-600 mt-4">
        Your Needs. Our Expertise. Your Compliance.
      </p>

    </div>

    <div className="grid lg:grid-cols-2 gap-6">

      {services.map((item, index) => (

        <div
          key={index}
          className="bg-white rounded-[30px] shadow-lg p-7 border border-gray-100 hover:shadow-2xl transition-all duration-300"
        >

          <div className="flex items-start gap-5">

            <div className="bg-blue-900 text-white w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold shrink-0">
              {item.no}
            </div>

            <div className="flex-1">

              <h2 className="text-2xl font-extrabold text-blue-950">
                {item.title}
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mt-5">

                <div>

                  <h3 className="text-green-700 font-bold mb-3">
                    KEY SERVICES
                  </h3>

                  <ul className="space-y-2 text-gray-700 leading-7">

                    {item.services.map((service, i) => (
                      <li key={i}>
                        • {service}
                      </li>
                    ))}

                  </ul>

                </div>

                <div>

                  <h3 className="text-blue-900 font-bold mb-3">
                    OUR PROMISE TO YOU
                  </h3>

                  <p className="text-gray-600 leading-7">
                    {item.promise}
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      ))}

    </div>

    {/* BUTTONS */}

    <div className="flex flex-wrap justify-center gap-5 mt-14">

      <button className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-2xl font-bold text-lg">
        Book FREE Consultation
      </button>

      <a
        href="https://wa.me/919740802199?text=Hi,%20I%20need%20help%20with%20GMP/ISO%20compliance."
        target="_blank"
      >

        <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-bold text-lg">
          Talk to Expert on WhatsApp
        </button>

      </a>

    </div>

  </div>

</section>

{/* HOW IT WORKS */}

<section className="py-20 bg-white">

  <div className="max-w-6xl mx-auto px-4 text-center">

    <h1 className="text-5xl font-extrabold text-blue-950">
      HOW IT WORKS
    </h1>

    <div className="grid md:grid-cols-3 gap-8 mt-14">

      {[
        {
          no: "1",
          title: "Ask AI or Contact Us",
          text: "Get instant answers or connect with our experts",
        },

        {
          no: "2",
          title: "Get Free Consultation",
          text: "We understand requirements & identify gaps",
        },

        {
          no: "3",
          title: "Become Fully Compliant",
          text: "Achieve GMP / ISO / FSSAI compliance smoothly",
        },

      ].map((step, index) => (

        <div
          key={index}
          className="bg-[#f4f7fb] rounded-[30px] p-10 shadow-lg"
        >

          <div className="bg-blue-900 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto">
            {step.no}
          </div>

          <h2 className="text-2xl font-bold text-blue-950 mt-6">
            {step.title}
          </h2>

          <p className="text-gray-600 mt-4 leading-7">
            {step.text}
          </p>

        </div>

      ))}

    </div>

  </div>

</section>

{/* INDUSTRIES */}

<section className="py-20 bg-[#f4f7fb]">

  <div className="max-w-6xl mx-auto px-4 text-center">

    <h1 className="text-5xl font-extrabold text-blue-950">
      INDUSTRIES WE SERVE
    </h1>

    <p className="text-gray-600 text-xl mt-4">
      Affordable solutions
    </p>

    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-12">

      {[
        "Pharma",
        "API",
        "Food",
        "Nutraceuticals",
        "Healthcare",
      ].map((industry, index) => (

        <div
          key={index}
          className="bg-white rounded-2xl py-8 shadow-lg text-blue-950 font-bold text-xl"
        >

          {industry}

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

  <div className="bg-green-500 hover:bg-green-600 px-6 py-4 rounded-full flex items-center gap-3 shadow-2xl hover:scale-105 transition-all duration-300">

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

  <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10 px-6">

    <div>

      <h2 className="text-3xl font-bold">
        ONE HOPE SOLUTION
      </h2>

      <p className="mt-5 text-gray-300 leading-8">
        Integrated Cleanroom, GMP & Regulatory Consultancy Services.
      </p>

    </div>

    <div>

      <h2 className="text-2xl font-bold">
        QUICK LINKS
      </h2>

      <div className="mt-5 space-y-3 text-gray-300">

        <p>Home</p>
        <p>Services</p>
        <p>AI Assistant</p>
        <p>Contact</p>

      </div>

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