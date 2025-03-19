import React, { useState } from 'react';
import { Heart, Send, Twitter, Facebook, Instagram } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  time: string;
  isUser: boolean;
}

function App() {
  const [email, setEmail] = useState('');
  const [messages] = useState<Message[]>([
    { id: 1, text: "Hey Emon...", time: "6:30 pm", isUser: false },
    { id: 2, text: "Yeah, Fine", time: "6:30 pm", isUser: true },
    { id: 3, text: "What about you?", time: "6:30 pm", isUser: true },
    { id: 4, text: "Hey i wanted to know that about your experience on ui/ux part.", time: "6:33 pm", isUser: false },
    { id: 5, text: "Yes, I have experience of 3+ year on ui/ux", time: "6:33 pm", isUser: true },
  ]);
  const [newMessage, setNewMessage] = useState('');

  return (
    <div className="min-h-screen bg-gray-950 bg-[url('https://www.jsmastery.pro/assets/dev-accelerator/images/course-hero-grid.webp')] text-white p-8 relative overflow-hidden">
            {/* <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none"></div> */}
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-gray-800/50 rounded-full p-2 mb-6">
            <Heart className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-6xl font-bold mb-4">Your Personal<br />AI Advisor</h1>
          <p className="text-gray-400 text-lg mb-8">
            These are just a few of the many attractions Paris has to offer. Let me know if<br />
            you'd like more information or details on anything specific!
          </p>
          
          {/* Email signup */}
          <div className="flex justify-center gap-4 mb-16">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-800/50 text-white px-6 py-3 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-pink-200/20"
            />
            <button className="bg-pink-200/20 hover:bg-pink-200/30 text-white px-6 py-3 rounded-lg transition-colors duration-200">
              Join Beta
            </button>
          </div>
        </div>

        {/* Chat Interface */}
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 mb-8">
          <div className="space-y-6 mb-6">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex items-start gap-3 max-w-[80%] ${message.isUser ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex-shrink-0 ${message.isUser ? 'bg-pink-200/20' : 'bg-purple-200/20'}`}>
                    {message.isUser && <div className="w-full h-full rounded-full bg-purple-500/20 overflow-hidden"><img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></div>}
                    {!message.isUser && <div className="w-full h-full rounded-full bg-purple-500/20 overflow-hidden"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdjrl1eRvzj0Flt2tDvYPAY6XNUiIENnlFJgeuWu6_HhAsFHADBUGjGPzwC58P3uiuB1E&usqp=CAU" alt="" /></div>}
                  </div>
                  <div>
                    <div className={`rounded-2xl px-4 py-2 ${message.isUser ? 'bg-pink-200/20' : 'bg-gray-800/50'}`}>
                      <p className="text-white">{message.text}</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">{message.time}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <div className="flex gap-4 items-center">
            <input
              type="text"
              placeholder="Write a message"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="flex-1 bg-gray-800/50 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-200/20"
            />
            <button className="bg-pink-200/20 hover:bg-pink-200/30 text-white p-3 rounded-lg transition-colors duration-200">
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
            <Twitter className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;