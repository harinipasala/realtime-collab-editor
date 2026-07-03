import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

function Editor() {
  const [text, setText] = useState("");

  useEffect(() => {
    socket.on("receive-changes", (data) => {
      setText(data);
    });

    return () => {
      socket.off("receive-changes");
    };
  }, []);

  const handleChange = (e) => {
    const value = e.target.value;

    setText(value);

    socket.emit("send-changes", value);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Real Time Collaboration Editor</h1>

      <textarea
        rows="20"
        cols="80"
        value={text}
        onChange={handleChange}
        placeholder="Start typing..."
      />
    </div>
  );
}

export default Editor;