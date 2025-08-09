# AI Chatbot Setup Guide

## Overview
This website now includes an interactive AI chatbot that can help visitors with:
- Project inquiries and service information
- Pricing and timeline questions
- Technical consultations
- Contact information
- Project showcases

## Features
- 🤖 **Real AI Integration** - Powered by OpenAI GPT-3.5-turbo
- 🎤 **Voice Input** - Speech recognition for hands-free interaction
- 💬 **Smart Responses** - Context-aware conversations
- 🎨 **Beautiful UI** - 3D effects and animations matching your design
- ⚡ **Quick Actions** - Pre-defined buttons for common queries
- 📱 **Responsive** - Works on all devices

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
# or
bun install
```

### 2. Configure OpenAI API
Create a `.env` file in your project root:

```env
# OpenAI API Configuration
# Get your API key from: https://platform.openai.com/api-keys
VITE_OPENAI_API_KEY=your_openai_api_key_here

# Optional: Customize AI behavior
VITE_AI_MODEL=gpt-3.5-turbo
VITE_AI_TEMPERATURE=0.7
VITE_AI_MAX_TOKENS=500
```

### 3. Get OpenAI API Key
1. Visit [OpenAI Platform](https://platform.openai.com/api-keys)
2. Sign up or log in to your account
3. Create a new API key
4. Copy the key and paste it in your `.env` file

### 4. Start Development Server
```bash
npm run dev
# or
bun dev
```

## How It Works

### AI Service (`src/lib/ai.ts`)
- Manages conversation history
- Handles API calls to OpenAI
- Provides fallback responses if API is unavailable
- Maintains context across conversations

### Speech Recognition (`src/hooks/useSpeechRecognition.ts`)
- Uses Web Speech API for voice input
- Supports multiple browsers
- Handles errors gracefully
- Provides real-time transcription

### Chatbot Component (`src/components/ui/AIChatbot.tsx`)
- Beautiful 3D UI with animations
- Message history management
- Voice input integration
- Quick action buttons
- Responsive design

### Quick Actions (`src/components/ui/QuickActions.tsx`)
- Pre-defined common queries
- Beautiful gradient buttons
- Animated interactions
- Easy user onboarding

## Customization

### Modify AI Responses
Edit the system prompt in `src/lib/ai.ts`:

```typescript
const SYSTEM_PROMPT = `You are R-Tech's AI assistant...`;
```

### Add New Quick Actions
Edit the `quickActions` array in `src/components/ui/QuickActions.tsx`:

```typescript
const quickActions: QuickAction[] = [
  {
    id: 'new-action',
    label: 'New Action',
    icon: NewIcon,
    query: 'Your custom query here',
    color: 'from-color-500 to-color-600'
  }
];
```

### Customize Styling
The chatbot uses your existing design system:
- Tailwind CSS classes
- 3D components from your UI library
- Framer Motion animations
- Consistent color scheme

## Browser Support

### Speech Recognition
- ✅ Chrome/Edge (WebkitSpeechRecognition)
- ✅ Firefox (SpeechRecognition)
- ❌ Safari (Limited support)
- ❌ Mobile browsers (Varies)

### AI Features
- ✅ All modern browsers
- ✅ Mobile devices
- ✅ Progressive enhancement (fallback responses)

## Security Considerations

1. **API Key Protection**: Never commit your `.env` file to version control
2. **Rate Limiting**: OpenAI has usage limits and costs
3. **Content Filtering**: AI responses are filtered but monitor usage
4. **Privacy**: Consider data retention policies for chat logs

## Troubleshooting

### Chatbot Not Responding
- Check if OpenAI API key is set correctly
- Verify internet connection
- Check browser console for errors
- Ensure API key has sufficient credits

### Voice Input Not Working
- Check browser permissions for microphone
- Ensure HTTPS connection (required for speech recognition)
- Try refreshing the page
- Check browser compatibility

### Styling Issues
- Ensure all dependencies are installed
- Check Tailwind CSS configuration
- Verify component imports

## Performance Optimization

### Reduce API Calls
- Implement conversation caching
- Use local responses for common queries
- Add rate limiting

### Improve UX
- Add typing indicators
- Implement message queuing
- Add error recovery

## Deployment

### Environment Variables
Ensure your production environment has:
```env
VITE_OPENAI_API_KEY=your_production_api_key
```

### Build Process
```bash
npm run build
# or
bun run build
```

### Hosting Considerations
- HTTPS required for speech recognition
- CORS configuration if needed
- API rate limiting
- Monitoring and analytics

## Support

For issues or questions:
- Check the browser console for errors
- Verify API key configuration
- Test with different browsers
- Review OpenAI API documentation

## Future Enhancements

Potential improvements:
- [ ] Multi-language support
- [ ] File upload capabilities
- [ ] Integration with CRM systems
- [ ] Advanced analytics
- [ ] Custom AI model training
- [ ] Video call integration
- [ ] Chat history export
- [ ] Advanced voice features

---

**Note**: This chatbot is designed to enhance user experience and provide instant support. For complex technical discussions, it's recommended to direct users to schedule a consultation with your team. 