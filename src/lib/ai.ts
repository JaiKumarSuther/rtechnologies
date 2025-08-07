import OpenAI from 'openai';

// Initialize OpenAI client only if API key is available
let openai: OpenAI | null = null;

if (import.meta.env.VITE_OPENAI_API_KEY) {
  openai = new OpenAI({
    apiKey: import.meta.env.VITE_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true, // Only for client-side usage
  });
}

export interface ChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

export interface AIResponse {
  content: string;
  usage?: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

// System prompt for R-Tech AI assistant
const SYSTEM_PROMPT = `You are R-Tech's AI assistant, a helpful and knowledgeable representative of R-Tech Technologies, a software development company based in Islamabad, Pakistan.

Your role is to:
1. Help potential clients understand R-Tech's services
2. Provide information about pricing, timelines, and processes
3. Answer technical questions about development
4. Guide users to contact the team for detailed discussions
5. Be friendly, professional, and informative

Key information about R-Tech:
- Services: Web Development, Mobile Apps, UI/UX Design, AI & ML, Cloud Solutions, Digital Marketing
- Location: Islamabad, Pakistan
- Contact: hello@rtechnologies.pk, +92 300 1234567
- Working Hours: Mon - Fri: 9AM - 6PM
- Pricing: Small projects from $500, Medium $2K-$10K, Large $10K+
- Technologies: React, Vue, Angular, Node.js, Python, React Native, Flutter, AWS, etc.

Always be helpful, accurate, and encourage users to reach out for detailed consultations. Keep responses concise but informative.`;

export class AIService {
  private static instance: AIService;
  private conversationHistory: ChatMessage[] = [
    { role: 'system', content: SYSTEM_PROMPT }
  ];

  private constructor() {}

  public static getInstance(): AIService {
    if (!AIService.instance) {
      AIService.instance = new AIService();
    }
    return AIService.instance;
  }

  public async sendMessage(userMessage: string): Promise<AIResponse> {
    try {
      // Add user message to conversation history
      this.conversationHistory.push({ role: 'user', content: userMessage });

      // Check if we have an API key and OpenAI client
      if (!import.meta.env.VITE_OPENAI_API_KEY || !openai) {
        // Fallback to local responses if no API key
        return await this.getLocalResponse(userMessage);
      }

      // Call OpenAI API
      const completion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: this.conversationHistory,
        max_tokens: 500,
        temperature: 0.7,
        stream: false,
      });

      const assistantMessage = completion.choices[0]?.message?.content || 'I apologize, but I encountered an error. Please try again.';
      
      // Add assistant response to conversation history
      this.conversationHistory.push({ role: 'assistant', content: assistantMessage });

      return {
        content: assistantMessage,
        usage: completion.usage ? {
          prompt_tokens: completion.usage.prompt_tokens,
          completion_tokens: completion.usage.completion_tokens,
          total_tokens: completion.usage.total_tokens,
        } : undefined,
      };
    } catch (error) {
      console.error('AI Service Error:', error);
      
      // Fallback to local responses on error
      return await this.getLocalResponse(userMessage);
    }
  }

  private async getLocalResponse(userInput: string): Promise<AIResponse> {
    // Simulate API delay for more natural feel
    await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 1200));
    
    const input = userInput.toLowerCase();
    
    if (input.includes('hello') || input.includes('hi') || input.includes('hey')) {
      return {
        content: "Hello! Great to meet you! 👋 How can I help you with your project today?"
      };
    }
    
    if (input.includes('service') || input.includes('what do you do')) {
      return {
        content: `**R-Tech Services Overview** 🚀

We specialize in cutting-edge technology solutions:

• **Web Development** - Modern, responsive websites and web applications
• **Mobile Apps** - iOS and Android development with React Native
• **UI/UX Design** - Beautiful, user-centered design experiences
• **AI & Machine Learning** - Custom AI solutions and automation
• **Cloud Solutions** - Scalable cloud infrastructure and deployment
• **Digital Marketing** - SEO, social media, and growth strategies

Which service interests you most? I'd love to tell you more!`
      };
    }
    
    if (input.includes('price') || input.includes('cost') || input.includes('rate')) {
      return {
        content: `**Pricing Information** 💰

Our pricing is transparent and project-based:

• **Small Projects** - Starting from $500
• **Medium Projects** - $2,000 - $10,000
• **Large Projects** - $10,000+
• **Hourly Rate** - $50-100/hour for consultations

**Free Consultation** - We offer a complimentary 30-minute session to discuss your project and provide a detailed quote.

Would you like to schedule a free consultation? 📅`
      };
    }
    
    if (input.includes('contact') || input.includes('email') || input.includes('phone')) {
      return {
        content: `**Contact Information** 📞

• **Email**: hello@rtechnologies.pk
• **Phone**: +92 300 1234567
• **Location**: Islamabad, Pakistan
• **Working Hours**: Mon - Fri: 9AM - 6PM

**Quick Response**: We typically respond within 24 hours!

Would you like me to help you schedule a meeting or would you prefer to contact us directly?`
      };
    }
    
    if (input.includes('portfolio') || input.includes('work') || input.includes('projects')) {
      return {
        content: `**Our Portfolio Highlights** 🎨

We've delivered amazing projects across various industries:

• **E-commerce Platforms** - Modern online stores
• **Healthcare Apps** - Patient management systems
• **Educational Platforms** - Learning management systems
• **Fintech Solutions** - Payment and banking apps
• **Entertainment Apps** - Gaming and media platforms

You can view our full portfolio at our website. Would you like me to tell you about any specific project or technology stack we use?`
      };
    }
    
    if (input.includes('team') || input.includes('who') || input.includes('developers')) {
      return {
        content: `**Our Amazing Team** 👥

We're a passionate team of:

• **Frontend Developers** - React, Vue, Angular experts
• **Backend Developers** - Node.js, Python, Java specialists
• **UI/UX Designers** - Creative design professionals
• **DevOps Engineers** - Cloud and deployment experts
• **Project Managers** - Ensuring smooth delivery

**Experience**: 5+ years in the industry
**Projects Completed**: 100+ successful deliveries
**Client Satisfaction**: 98% positive feedback

Ready to work with our talented team? Let's discuss your project!`
      };
    }
    
    if (input.includes('technology') || input.includes('tech stack') || input.includes('framework')) {
      return {
        content: `**Our Technology Stack** ⚡

**Frontend**:
• React, Vue.js, Angular
• TypeScript, JavaScript
• Tailwind CSS, Material-UI
• Framer Motion, GSAP

**Backend**:
• Node.js, Python, Java
• Express, Django, Spring Boot
• PostgreSQL, MongoDB, Redis

**Mobile**:
• React Native, Flutter
• iOS, Android development

**Cloud & DevOps**:
• AWS, Google Cloud, Azure
• Docker, Kubernetes
• CI/CD pipelines

What technology interests you most? I can provide detailed information!`
      };
    }
    
    if (input.includes('timeline') || input.includes('how long') || input.includes('duration')) {
      return {
        content: `**Project Timeline** ⏱️

Typical project timelines:

• **Small Website** - 2-4 weeks
• **Medium Web App** - 6-12 weeks
• **Large Application** - 3-6 months
• **Mobile App** - 8-16 weeks
• **E-commerce Platform** - 12-20 weeks

**Factors affecting timeline**:
• Project complexity
• Feature requirements
• Client feedback cycles
• Third-party integrations

We always provide detailed project plans with milestones. Would you like to discuss your specific timeline?`
      };
    }
    
    if (input.includes('thank') || input.includes('thanks')) {
      return {
        content: "You're very welcome! 😊 It's my pleasure to help. If you have any more questions or need assistance with your project, feel free to ask. I'm here to help make your tech dreams come true! ✨"
      };
    }
    
    // Default response
    return {
      content: `Thank you for your message! 🤖

I understand you're asking about "${userInput}". While I can help with general information about R-Tech's services, pricing, and processes, for specific technical questions or detailed project discussions, I'd recommend:

• **Scheduling a consultation** with our team
• **Sending us an email** at hello@rtechnologies.pk
• **Calling us** at +92 300 1234567

Is there anything specific about our services, pricing, or portfolio that I can help you with?`
    };
  }

  public clearHistory(): void {
    this.conversationHistory = [
      { role: 'system', content: SYSTEM_PROMPT }
    ];
  }

  public getHistory(): ChatMessage[] {
    return [...this.conversationHistory];
  }
}

export default AIService; 