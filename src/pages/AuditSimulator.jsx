import { useState } from "react";

import { auditQuestions } from "../data/auditQuestions";

export default function AuditSimulator() {

  const [auditType, setAuditType] = useState("");

  const [currentQuestionIndex, setCurrentQuestionIndex] =
    useState(0);

  const [answer, setAnswer] = useState("");
const [answers, setAnswers] = useState({});

const [finalReport, setFinalReport] = useState("");

const [loading, setLoading] = useState(false);
 const generateFinalReport = async (
  finalAnswers
) => {

    try {

      setLoading(true);

      const response = await fetch(

        "http://localhost:5000/api/final-audit-report",

        {

          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({

            auditType,

            answers: finalAnswers,

          }),

        }

      );

      const data = await response.json();

      setFinalReport(data.result);

      setLoading(false);

    } catch (error) {

      console.log(error);

      setLoading(false);

    }

  };
 
const currentQuestions =
    auditType === "WHO GMP"
      ? auditQuestions.whoGmp
      : auditType === "USFDA"
      ? auditQuestions.usfda
      : [];

  const currentQuestion =
    currentQuestions[currentQuestionIndex];

  return (

    <div className="min-h-screen bg-[#f4f7fb] py-20 px-6">

      <div className="max-w-6xl mx-auto">

        {/* HEADER */}

        <div className="text-center">

          <h1 className="text-6xl font-extrabold text-blue-950">
            AI Audit Simulator
          </h1>

          <p className="mt-8 text-xl text-gray-600 leading-9">

            Practice real GMP & FDA inspections using
            AI-powered audit simulations.

          </p>

        </div>

        {/* AUDIT SELECTION */}

        <div className="grid md:grid-cols-2 gap-10 mt-20">

          {/* WHO GMP */}

          <div
            onClick={() => {
              setAuditType("WHO GMP");
              setCurrentQuestionIndex(0);
            }}
            className={`rounded-[35px] p-10 cursor-pointer transition-all shadow-lg ${
              auditType === "WHO GMP"
                ? "bg-blue-950 text-white"
                : "bg-white"
            }`}
          >

            <h2 className="text-4xl font-extrabold">
              WHO GMP
            </h2>

            <p className="mt-6 leading-8 text-lg">

              Simulate GMP inspections with documentation,
              deviations, CAPA and validation scenarios.

            </p>

          </div>

          {/* USFDA */}

          <div
            onClick={() => {
              setAuditType("USFDA");
              setCurrentQuestionIndex(0);
            }}
            className={`rounded-[35px] p-10 cursor-pointer transition-all shadow-lg ${
              auditType === "USFDA"
                ? "bg-green-700 text-white"
                : "bg-white"
            }`}
          >

            <h2 className="text-4xl font-extrabold">
              USFDA
            </h2>

            <p className="mt-6 leading-8 text-lg">

              Practice FDA inspections focused on
              data integrity, CAPA and GMP systems.

            </p>

          </div>

        </div>

        {/* QUESTION AREA */}

        {auditType && currentQuestion && (

          <div className="mt-20 bg-white rounded-[35px] p-10 shadow-xl">

            <h2 className="text-4xl font-extrabold text-blue-950">

              Selected Audit:
              <span className="text-green-600 ml-3">
                {auditType}
              </span>

            </h2>

            <div className="mt-10">

              <div className="flex justify-between items-center mb-6">

                <div className="text-lg font-semibold text-gray-500">

                  Question {currentQuestionIndex + 1}
                  {" "}of{" "}
                  {currentQuestions.length}

                </div>

                <div className="bg-green-100 text-green-700 px-5 py-2 rounded-full font-bold">

                  {currentQuestion.category}

                </div>

              </div>

              <div className="bg-[#f4f7fb] rounded-[25px] p-8">

                <h3 className="text-2xl font-bold text-blue-950 leading-10">

                  {currentQuestion.question}

                </h3>

                <textarea
                  value={answer}
                  onChange={(e) =>
                    setAnswer(e.target.value)
                  }
                  placeholder="Type your audit response here..."
                  className="w-full mt-8 h-40 rounded-2xl border border-gray-300 p-5 outline-none text-lg"
                />

<div className="flex justify-between mt-8">

  <button
    disabled={currentQuestionIndex === 0}
    onClick={() =>
      setCurrentQuestionIndex(
        currentQuestionIndex - 1
      )
    }
    className="bg-gray-300 hover:bg-gray-400 px-8 py-4 rounded-2xl font-bold"
  >

    Previous

  </button>

  {currentQuestionIndex <
  currentQuestions.length - 1 ? (

    <button
      onClick={() => {

        setAnswers({

          ...answers,

          [currentQuestion.id]: {

            question:
              currentQuestion.question,

            answer: answer,

          },

        });

        setCurrentQuestionIndex(
          currentQuestionIndex + 1
        );

        setAnswer("");

      }}

      className="bg-blue-950 hover:bg-blue-800 text-white px-8 py-4 rounded-2xl font-bold"
    >

      Next Question

    </button>

  ) : (

    <button
      onClick={() => {

        const updatedAnswers = {

          ...answers,

          [currentQuestion.id]: {

            question:
              currentQuestion.question,

            answer: answer,

          },

        };

        setAnswers(updatedAnswers);

        generateFinalReport(updatedAnswers);

      }}

      className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-bold"
    >

      {loading ? (

  <div className="flex items-center gap-3">

    <div className="w-5 h-5 border-4 border-white border-t-transparent rounded-full animate-spin"></div>

    <span>

      AI analyzing audit responses...

    </span>

  </div>

) : (

  "Generate Final Audit Report"

)}

    </button>

  )}

</div>

              </div>

            </div>

          </div>

        )}

        {finalReport && (

          <div className="mt-20 bg-white rounded-[35px] p-10 shadow-xl">

            <h2 className="text-5xl font-extrabold text-blue-950">

              Final Audit Report

            </h2>

            <div className="mt-10 bg-[#f4f7fb] rounded-[25px] p-8 border border-gray-200">

  <div className="flex items-center justify-between mb-8">

    <h3 className="text-3xl font-extrabold text-blue-950">

      AI Audit Evaluation

    </h3>

    <div className="bg-green-100 text-green-700 px-6 py-3 rounded-full font-bold text-lg">

      Audit Report

    </div>

  </div>

  <div className="whitespace-pre-wrap text-lg leading-9 text-gray-700">

    {finalReport}

  </div>

</div>

          </div>

        )}

      </div>

    </div>

  );
}