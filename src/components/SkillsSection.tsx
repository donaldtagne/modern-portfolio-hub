import { useLanguage } from '@/contexts/LanguageContext';

const skills = {
  llms: ['Claude', 'GPT-4', 'Gemini', 'Llama 3', 'Mistral', 'Qwen3', 'DeepSeek'],
  frameworks: ['LangChain', 'LlamaIndex', 'React.js', 'TypeScript', 'Streamlit', 'FastAPI', 'vLLM'],
  databases: ['FAISS', 'Pinecone', 'Chroma', 'PostgreSQL'],
  cloud: ['AWS EC2', 'Boto3', 'Docker', 'ngrok', 'HuggingFace'],
  languages: ['Python', 'TypeScript', 'JavaScript', 'SQL'],
};

export const SkillsSection = () => {
  const { t } = useLanguage();

  const categories = [
    { key: 'llms', skills: skills.llms },
    { key: 'frameworks', skills: skills.frameworks },
    { key: 'databases', skills: skills.databases },
    { key: 'cloud', skills: skills.cloud },
    { key: 'languages', skills: skills.languages },
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">
          {t.skills.title}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {categories.map(({ key, skills: skillList }) => (
            <div
              key={key}
              className="glass rounded-xl p-6 shadow-card hover:shadow-glow transition-all duration-300 group"
            >
              <h3 className="text-lg font-semibold mb-4 text-gradient">
                {t.skills.categories[key as keyof typeof t.skills.categories]}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillList.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-secondary rounded-full text-muted-foreground hover:text-foreground hover:bg-primary/20 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
