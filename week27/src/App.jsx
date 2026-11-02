import { useState } from "react";
import axios from "axios";
import "./App.css";

// 모든 요청/응답이 이 인터셉터를 거치므로 개발자 도구 콘솔에서 흐름을 확인할 수 있습니다.
// URL에 API Key가 포함되어 있으므로 URL은 출력하지 않습니다.
axios.interceptors.request.use((config) => {
  console.log("REQUEST:", {
    method: config.method?.toUpperCase(),
    headers: config.headers,
    body: config.data,
  });
  return config;
});

axios.interceptors.response.use(
  (response) => {
    console.log("RESPONSE:", {
      status: response.status,
      body: response.data,
    });
    return response;
  },
  (error) => {
    // 4xx/5xx 응답도 여기로 들어옵니다.
    console.log("RESPONSE (ERROR):", {
      status: error.response?.status,
      body: error.response?.data,
    });
    return Promise.reject(error);
  }
);

function App() {
  const [input, setInput] = useState("");

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "안녕하세요! 무엇이든 물어보세요 👋",
    },
  ]);

  const [loading, setLoading] = useState(false);

  const sendMessage = async () => { // 비동기 함수 선언
    if (!input.trim() || loading) return;

    const userMessage = input.trim();

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: userMessage,
      },
    ]);

    setInput("");
    setLoading(true);

    try {
      // API Key는 .env 파일의 VITE_GEMINI_API_KEY에 저장합니다.
      const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
      const model = "gemini-3.6-flash";

      if (!apiKey) {
        throw new Error(
          "API Key를 찾을 수 없습니다. .env 파일을 확인해주세요."
        );
      }

      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
      const requestBody = {
        contents: [
          {
            role: "user",
            parts: [{ text: userMessage }],
          },
        ],
      };

      // axios는 객체를 자동으로 JSON 변환하고, 응답도 response.data에 파싱해서 넣어줍니다.
      const response = await axios.post(url, requestBody, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = response.data;

      const aiText =
        data?.candidates?.[0]?.content?.parts
          ?.map((part) => part.text)
          .filter(Boolean)
          .join("\n") || "API 응답이 없습니다";

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: aiText,
        },
      ]);

    } catch (error) {
      console.error("Gemini API Error:", error);

      // axios는 4xx/5xx 응답이면 자동으로 에러를 던지고, 서버 응답은 error.response에 담깁니다.
      const errorMessage =
        error.response?.data?.error?.message ||
        (error.response
          ? `Gemini API 요청에 실패했습니다. (${error.response.status})`
          : error.message);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: `오류가 발생했습니다.\n${errorMessage}`,
        },
      ]);

    } finally {
      setLoading(false);
    }
  };


  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="app">
      <div className="chat-container">

        <header className="chat-header">
          <div>
            <h1>Likelion CAU Chatbot 🦁</h1>
            <p>week27 AI API 실습</p>
          </div>

          <div className="status">
            <span />
            Online
          </div>
        </header>

        <main className="chat-body">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message-row ${
                message.role === "user"
                  ? "user-row"
                  : "assistant-row"
              }`}
            >
              {message.role === "assistant" && (
                <div className="avatar">
                  멋사AI
                </div>
              )}

              <div
                className={`message ${
                  message.role === "user"
                    ? "user-message"
                    : "assistant-message"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}

          {loading && (
            <div className="message-row assistant-row">
              <div className="avatar">
                멋사AI
              </div>

              <div className="message assistant-message loading-message">
                <span />
                <span />
                <span />
              </div>
            </div>
          )}
        </main>

        <div className="chat-input-area">
          <textarea
            value={input}
            onChange={(e) =>
              setInput(e.target.value)
            }
            onKeyDown={handleKeyDown}
            placeholder="메시지를 입력하세요..."
            rows={1}
          />

          <button
            onClick={sendMessage}
            disabled={!input.trim() || loading}
          >
            {loading ? "전송 중..." : "보내기"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;