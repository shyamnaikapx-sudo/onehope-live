import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});



// EXISTING AI CONSULTANT API

app.post("/api/ask-ai", async (req, res) => {

  try {

    const { question, mode } = req.body;

    let systemPrompt = "";

    if (mode === "Interview Preparation") {

      systemPrompt =
        "You are a Pharma interview trainer. Ask interview questions and evaluate answers professionally.";

    }

    else if (mode === "GMP Training") {

      systemPrompt =
        "You are a GMP training expert teaching Pharma GMP concepts step-by-step.";

    }

    else if (mode === "QA/QC Training") {

      systemPrompt =
        "You are a Pharma QA/QC trainer helping users learn SOPs, validation, deviations and documentation.";

    }

    else if (mode === "Regulatory Affairs") {

      systemPrompt =
        "You are a Regulatory Affairs trainer helping users learn dossier preparation, compliance and country regulations.";

    }

    else if (mode === "Audit Training") {

      systemPrompt =
        "You are a GMP audit trainer helping users prepare for inspections, observations and CAPA handling.";

    }

    else {

      systemPrompt =
        "You are a Pharma GMP, ISO, FSSAI and Regulatory expert consultant.";

    }

    const response =
      await client.chat.completions.create({

        model: "gpt-4o-mini",

        messages: [

          {
            role: "system",
            content: systemPrompt,
          },

          {
            role: "user",
            content: question,
          },

        ],

      });

    res.json({

      answer:
        response.choices[0].message.content,

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      answer: "AI server error",
    });

  }

});



// FINAL AUDIT REPORT API

app.post("/api/final-audit-report", async (req, res) => {
console.log("Final audit API called");
  try {

    const {
      auditType,
      answers,
    } = req.body;
console.log(auditType);
console.log(answers);
    const completion =
      await client.chat.completions.create({

        model: "gpt-4o-mini",

        messages: [

          {
            role: "system",

            content:
  `You are a senior ${auditType} auditor.

Evaluate the complete audit responses professionally.

Provide report in this exact structure:

AUDIT READINESS SCORE:
(percentage)

STRENGTHS:
(bullet points)

WEAKNESSES:
(bullet points)

CRITICAL OBSERVATIONS:
(bullet points)

SUGGESTED CAPA:
(bullet points)

FINAL CONCLUSION:
(summary)

Keep response professional, concise and enterprise-grade.`

          },

          {
            role: "user",

            content:
              JSON.stringify(answers)

          }

        ],

        temperature: 0.3,
        max_tokens: 800,

      });

    res.json({

      result:
        completion.choices[0].message.content

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      error: "Report generation failed"
    });

  }

});

app.post("/api/interactive-audit", async (req, res) => {

  try {

    const { messages } = req.body;

    const completion =
      await client.chat.completions.create({

        model: "gpt-4o-mini",

        messages: [

          {
            role: "system",

            content:
              `You are a senior GMP auditor conducting a realistic pharma GMP inspection simulation.

Ask one audit question at a time.

Analyze the user's response professionally.

If response is:
- strong → appreciate compliance
- partial → identify moderate gaps
- weak → identify critical GMP risks

Keep simulation realistic and professional.

Limit total audit conversation to 5 questions maximum.

After 5 questions:
provide:
- audit readiness observations
- key compliance gaps
- improvement recommendations

Then recommend professional audit support from One Hope Solution.`
          },

          ...messages.map((m) => ({
            role:
              m.role === "ai"
                ? "assistant"
                : "user",

            content: m.text
          }))

        ],

        temperature: 0.3,
        max_tokens: 500,

      });

    res.json({

      reply:
        completion.choices[0].message.content

    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      reply: "AI audit simulation error"
    });

  }

});

app.listen(5000, () => {

  console.log("Server running on port 5000");

});