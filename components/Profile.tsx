import React from 'react';
import { Mail, Phone, Linkedin, MapPin, Download } from 'lucide-react';

export const Profile: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="h-32 bg-qida-dark relative">
          <div className="absolute -bottom-16 left-8">
            <img 
              src="https://i.imgur.com/ywnnVwP.png" 
              alt="Profile" 
              className="w-32 h-32 rounded-full border-4 border-white shadow-md object-cover"
            />
          </div>
        </div>
        
        <div className="pt-20 pb-8 px-8">
          <div className="flex justify-between items-start flex-wrap gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Xavier Terradellas</h1>
              <p className="text-lg text-qida-medium font-medium">Product Lead Candidate</p>
            </div>
            <a 
              href="https://www.dropbox.com/scl/fi/0yzz5at5qky9kbq3yw5xq/CV-Xavier-Terradellas.pdf?rlkey=mehywmkcqnlmj52gn3rvs48bn&st=padnjtuj&dl=0"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 bg-qida-dark text-white rounded-lg hover:bg-opacity-90 transition-colors shadow-sm"
            >
              <Download size={18} className="mr-2" />
              Download CV
            </a>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Contact Info</h3>
              <div className="flex items-center text-gray-600">
                <Mail size={18} className="mr-3 text-qida-medium flex-shrink-0" />
                <span>xavierterradellas@gmail.com</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Phone size={18} className="mr-3 text-qida-medium flex-shrink-0" />
                <span>+34 626 322 314</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Linkedin size={18} className="mr-3 text-qida-medium flex-shrink-0" />
                <a 
                  href="https://www.linkedin.com/in/xavierterradellas" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-qida-dark hover:underline truncate"
                >
                  https://www.linkedin.com/in/xavierterradellas
                </a>
              </div>
               <div className="flex items-center text-gray-600">
                <MapPin size={18} className="mr-3 text-qida-medium flex-shrink-0" />
                <span>Barcelona, Spain</span>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Why Qida?</h3>
              <p className="text-gray-600 leading-relaxed">
                Passionate about leveraging technology to improve quality of life for families. 
                Your mission aligns with my drive to build products with real human impact.
              </p>
            </div>
          </div>
        </div>
        
        {/* Footer of the card */}
        <div className="bg-gray-50 px-8 py-4 border-t border-gray-100 flex justify-between items-center text-sm text-gray-500">
          <span></span>
          <span>English, Spanish, Catalan</span>
        </div>
      </div>
    </div>
  );
};