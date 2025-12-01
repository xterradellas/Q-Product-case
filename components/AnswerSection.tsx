import React from 'react';
import { Lightbulb, Search, Zap } from 'lucide-react';

interface AnswerSectionProps {
  title: string;
  problemStatement: string;
  context: string;
  researchContent?: string;
  proposalContent?: string;
  colorTheme?: 'dark' | 'light';
  keyMetrics?: { label: string; definition: string }[];
}

export const AnswerSection: React.FC<AnswerSectionProps> = ({ 
  title, 
  problemStatement, 
  context,
  researchContent = "",
  proposalContent = "",
  keyMetrics
}) => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6">
      {/* Header */}
      <div className="mb-12 text-center">
        <span className="inline-block p-3 rounded-full bg-qida-light text-qida-dark mb-4">
          <Lightbulb size={32} />
        </span>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">{title}</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-qida-dark text-left">
          <h3 className="text-sm font-bold text-qida-dark uppercase mb-2">Problem Statement</h3>
          <p className="text-lg text-gray-700 italic mb-4">"{problemStatement}"</p>
          
          {keyMetrics && (
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                {keyMetrics.map((metric, index) => (
                  <div key={index} className="text-xs text-gray-500">
                    <span className="font-semibold text-gray-600 block mb-1">{metric.label}:</span>
                    {metric.definition}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Part 1: Research & Discovery */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mb-8">
        <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex items-center">
          <Search className="text-qida-medium mr-3" size={20} />
          <h3 className="font-semibold text-gray-900">Research & Discovery</h3>
        </div>

        <div className="p-8">
          <div 
              className="prose prose-teal max-w-none text-gray-600 leading-relaxed font-sans"
              dangerouslySetInnerHTML={{ __html: researchContent || "<p class='text-gray-400 italic text-center'>Research findings and data analysis pending...</p>" }}
          />
        </div>
      </div>

      {/* Part 2: Proposed Actions */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex items-center">
          <Zap className="text-qida-medium mr-3" size={20} />
          <h3 className="font-semibold text-gray-900">Proposed Actions</h3>
        </div>

        <div className="p-8">
          <div 
              className="prose prose-teal max-w-none text-gray-600 leading-relaxed font-sans"
              dangerouslySetInnerHTML={{ __html: proposalContent || "<p class='text-gray-400 italic text-center'>Strategic actions pending...</p>" }}
          />
        </div>
      </div>
    </div>
  );
};