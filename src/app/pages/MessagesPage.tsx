import { useState } from 'react';
import { Send, Search } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { mockConversations, mockMessages } from '../data/mockData';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { ScrollArea } from '../components/ui/scroll-area';

export function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState(
    mockConversations[0]
  );
  const [newMessage, setNewMessage] = useState('');
  const [messages] = useState(mockMessages);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    // Here you would normally send the message to your backend
    console.log('Sending message:', newMessage);
    setNewMessage('');
  };

  return (
    <div className="h-[calc(100vh-4rem)] bg-gray-50">
      <div className="container px-0 h-full max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[350px_1fr] h-full">
          {/* Conversations List */}
          <div className="bg-white border-r flex flex-col">
            {/* Search */}
            <div className="p-4 border-b">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input placeholder="Search conversations..." className="pl-10" />
              </div>
            </div>

            {/* Conversations */}
            <ScrollArea className="flex-1">
              <div className="divide-y">
                {mockConversations.map((conversation) => (
                  <button
                    key={conversation.id}
                    onClick={() => setSelectedConversation(conversation)}
                    className={`w-full p-4 flex items-start gap-3 hover:bg-gray-50 transition-colors text-left ${
                      selectedConversation.id === conversation.id
                        ? 'bg-blue-50 border-l-4 border-l-blue-600'
                        : ''
                    }`}
                  >
                    <div className="relative">
                      <ImageWithFallback
                        src={conversation.user.avatar}
                        alt={conversation.user.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      {conversation.user.online && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between mb-1">
                        <p className="truncate">{conversation.user.name}</p>
                        <span className="text-xs text-gray-500 whitespace-nowrap ml-2">
                          {conversation.timestamp}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 truncate mb-1">
                        {conversation.lastMessage}
                      </p>
                      {conversation.unread > 0 && (
                        <Badge className="h-5 bg-blue-600">{conversation.unread}</Badge>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </ScrollArea>
          </div>

          {/* Chat Area */}
          <div className="flex flex-col bg-white hidden md:flex">
            {/* Chat Header */}
            <div className="p-4 border-b flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ImageWithFallback
                  src={selectedConversation.user.avatar}
                  alt={selectedConversation.user.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p>{selectedConversation.user.name}</p>
                  <p className="text-sm text-gray-600">
                    {selectedConversation.user.online ? (
                      <span className="text-green-600">● Online</span>
                    ) : (
                      'Offline'
                    )}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  View Profile
                </Button>
              </div>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4 max-w-3xl mx-auto">
                {messages.map((message) => {
                  const isSentByMe = message.senderId === 'me';
                  return (
                    <div
                      key={message.id}
                      className={`flex ${isSentByMe ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`flex gap-2 max-w-[70%] ${isSentByMe ? 'flex-row-reverse' : ''}`}>
                        {!isSentByMe && (
                          <ImageWithFallback
                            src={selectedConversation.user.avatar}
                            alt={selectedConversation.user.name}
                            className="w-8 h-8 rounded-full flex-shrink-0"
                          />
                        )}
                        <div>
                          <Card
                            className={`p-3 ${
                              isSentByMe
                                ? 'bg-blue-600 text-white'
                                : 'bg-gray-100'
                            }`}
                          >
                            <p className="text-sm">{message.content}</p>
                          </Card>
                          <p
                            className={`text-xs text-gray-500 mt-1 ${
                              isSentByMe ? 'text-right' : ''
                            }`}
                          >
                            {message.timestamp}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </ScrollArea>

            {/* Message Input */}
            <div className="p-4 border-t bg-gray-50">
              <form onSubmit={handleSendMessage} className="flex gap-2">
                <Input
                  placeholder="Type your message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  className="flex-1"
                />
                <Button type="submit">
                  <Send className="h-4 w-4 mr-2" />
                  Send
                </Button>
              </form>
            </div>
          </div>

          {/* Mobile: Show "Select a conversation" message */}
          <div className="md:hidden flex items-center justify-center bg-gray-100 p-8 text-center">
            <div>
              <p className="text-gray-600 mb-4">Select a conversation to start messaging</p>
              <p className="text-sm text-gray-500">
                This view is optimized for desktop. On mobile, tap a conversation to view messages.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
