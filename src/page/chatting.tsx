import { useState, useRef } from "react";
import Header from "../component/layout/header";
import Container from "../component/layout/container";
import Button from "../component/form/button";

interface ChatMessage {
  id: number;
  content: string;
  day: string;
  time: string;
  isMyMessage: boolean;
}

function Chatting() {
  const [chatValue, setChatValue] = useState<string>("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const chatBodyRef = useRef<HTMLDivElement>(null);

  const sendMessage = () => {
    if (chatValue.trim() === "") return;

    const today = new Date();
    const day = today.toISOString().split("T")[0];
    const time = today
      .toTimeString()
      .split(" ")[0]
      .split(":")
      .slice(0, 2)
      .join(":");

    const newMessage: ChatMessage = {
      id: Date.now(),
      content: chatValue,
      day,
      time,
      isMyMessage: true,
    };

    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setChatValue("");

    setTimeout(() => {
      if (chatBodyRef.current) {
        chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
      }
    }, 0);
  };

  const handleFormChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setChatValue(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter") {
      if (event.ctrlKey) {
        // Ctrl + Enter: 줄바꿈 추가
        const textarea = event.target as HTMLTextAreaElement;
        const { selectionStart, selectionEnd } = textarea;
        const newValue =
          chatValue.slice(0, selectionStart) +
          "\n" +
          chatValue.slice(selectionEnd);
        setChatValue(newValue);

        // 커서를 줄바꿈 이후로 이동
        setTimeout(() => {
          textarea.selectionStart = textarea.selectionEnd = selectionStart + 1;
        }, 0);

        event.preventDefault(); // 기본 Enter 동작 방지
      } else {
        // Enter: 댓글 등록
        event.preventDefault(); // 기본 Enter 동작 방지
        sendMessage();
      }
      // sendMessage();
    }
  };

  return (
    <>
      <Header />
      <Container>
        <div className="contents_wrap">
          <div className="area">
            <div className="chat_wrap">
              <div className="chat_body" ref={chatBodyRef}>
                <div className="day_line mg_reset">
                  <span>2024.09.28</span>
                </div>
                <div className="chat_item">
                  <span className="chat_balloon">상대방의 메시지 입니다.</span>
                  <span className="chat_date">16:24:38</span>
                </div>
                {Object.entries(
                  messages.reduce((acc, message) => {
                    if (!acc[message.day]) acc[message.day] = [];
                    acc[message.day].push(message);
                    return acc;
                  }, {} as Record<string, ChatMessage[]>)
                ).map(([day, dayMessages]) => (
                  <div key={day}>
                    <div className="day_line">
                      <span>{day}</span>
                    </div>
                    {dayMessages.map((message) => (
                      <div
                        key={message.id}
                        className={`chat_item ${
                          message.isMyMessage ? "my_chat" : ""
                        }`}
                      >
                        <span className="chat_date">{message.time}</span>
                        <span className="chat_balloon">{message.content}</span>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <div className="chat_foot">
                <textarea
                  id="chat_input"
                  value={chatValue}
                  onChange={handleFormChange}
                  onKeyDown={handleKeyDown}
                  placeholder="내용을 입력해주세요."
                />
                <Button
                  className="push_btn"
                  title="전송"
                  size="h_28"
                  bg_color="btn-bg-bk1"
                  bd_color="btn-bd-bk1"
                  color="btn-text-wh1"
                  onClick={sendMessage}
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Chatting;
