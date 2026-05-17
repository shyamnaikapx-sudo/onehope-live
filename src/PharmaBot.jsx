import { useState } from "react";

export default function PharmaBot() {
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
          }),
        }
      );

      const data = await response.json();

      setAnswer(data.answer);
    } catch (error) {
      console.log(error);

      setAnswer("AI service temporarily unavailable.");
    }

    setLoading(false);
  };

  return (
    <section
      id="ai"
      style={{
        padding: "80px 20px",
        background: "#f8fafc",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          background: "white",
          borderRadius: "30px",
          padding: "50px",
          boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
        }}
      >
        <h2
          style={{
            fontSize: "42px",
            fontWeight: "800",
            color: "#0f172a",
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          AI Pharma Compliance Assistant
        </h2>

        <p
          style={{
            textAlign: "center",
            color: "#475569",
            fontSize: "18px",
            marginBottom: "40px",
          }}
        >
          Get instant answers to all your Pharma & Food compliance
          questions — powered by AI + backed by experts.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: "20px",
            marginBottom: "20px",
          }}
        >
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={styles.input}
          />

          <input
            type="text"
            placeholder="Company Name"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            style={styles.input}
          />

          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={styles.input}
          />
        </div>

        <textarea
          placeholder="Ask your GMP, ISO, FSSAI or Regulatory question..."
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          style={styles.textarea}
        />

        <div
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <button onClick={askAI} style={styles.button}>
            {loading ? "Thinking..." : "Ask AI Assistant"}
          </button>
        </div>

        <div
          style={{
            marginTop: "25px",
            color: "#334155",
            lineHeight: "32px",
            fontSize: "16px",
          }}
        >
          <strong>Try asking:</strong>

          <ul
            style={{
              marginTop: "10px",
              paddingLeft: "20px",
            }}
          >
            <li>How to get GMP certification?</li>
            <li>FSSAI license process?</li>
            <li>ISO 22000 requirements?</li>
          </ul>
        </div>

        {answer && (
          <div style={styles.answerBox}>
            <h3
              style={{
                color: "#0f172a",
                marginBottom: "15px",
              }}
            >
              AI Response
            </h3>

            <div style={styles.answer}>
              {answer}
            </div>

            <div
              style={{
                marginTop: "30px",
                padding: "20px",
                background: "#ecfeff",
                borderRadius: "15px",
              }}
            >
              <p
                style={{
                  marginBottom: "15px",
                  fontWeight: "600",
                  color: "#0f172a",
                }}
              >
                ✅ Need expert help? Book FREE consultation
              </p>

              <a
                href="https://wa.me/919740802199?text=Hi,%20I%20need%20help%20with%20GMP/ISO%20compliance."
                target="_blank"
                rel="noreferrer"
                style={{
                  background: "#16a34a",
                  color: "white",
                  padding: "12px 22px",
                  borderRadius: "10px",
                  textDecoration: "none",
                  fontWeight: "700",
                }}
              >
                Book Consultation
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

const styles = {
  input: {
    width: "100%",
    padding: "16px",
    borderRadius: "14px",
    border: "1px solid #cbd5e1",
    fontSize: "16px",
    outline: "none",
  },

  textarea: {
    width: "100%",
    height: "140px",
    padding: "20px",
    borderRadius: "16px",
    border: "1px solid #cbd5e1",
    marginTop: "20px",
    fontSize: "16px",
    outline: "none",
  },

  button: {
    marginTop: "25px",
    background: "linear-gradient(135deg,#0f172a,#2563eb)",
    color: "white",
    border: "none",
    padding: "16px 35px",
    borderRadius: "14px",
    fontSize: "18px",
    fontWeight: "700",
    cursor: "pointer",
  },

  answerBox: {
    marginTop: "40px",
    background: "#f8fafc",
    borderRadius: "20px",
    padding: "30px",
    border: "1px solid #e2e8f0",
  },

  answer: {
    lineHeight: "32px",
    whiteSpace: "pre-wrap",
    color: "#334155",
    fontSize: "17px",
  },
};