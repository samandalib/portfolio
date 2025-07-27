import React from 'react';
import { motion } from 'framer-motion';

export interface ResearchFinding {
  id: string;
  title: string;
  description: string;
  category?: 'insight' | 'pain-point' | 'opportunity' | 'constraint' | 'trend';
  impact?: 'high' | 'medium' | 'low';
  evidence?: string;
  tags?: string[];
}

export interface ResearchMethod {
  name: string;
  description: string;
  participants?: number;
  duration?: string;
  keyOutcomes?: string[];
}

export interface Testimonial {
  quote: string;
  author: string;
  age: number;
}

export interface ResearchSynthesisProps {
  title?: string;
  subtitle?: string;
  findings?: ResearchFinding[];
  methods?: ResearchMethod[];
  recommendations?: string[];
  processSteps?: string[];
  testimonials?: Testimonial[];
  stats?: {
    interviews?: number;
    duration?: string;
  };
  keyTakeaway?: string;
  participantsImageUrl?: string;
}

const ResearchSynthesis: React.FC<ResearchSynthesisProps> = ({
  title = "Research Synthesis",
  subtitle,
  findings,
  methods,
  recommendations,
  processSteps,
  testimonials,
  stats,
  keyTakeaway,
  participantsImageUrl = "https://res.cloudinary.com/dehugbvmc/image/upload/v1753647769/Participants_emjhho.png"
}) => {
  const categoryColors = {
    insight: 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
    'pain-point': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
    opportunity: 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
    constraint: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200',
    trend: 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
  };

  const impactIcons = {
    high: '🔥',
    medium: '⚡',
    low: '💡'
  } as const;

  const renderProcessSteps = () => {
    if (!processSteps?.length) return null;

    return (
      <div>
        <h4 className="text-base font-medium text-foreground-light dark:text-foreground-dark mb-6 font-sans">
          Process
        </h4>
        <div className="space-y-4">
          {processSteps.map((step, index) => (
            <motion.div 
              key={index} 
              className="flex gap-3 group"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent flex items-center justify-center text-xs font-medium text-white transition-colors">
                {index + 1}
              </div>
              <p className="text-gray-700 dark:text-gray-200 text-sm leading-relaxed pt-0.5 font-sans">
                {step}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    );
  };

  const renderStats = () => {
    if (!stats) return null;

    return (
      <div className="grid grid-cols-2 gap-6">
        {stats.interviews && (
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="text-3xl font-light text-foreground-light dark:text-foreground-dark mb-1 font-heading">
              {stats.interviews}
            </div>
            <div className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 flex items-center justify-center gap-1 font-sans">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
              </svg>
              Interviews
            </div>
          </motion.div>
        )}
        {stats.duration && (
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div className="text-3xl font-light text-foreground-light dark:text-foreground-dark mb-1 font-heading">
              {stats.duration}
            </div>
            <div className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 flex items-center justify-center gap-1 font-sans">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Min/Interview
            </div>
          </motion.div>
        )}
      </div>
    );
  };

  const renderParticipantsImage = () => {
    if (!stats?.interviews) return null;

    return (
      <div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="w-full"
        >
          <img 
            src={participantsImageUrl}
            alt="Research participants visualization"
            className="w-full h-auto rounded-lg"
          />
        </motion.div>
      </div>
    );
  };

  const renderResearchMethods = () => {
    if (!methods?.length) return null;

    return (
      <div>
        <h4 className="text-base font-medium text-foreground-light dark:text-foreground-dark mb-4 font-sans">
          Research Methods
        </h4>
        <div className="space-y-3">
          {methods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-4 rounded-lg border border-gray-200/50 bg-gray-50/80 dark:bg-gray-800/50 dark:border-gray-700/50"
            >
              <h5 className="font-semibold mb-2 font-sans">{method.name}</h5>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 font-sans">
                {method.description}
              </p>
              {method.participants && (
                <p className="text-xs text-gray-500 dark:text-gray-400 font-sans">
                  {method.participants} participants
                </p>
              )}
              {method.duration && (
                <p className="text-xs text-gray-500 dark:text-gray-400 font-sans">
                  Duration: {method.duration}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    );
  };

  const renderTestimonials = () => {
    if (!testimonials?.length) return null;

    return (
      <div className="space-y-6 mb-8 px-4">
        {testimonials.map((testimonial, index) => (
          <motion.div 
            key={index} 
            className="group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex gap-3">
              <svg className="w-4 h-4 text-accent flex-shrink-0 mt-1 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
              <div className="space-y-3">
                <p className="text-gray-700 dark:text-gray-200 leading-relaxed text-sm font-sans">
                  {testimonial.quote}
                </p>
                <div className="flex items-center">
                  <div className="text-xs font-sans">
                    <span className="font-medium text-foreground-light dark:text-foreground-dark">
                      {testimonial.author}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 ml-2">
                      {testimonial.age} years old
                    </span>
                  </div>
                </div>
              </div>
            </div>
            {index < testimonials.length - 1 && <div className="mt-6" />}
          </motion.div>
        ))}
      </div>
    );
  };

  const renderKeyFindings = () => {
    if (!findings?.length) return null;

    return (
      <div className="mb-6">
        <h5 className="text-base font-semibold mb-4 font-sans">Key Findings</h5>
        <div className="grid gap-3 grid-cols-1 md:grid-cols-2">
          {findings.map((finding, index) => (
            <motion.div
              key={finding.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-4 rounded-lg border border-gray-200/50 bg-gray-50/80 dark:bg-gray-800/50 dark:border-gray-700/50 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-3">
                <h6 className="font-semibold font-sans">{finding.title}</h6>
                {finding.impact && (
                  <span className="text-lg" title={`${finding.impact} impact`}>
                    {impactIcons[finding.impact]}
                  </span>
                )}
              </div>
              
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 font-sans">
                {finding.description}
              </p>

              {finding.category && (
                <span className={`inline-block px-2 py-1 text-xs rounded-full font-medium ${
                  categoryColors[finding.category]
                }`}>
                  {finding.category.replace('-', ' ')}
                </span>
              )}

              {finding.evidence && (
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 font-sans italic">
                  Evidence: {finding.evidence}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    );
  };

  const renderKeyTakeaway = () => {
    if (!keyTakeaway) return null;

    return (
      <motion.div 
        className="mt-12 pt-8 pb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <div className="max-w-4xl px-4">
          <div className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4 font-sans">
            Key Takeaway
          </div>
          <h5 className="text-2xl font-light text-foreground-light dark:text-foreground-dark leading-relaxed font-heading">
            {keyTakeaway}
          </h5>
        </div>
      </motion.div>
    );
  };

  const renderRecommendations = () => {
    if (!recommendations?.length) return null;

    return (
      <motion.div 
        className="mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <h4 className="text-base font-semibold mb-4 font-sans">Recommendations</h4>
        <div className="space-y-3">
          {recommendations.map((recommendation, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-3 p-3 rounded-lg bg-green-50/80 dark:bg-green-900/20 border border-green-200/50 dark:border-green-700/50"
            >
              <span className="text-green-500 text-lg">✅</span>
              <p className="text-sm text-gray-700 dark:text-gray-200 font-sans">
                {recommendation}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    );
  };

  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 p-8 relative w-full"
      >
        {/* Header */}
        <div className="mb-8">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 font-medium">
              <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
              RESEARCH STUDY
            </div>
            <h3 className="text-3xl font-light text-foreground-light dark:text-foreground-dark tracking-tight font-heading">
              {title}
            </h3>
            {subtitle && (
              <p className="text-base text-gray-600 dark:text-gray-300 font-sans">
                {subtitle}
              </p>
            )}
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left Column - Process & Stats */}
          <div className="lg:col-span-5 space-y-8 px-4">
            {renderProcessSteps()}
            {renderStats()}
            {renderParticipantsImage()}
            {renderResearchMethods()}
          </div>

          {/* Right Column - Testimonials & Insights */}
          <div className="lg:col-span-7">
            <h4 className="text-base font-medium text-foreground-light dark:text-foreground-dark mb-6 font-sans">
              Insights
            </h4>
            {renderTestimonials()}
            {renderKeyFindings()}
          </div>
        </div>

        {renderKeyTakeaway()}
        {renderRecommendations()}
      </motion.div>
    </div>
  );
};

export default ResearchSynthesis; 