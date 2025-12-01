import React from 'react';
import { LucideIcon } from 'lucide-react';

interface MetricCardProps {
  label: string;
  value: string;
  description: string;
  icon: LucideIcon;
  subtext?: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({ label, value, description, icon: Icon, subtext }) => {
  return (
    <div className="bg-qida-beige p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider">{label}</h3>
        <div className="p-2 bg-white rounded-lg text-qida-dark shadow-sm">
          <Icon size={20} />
        </div>
      </div>
      <div className="flex items-baseline mb-2">
        <span className="text-3xl font-bold text-gray-900">{value}</span>
      </div>
      <p className="text-sm text-gray-600 mb-3">{description}</p>
      {subtext && (
        <div className="text-xs text-gray-400 border-t border-gray-200/50 pt-3 mt-auto">
          {subtext}
        </div>
      )}
    </div>
  );
};