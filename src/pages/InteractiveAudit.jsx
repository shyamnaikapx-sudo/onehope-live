import { useState } from "react";

function InteractiveAudit() {

  const [messages, setMessages] = useState([
    {
      role: "ai",
      text:
        "Welcome to the GMP Audit Simulation.\n\nI will conduct a short audit simulation similar to a real inspection.\n\nPlease respond based on your current practices.\n\nLet’s begin.\n\nCan you describe how your Batch Manufacturing Records (BMR) are maintained and reviewed in your facility?"
    }
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
const [showLeadForm, setShowLeadForm] = useState(false);

const [leadData, setLeadData] = useState({
  name: "",
  company: "",
  email: "",
  whatsapp: "",
  country: "",
});
const sendMessage = async () => {

  if (!input.trim()) return;

  const userMessage = {
    role: "user",
    text: input,
  };

  const newMessages = [
    ...messages,
    userMessage,
  ];

  setMessages(newMessages);

  setInput("");

  setLoading(true);

  try {

    const response = await fetch(
      "const response = await fetch(
  "https://onehope-live.onrender.com/api/interactive-audit",",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          messages: newMessages,
        }),
      }
    );

    const data = await response.json();

    console.log("AI RESPONSE:", data);

    if (data.reply) {
if (
  data.reply.includes("FINAL CONCLUSION") ||
  data.reply.includes("recommend professional audit support")
) {

  setShowLeadForm(true);

}
      const aiMessage = {
        role: "ai",
        text: data.reply,
      };

      setMessages([
        ...newMessages,
        aiMessage,
      ]);

    }

  } catch (error) {

    console.error(error);

  }

  setLoading(false);
};

  return (

    <div className="min-h-screen bg-[#f4f7fb] py-20 px-6">

      <div className="max-w-5xl mx-auto">

        <div className="text-center">

          <h1 className="text-5xl font-extrabold text-blue-950">

            Interactive AI Audit Simulator

          </h1>

          <p className="mt-6 text-xl text-gray-600">

            Experience realistic GMP audit conversations powered by AI.

          </p>

        </div>

        <div className="bg-white rounded-[35px] shadow-xl p-8 mt-14">

          <div className="space-y-6 max-h-[600px] overflow-y-auto">

            {messages.map((msg, index) => (

              <div
                key={index}
                className={`p-6 rounded-3xl leading-8 whitespace-pre-line ${
                  msg.role === "ai"
                    ? "bg-blue-50 text-blue-950"
                    : "bg-green-100 text-gray-800 ml-16"
                }`}
              >

                {msg.text}

              </div>

            ))}

            {loading && (

              <div className="bg-blue-50 text-blue-950 p-6 rounded-3xl">

                AI Auditor is analyzing your response...

              </div>

            )}

          </div>

          <div className="mt-8 flex gap-4">

            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your response..."
              className="flex-1 border border-gray-300 rounded-2xl p-5 h-32"
            />

            <button
              onClick={sendMessage}
              className="bg-green-500 hover:bg-green-600 text-white px-8 rounded-2xl font-bold"
            >

              Send

            </button>

          </div>

        </div>
{showLeadForm && (

  <div className="bg-white rounded-[35px] shadow-xl p-10 mt-16">

    <div className="text-center">

      <h2 className="text-2xl md:text-3xl font-extrabold text-blue-950">

        Get Your AI Audit Assessment Summary

      </h2>

      <p className="mt-5 text-lg text-gray-600">

        Receive your audit readiness observations,
        compliance gaps and recommendations.

      </p>

    </div>

    <div className="grid md:grid-cols-2 gap-6 mt-10">

      <input
        type="text"
        placeholder="Name"
        value={leadData.name}
        onChange={(e) =>
          setLeadData({
            ...leadData,
            name: e.target.value,
          })
        }
        className="border border-gray-300 rounded-2xl p-5"
      />

      <input
        type="text"
        placeholder="Company"
        value={leadData.company}
        onChange={(e) =>
          setLeadData({
            ...leadData,
            company: e.target.value,
          })
        }
        className="border border-gray-300 rounded-2xl p-5"
      />

      <input
        type="email"
        placeholder="Email"
        value={leadData.email}
        onChange={(e) =>
          setLeadData({
            ...leadData,
            email: e.target.value,
          })
        }
        className="border border-gray-300 rounded-2xl p-5"
      />

      <input
        type="text"
        placeholder="WhatsApp"
        value={leadData.whatsapp}
        onChange={(e) =>
          setLeadData({
            ...leadData,
            whatsapp: e.target.value,
          })
        }
        className="border border-gray-300 rounded-2xl p-5"
      />

      <input
        type="text"
        placeholder="Country"
        value={leadData.country}
        onChange={(e) =>
          setLeadData({
            ...leadData,
            country: e.target.value,
          })
        }
        className="border border-gray-300 rounded-2xl p-5 md:col-span-2"
      />

    </div>

    <div className="text-center mt-10">

      <button className="bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-2xl font-bold text-base">

        Generate My Audit Report

      </button>

    </div>

  </div>

)}
        {/* FINAL CTA */}

        <div className="bg-blue-950 rounded-[35px] text-white p-10 mt-16 text-center">

          <h2 className="text-4xl font-bold">

            Need Complete Audit Support?

          </h2>

          <p className="mt-6 text-lg text-gray-300 leading-8">

            This simulation is only a short demonstration.
            A full GMP audit requires detailed review of
            documentation, CAPA systems, validation,
            training and facility compliance.

          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-10">

            <a
              href="http://wa.me/919740802199"
              target="_blank"
            >

              <button className="bg-green-500 hover:bg-green-600 px-8 py-4 rounded-2xl font-bold text-lg">

                Talk to GMP Expert

              </button>

            </a>

            <a href="/contact">

              <button className="bg-white/10 border border-white/20 px-8 py-4 rounded-2xl font-bold text-lg">

                Contact One Hope Solution

              </button>

            </a>

          </div>

        </div>

      </div>

    </div>

  );
}

export default InteractiveAudit;