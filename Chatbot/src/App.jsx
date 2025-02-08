import { useState } from 'react';
import { ChatInputComponent } from './components/ChatInput';
import { ChatMessageComponent } from './components/ChatMessage';
import './App.css'




function App() {
  const [chatMessages, setChatMessages] = useState(
    [
      {
        message: 'hello chatbot',
        sender: 'user',
        key: 'id1'
      },
      {
        message: 'Hello! How can I help you?',
        sender: 'robot',
        key: 'id2'
      }
    ]
  );

  return (
    <div className="chatbot">
      <ChatMessageComponent
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
      <ChatInputComponent
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
};

export default App
