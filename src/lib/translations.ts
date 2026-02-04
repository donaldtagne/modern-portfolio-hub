export type Language = 'de' | 'en';

export const translations = {
  de: {
    nav: {
      about: 'Über mich',
      experience: 'Erfahrung',
      skills: 'Kompetenzen',
      education: 'Ausbildung',
      contact: 'Kontakt',
    },
    hero: {
      greeting: 'Hallo, ich bin',
      role: 'AI Solutions Specialist',
      location: 'Worms, Deutschland',
      cta: 'Kontakt aufnehmen',
      resume: 'Lebenslauf',
    },
    about: {
      title: 'Über mich',
      description: 'AI Solutions Specialist mit starkem technischem Hintergrund und Erfahrung in der Konzeption, Entwicklung und Integration von KI-Lösungen mit Fokus auf Large Language Models und Generative AI. Ich verbinde Business Anforderungen mit technischer Umsetzung, identifiziere geeignete KI Use Cases und setze diese als skalierbare, produktionsreife Lösungen um.',
      focus: 'Mein Schwerpunkt liegt auf LLM-basierten Anwendungen wie Retrieval-Augmented Generation, AI Agents und intelligenter Prozessautomatisierung, die messbaren Mehrwert für Unternehmen schaffen.',
    },
    experience: {
      title: 'Berufserfahrung',
      jobs: [
        {
          company: 'Randstad Digital',
          role: 'Masterand – GenAI & LLM Infrastructure',
          location: 'Frankfurt, Eschborn',
          period: 'Juli 2025 - Jan. 2026',
          highlights: [
            'Vergleich zwischen Cloud RAG, Lokal RAG und Hybrid RAG',
            'Leistungs- und Kosten-Benchmarks: Claude 3.5 Sonnet vs. Qwen3-235B; bis zu 90% Kosteneinsparung identifiziert',
            'Entwickelt produktionsreife RAG-Chatbots mit React.js, LangChain und LlamaIndex',
            'AWS EC2 (g5/p5) + Boto3-Automatisierung für Benchmarks und Cost-Tracking',
          ],
        },
        {
          company: 'AbbVie',
          role: 'Werkstudent – GenAI & RAG Engineering',
          location: 'Ludwigshafen',
          period: 'Juni 2024 - Apr. 2025',
          highlights: [
            'Entwickelt und deployt interne RAG-Chatbots mit LangChain, LlamaIndex, Streamlit',
            'Verglichen Vektor-Datenbanken: Pinecone, FAISS und Chroma',
            'Integriert LLMs: GPT-3.5 Turbo, Claude, Llama 3 und Mistral Large',
            'Qualitätssicherung mit LangSmith und DeepEval',
          ],
        },
        {
          company: 'Fraunhofer-Zentrum',
          role: 'Praktikant – Applied Generative AI',
          location: 'Kaiserslautern',
          period: 'Jan. 2024 - Mai 2024',
          highlights: [
            'Prototyping neuester Generative-AI-Technologien in Python',
            'Experimente mit lokalen 7B–70B-Modellen (Llama 3, Mistral, Qwen3, DeepSeek)',
            'Getestet und verglichen Embedding-Modelle für optimale Retrieval-Qualität',
            'Fortgeschrittene Prompting-Techniken (Chain-of-Thought, Few-Shot, Self-Consistency)',
          ],
        },
      ],
    },
    skills: {
      title: 'Technische Kompetenzen',
      categories: {
        llms: 'LLMs & AI',
        frameworks: 'Frameworks',
        databases: 'Datenbanken',
        cloud: 'Cloud & DevOps',
        languages: 'Sprachen',
      },
    },
    education: {
      title: 'Ausbildung',
      degrees: [
        {
          institution: 'Hochschule Worms',
          degree: 'Master of Science',
          field: 'Angewandte Informatik',
          focus: 'Schwerpunkt Cloud Computing / AI',
          year: '2025',
        },
        {
          institution: 'Hochschule Worms',
          degree: 'Bachelor of Science',
          field: 'Angewandte Informatik',
          focus: 'Schwerpunkt Software Entwicklung',
          year: '2023',
        },
      ],
    },
    languages: {
      title: 'Sprachen',
      list: ['Deutsch', 'Englisch', 'Französisch'],
    },
    contact: {
      title: 'Kontakt',
      subtitle: 'Lassen Sie uns zusammenarbeiten',
      email: 'E-Mail',
      phone: 'Telefon',
      location: 'Standort',
    },
    footer: {
      rights: 'Alle Rechte vorbehalten.',
    },
  },
  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      skills: 'Skills',
      education: 'Education',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hi, I'm",
      role: 'AI Solutions Specialist',
      location: 'Worms, Germany',
      cta: 'Get in Touch',
      resume: 'Resume',
    },
    about: {
      title: 'About Me',
      description: 'AI Solutions Specialist with a strong technical background and experience in designing, developing, and integrating AI solutions with a focus on Large Language Models and Generative AI. I bridge business requirements with technical implementation, identify suitable AI use cases, and implement them as scalable, production-ready solutions.',
      focus: 'My focus is on LLM-based applications such as Retrieval-Augmented Generation, AI Agents, and intelligent process automation that create measurable value for businesses.',
    },
    experience: {
      title: 'Work Experience',
      jobs: [
        {
          company: 'Randstad Digital',
          role: 'Master Thesis – GenAI & LLM Infrastructure',
          location: 'Frankfurt, Eschborn',
          period: 'Jul 2025 - Jan 2026',
          highlights: [
            'Comparison between Cloud RAG, Local RAG and Hybrid RAG',
            'Performance and cost benchmarks: Claude 3.5 Sonnet vs. Qwen3-235B; identified up to 90% cost savings',
            'Developed production-ready RAG chatbots with React.js, LangChain and LlamaIndex',
            'AWS EC2 (g5/p5) + Boto3 automation for benchmarks and cost tracking',
          ],
        },
        {
          company: 'AbbVie',
          role: 'Working Student – GenAI & RAG Engineering',
          location: 'Ludwigshafen',
          period: 'Jun 2024 - Apr 2025',
          highlights: [
            'Developed and deployed internal RAG chatbots with LangChain, LlamaIndex, Streamlit',
            'Compared vector databases: Pinecone, FAISS and Chroma',
            'Integrated LLMs: GPT-3.5 Turbo, Claude, Llama 3 and Mistral Large',
            'Quality assurance with LangSmith and DeepEval',
          ],
        },
        {
          company: 'Fraunhofer Center',
          role: 'Intern – Applied Generative AI',
          location: 'Kaiserslautern',
          period: 'Jan 2024 - May 2024',
          highlights: [
            'Prototyping latest Generative AI technologies in Python',
            'Experiments with local 7B-70B models (Llama 3, Mistral, Qwen3, DeepSeek)',
            'Tested and compared embedding models for optimal retrieval quality',
            'Advanced prompting techniques (Chain-of-Thought, Few-Shot, Self-Consistency)',
          ],
        },
      ],
    },
    skills: {
      title: 'Technical Skills',
      categories: {
        llms: 'LLMs & AI',
        frameworks: 'Frameworks',
        databases: 'Databases',
        cloud: 'Cloud & DevOps',
        languages: 'Languages',
      },
    },
    education: {
      title: 'Education',
      degrees: [
        {
          institution: 'University of Applied Sciences Worms',
          degree: 'Master of Science',
          field: 'Applied Computer Science',
          focus: 'Focus on Cloud Computing / AI',
          year: '2025',
        },
        {
          institution: 'University of Applied Sciences Worms',
          degree: 'Bachelor of Science',
          field: 'Applied Computer Science',
          focus: 'Focus on Software Development',
          year: '2023',
        },
      ],
    },
    languages: {
      title: 'Languages',
      list: ['German', 'English', 'French'],
    },
    contact: {
      title: 'Contact',
      subtitle: "Let's work together",
      email: 'Email',
      phone: 'Phone',
      location: 'Location',
    },
    footer: {
      rights: 'All rights reserved.',
    },
  },
};
