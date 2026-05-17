import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export default async function handler(req, res) {

  try {

    const { question } = req.body;

    const response = await client.chat.completions.create({

      model: "gpt-4o-mini",

      messages: [

        {
          role: "system",
          content:
            "You are a professional GMP, ISO, FSSAI, Pharma and Food regulatory consultant for One Hope Solution.",
        },

        {
          role: "user",
          content: question,
        },

      ],

    });

    res.status(200).json({
      answer: response.choices[0].message.content,
    });

  } catch (error) {

    res.status(500).json({
      error: "AI Error",
    });

  }

}