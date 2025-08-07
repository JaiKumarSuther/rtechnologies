import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Bot, 
  X, 
  Send, 
  User, 
  Loader2, 
  Sparkles,
  ChevronUp,
  ChevronDown,
  Mic,
  MicOff,
  RefreshCw,
  Zap,
  Brain,
  MessageSquare
} from 'lucide-react';
import { Button3D } from './Button3D';
import { Card3D } from './Card3D';
import { Text3D } from './Text3D';
import { cn } from '@/lib/utils';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import AIService, { AIResponse } from '@/lib/ai';
import { useSpeechRecognition } from '@/hooks/useSpeechRecognition';
import QuickActions from './QuickActions';


interface Message {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
}

interface AIChatbotProps {
  className?: string;
}

const AIChatbot: React.FC<AIChatbotProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm R-Tech's AI assistant. I can help you with:\n\n• **Project inquiries** - Learn about our services\n• **Technical questions** - Get detailed information\n• **Pricing estimates** - Understand our rates\n• **Booking consultations** - Schedule a meeting\n\nHow can I assist you today? 🤖✨",
      role: 'assistant',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isAIMode, setIsAIMode] = useState(true);
  const [aiStats, setAiStats] = useState<{ totalTokens: number; responses: number }>({ totalTokens: 0, responses: 0 });
  const [showApiKeyMessage, setShowApiKeyMessage] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const aiService = AIService.getInstance();
  
  // Speech recognition hook
  const {
    isListening,
    transcript,
    startListening,
    stopListening,
    resetTranscript,
    error: speechError
  } = useSpeechRecognition();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      role: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Use real AI service
      const response: AIResponse = await aiService.sendMessage(inputValue);
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: response.content,
        role: 'assistant',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
      
      // Update AI stats
      if (response.usage) {
        setAiStats(prev => ({
          totalTokens: prev.totalTokens + response.usage!.total_tokens,
          responses: prev.responses + 1
        }));
      }
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "I apologize, but I'm experiencing some technical difficulties. Please try again in a moment or contact us directly at hello@rtechnologies.pk",
        role: 'assistant',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };



  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleListening = () => {
    if (isListening) {
      stopListening();
      // Set the transcript as input value when stopping
      if (transcript.trim()) {
        setInputValue(transcript.trim());
      }
      resetTranscript();
    } else {
      startListening();
    }
  };

  const clearChat = () => {
    setMessages([
      {
        id: '1',
        content: "Hello! I'm R-Tech's AI assistant. I can help you with:\n\n• **Project inquiries** - Learn about our services\n• **Technical questions** - Get detailed information\n• **Pricing estimates** - Understand our rates\n• **Booking consultations** - Schedule a meeting\n\nHow can I assist you today? 🤖✨",
        role: 'assistant',
        timestamp: new Date()
      }
    ]);
    aiService.clearHistory();
    setAiStats({ totalTokens: 0, responses: 0 });
  };

  const handleQuickAction = (query: string) => {
    setInputValue(query);
    // Auto-send the quick action query
    setTimeout(() => {
      handleSendMessage();
    }, 100);
  };

    return (
    <div className={cn("fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6", className)}>
      {/* Chat Toggle Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="mb-4"
          >
                         <Button3D
               onClick={() => setIsOpen(true)}
               className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 shadow-lg hover:shadow-xl transition-all duration-300 group"
               intensity={20}
             >
               <Bot className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:scale-110 transition-transform" />
             </Button3D>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 20 }}
            className="w-[calc(100vw-2rem)] h-[calc(100vh-8rem)] max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl max-h-[600px] sm:max-h-[700px]"
          >
                         <Card3D className="h-full flex flex-col bg-gray-900/95 backdrop-blur-xl border border-gray-700 shadow-2xl" intensity={15}>
                               {/* Header */}
                <div className="flex items-center justify-between p-3 sm:p-4 border-b border-gray-700 bg-gradient-to-r from-gray-800 to-gray-900">
                                     <div className="flex items-center gap-2 sm:gap-3">
                     <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg">
                       <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                     </div>
                    <div>
                      <h3 className="font-bold text-sm sm:text-base text-white">R-Tech AI Assistant</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          <span className="text-xs text-gray-300">
                            {isLoading ? 'Typing...' : 'Online'}
                          </span>
                        </div>
                        {isAIMode && (
                          <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30">
                            <Zap className="w-3 h-3 text-blue-400" />
                            <span className="text-xs text-blue-400 font-medium">AI</span>
                          </div>
                        )}
                        {!import.meta.env.VITE_OPENAI_API_KEY && (
                          <button
                            onClick={() => setShowApiKeyMessage(!showApiKeyMessage)}
                            className="flex items-center gap-1 px-2 py-1 rounded-full bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border border-orange-500/30 hover:from-orange-500/30 hover:to-yellow-500/30 transition-all duration-200"
                            title="Click for API setup info"
                          >
                            <span className="text-xs text-orange-400">⚠️</span>
                            <span className="text-xs text-orange-400 font-medium">Setup</span>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => setIsMinimized(!isMinimized)}
                      className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
                    >
                      {isMinimized ? <ChevronUp className="w-4 h-4 text-gray-300" /> : <ChevronDown className="w-4 h-4 text-gray-300" />}
                    </button>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="p-2 hover:bg-red-500/20 hover:text-red-400 rounded-lg transition-colors"
                    >
                      <X className="w-4 h-4 text-gray-300" />
                    </button>
                  </div>
                </div>

                             {/* Messages */}
               {!isMinimized && (
                 <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent" style={{ maxHeight: 'calc(100vh - 300px)' }}>
                  {messages.map((message) => (
                                         <motion.div
                       key={message.id}
                       initial={{ opacity: 0, y: 10 }}
                       animate={{ opacity: 1, y: 0 }}
                       className={`flex gap-2 sm:gap-3 ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                     >
                                               {message.role === 'assistant' && (
                          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                            <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                          </div>
                        )}
                       <div
                         className={`max-w-[85%] sm:max-w-[80%] p-3 sm:p-4 rounded-xl shadow-sm ${
                           message.role === 'user'
                             ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white'
                             : 'bg-gradient-to-br from-gray-800 to-gray-700 text-white border border-gray-600'
                         }`}
                       >
                                                 <ReactMarkdown
                           remarkPlugins={[remarkGfm]}
                           className="text-sm sm:text-base prose prose-sm max-w-none prose-invert"
                           components={{
                             p: ({ children }) => <p className="mb-2 last:mb-0 leading-relaxed text-white">{children}</p>,
                             ul: ({ children }) => <ul className="list-disc list-inside mb-2 space-y-1 text-white">{children}</ul>,
                             li: ({ children }) => <li className="mb-1 text-white">{children}</li>,
                             strong: ({ children }) => <strong className="font-semibold text-white">{children}</strong>,
                           }}
                         >
                           {message.content}
                         </ReactMarkdown>
                         <p className="text-xs opacity-70 mt-3 text-right">
                           {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                         </p>
                       </div>
                       {message.role === 'user' && (
                         <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                           <User className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                         </div>
                       )}
                    </motion.div>
                                     ))}
                   
                   {isLoading && (
                                           <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex gap-2 sm:gap-3 justify-start"
                      >
                        <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg">
                          <Bot className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                        </div>
                       <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-3 sm:p-4 rounded-xl border border-gray-600 shadow-sm">
                         <div className="flex items-center gap-2">
                           <Loader2 className="w-4 h-4 animate-spin text-blue-400" />
                           <span className="text-sm sm:text-base text-white">AI is thinking...</span>
                         </div>
                       </div>
                     </motion.div>
                   )}
                   
                   {/* Show Quick Actions only when there are few messages */}
                   {messages.length <= 2 && !isLoading && (
                     <motion.div
                       initial={{ opacity: 0, y: 10 }}
                       animate={{ opacity: 1, y: 0 }}
                       className="pt-2 sm:pt-4"
                     >
                       <QuickActions onActionClick={handleQuickAction} />
                     </motion.div>
                   )}
                   
                   <div ref={messagesEndRef} />
                 </div>
               )}

                             {/* Input Area */}
               {!isMinimized && (
                 <div className="p-3 sm:p-4 border-t border-gray-700 bg-gradient-to-r from-gray-800/50 to-gray-700/50">
                   <div className="flex items-center gap-2">
                     <div className="flex-1 relative">
                       <input
                         ref={inputRef}
                         type="text"
                         value={inputValue}
                         onChange={(e) => setInputValue(e.target.value)}
                         onKeyPress={handleKeyPress}
                         placeholder="Type your message..."
                         className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-gray-800 border border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 text-sm sm:text-base shadow-sm text-white placeholder-gray-400"
                         disabled={isLoading}
                       />
                     </div>
                     <div className="flex items-center gap-1">
                                                <button
                           onClick={toggleListening}
                           className={`p-2 sm:p-3 rounded-xl transition-all duration-200 ${
                             isListening 
                               ? 'bg-red-500 text-white shadow-lg scale-105' 
                               : 'bg-gradient-to-br from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-gray-300 shadow-sm hover:shadow-md'
                           }`}
                         >
                           {isListening ? <MicOff className="w-4 h-4 sm:w-5 sm:h-5" /> : <Mic className="w-4 h-4 sm:w-5 sm:h-5" />}
                         </button>
                         <button
                           onClick={handleSendMessage}
                           disabled={!inputValue.trim() || isLoading}
                           className="p-2 sm:p-3 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-500 hover:to-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-sm hover:shadow-lg disabled:shadow-sm"
                         >
                           <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                         </button>
                     </div>
                   </div>
                  
                                                        {/* Quick Actions */}
                   <div className="flex items-center justify-between mt-3 sm:mt-4">
                     <div className="flex items-center gap-2">
                       <button
                         onClick={clearChat}
                         className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors flex items-center gap-1 px-3 py-2 rounded-lg hover:bg-gray-700 border border-gray-600"
                       >
                         <RefreshCw className="w-3 h-3 sm:w-4 sm:h-4" />
                         Clear Chat
                       </button>
                       {aiStats.responses > 0 && (
                         <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-300 px-3 py-2 rounded-lg bg-gray-700 border border-gray-600">
                           <Brain className="w-3 h-3 sm:w-4 sm:h-4" />
                           {aiStats.responses} responses
                         </div>
                       )}
                     </div>
                     <div className="flex items-center gap-1 text-xs sm:text-sm text-gray-300 px-3 py-2 rounded-lg bg-gradient-to-r from-blue-500/30 to-purple-500/30 border border-blue-500/30">
                       <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                       Powered by AI
                     </div>
                   </div>
                 
                                   {/* API Key Setup Message */}
                  {showApiKeyMessage && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-3 sm:mt-4 p-3 sm:p-4 bg-gradient-to-r from-orange-900/20 to-yellow-900/20 border border-orange-700 rounded-xl text-xs sm:text-sm text-orange-200 shadow-sm"
                    >
                      <p className="font-bold mb-2 text-white">💡 Enhanced AI Responses Available</p>
                      <p className="mb-3 text-gray-300">Add your OpenAI API key to enable real AI responses:</p>
                      <ol className="list-decimal list-inside space-y-2 text-xs text-gray-300">
                        <li>Get API key from <a href="https://platform.openai.com/api-keys" target="_blank" rel="noopener noreferrer" className="underline font-medium text-orange-300">OpenAI Platform</a></li>
                        <li>Create <code className="bg-orange-900 px-2 py-1 rounded font-mono text-orange-200">.env</code> file in project root</li>
                        <li>Add: <code className="bg-orange-900 px-2 py-1 rounded font-mono text-orange-200">VITE_OPENAI_API_KEY=your_key_here</code></li>
                        <li>Restart the development server</li>
                      </ol>
                    </motion.div>
                  )}
               </div>
              )}
            </Card3D>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AIChatbot; 