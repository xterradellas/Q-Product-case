import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { MetricCard } from './components/MetricCard';
import { AnswerSection } from './components/AnswerSection';
import { Profile } from './components/Profile';
import { ViewState } from './types';
import { Users, TrendingUp, DollarSign, Activity } from 'lucide-react';

const App: React.FC = () => {
  const [currentView, setView] = useState<ViewState>(ViewState.CONTEXT);

  const contextText = "The home caring business is currently Qida’s core. We provide service to ~3,000 families at a given time. As the Product owner assigned to this business you are focused on 2 key metrics.";

  const cvrMetric = { label: "CVR", definition: "Services started / Inbound requests" };
  const costMetric = { label: "Avg. Cost to Serve", definition: "Hours to start × Avg. cost per hour" };

  const renderContent = () => {
    switch (currentView) {
      case ViewState.CONTEXT:
        return (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Case Study</h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Analyzing core metrics for the Home Caring Business to drive growth and efficiency.
              </p>
            </div>

            {/* Context Hero */}
            <div className="bg-qida-dark rounded-2xl p-8 mb-12 text-white shadow-xl relative overflow-hidden">
               {/* Abstract shapes for visual flair */}
               <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white opacity-5 rounded-full blur-2xl"></div>
               <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-qida-accent opacity-10 rounded-full blur-2xl"></div>
               
               <div className="relative z-10">
                 <h2 className="text-2xl font-semibold mb-4 border-b border-white/20 pb-2 inline-block">Context</h2>
                 <p className="text-lg leading-relaxed text-qida-light/90">
                   {contextText}
                 </p>
               </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <MetricCard 
                label=""
                value="Conversion Rate (CVR)"
                icon={TrendingUp}
                description={cvrMetric.definition}
                subtext="Key driver for growth"
              />
              <MetricCard 
                label=""
                value="Avg. Cost to Serve"
                icon={DollarSign}
                description={costMetric.definition}
                subtext="Key driver for margin"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
               <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <div className="flex items-center mb-2 text-qida-dark">
                    <Users className="mr-2" size={20} />
                    <h3 className="font-semibold">3,000 Families</h3>
                  </div>
                  <p className="text-sm text-gray-500">Currently served active user base.</p>
               </div>
               <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <div className="flex items-center mb-2 text-qida-dark">
                    <Activity className="mr-2" size={20} />
                    <h3 className="font-semibold">Operational Focus</h3>
                  </div>
                  <p className="text-sm text-gray-500">Balancing quality of care with operational scalability.</p>
               </div>
            </div>
            
            <div className="mt-12 text-center">
              <button 
                onClick={() => setView(ViewState.PROBLEM_1)}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-qida-dark hover:bg-qida-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-qida-dark transition-all"
              >
                Start Analysis
              </button>
            </div>
          </div>
        );
      
      case ViewState.PROBLEM_1:
        return (
          <AnswerSection 
            title="Challenge 1: Increasing CVR"
            problemStatement="What would you change in the process to increase CVR?"
            context={contextText}
            keyMetrics={[cvrMetric]}
            researchContent={`
              <ul class="list-disc pl-5 space-y-2">
                <li><strong>Process Mapping:</strong> Study and map the full current “Qida 5-step process” (listen, assess, evaluate, select, start). Identify where we lose people, where we add friction, and which steps could be automated or simplified without losing quality.</li>
                    <ul class="list-[circle] pl-5 mt-2 space-y-1 text-gray-500">
                      <li>On a first call done on Monday 1st, redirection to the assess step moved to the day after</li>
                  </ul>
                <li><strong>Customer Service & Sales Feedback:</strong> Talk to Customer Service and Sales (or Social Referent). Understand pains of the user, types of questions received: are people requesting services that we still don’t offer? Is it easy to change caregiver?</li>
                <li><strong>NPS Analysis:</strong> Take a look at NPS. What are we doing bad and well?</li>
                <li><strong>Inbound Data Review:</strong> Review info we provide on inbound (website, manuals, calls). Is data qualified?</li>
                <li><strong>Algorithm Audit:</strong> Understand matching algorithm (4-6 days). Can it be reduced by adding tech?</li>
                <li><strong>Channel Study:</strong> Study of acquisition channels, which one is low hanging fruit to improve inbound info?</li>
              </ul>
            `}
            proposalContent={`
              <ul class="list-disc pl-5 space-y-2">
                <li><strong>Information Audit:</strong> Audit of the info we provide to the customers.</li>
                <li><strong>Automation & AI:</strong> Evaluate questions that can be automated without human intervention to reduce response times for faster decisions? Bot/AI agent on website for pricing, etc? Also on tools the team internally uses.</li>
                <li><strong>Inbound Optimization:</strong> Make inbound requests easier to convert: easy, fast and accessible website, mobile optimization, SEO (not first now), review calls in group with Sales team to improve, incentives to Sales Team.</li>
                <li><strong>Channel Awareness:</strong> Increase awareness on acquisition channels.</li>
                <li><strong>Service Focus:</strong> With acquisition channels, potentiate services with major impact and faster conversion -> on website, ads, etc.</li>
              </ul>
            `}
          />
        );

      case ViewState.PROBLEM_2:
        return (
           <AnswerSection 
            title="Challenge 2: Reducing Cost to Serve"
            problemStatement="What would you change to reduce the avg. cost to serve per service?"
            context={contextText}
            keyMetrics={[costMetric]}
            researchContent={`
              <ul class="list-disc pl-5 space-y-2">
                <li><strong>Process Time Analysis:</strong> Besides mapping the full operational process listing the steps (listen, assess, evaluate, select, start), try to identify the avg times spent on each step by whom.
                  <ul class="list-[circle] pl-5 mt-2 space-y-1 text-gray-500">
                    <li>Can we do more things in less time? how fast is the onboarding? is it self-service? </li>
                    <li>Are there things we can do via webconference call and not travelling?</li>
                    <li>Is there enough training on our staff?</li>
                  </ul>
                </li>
                <li><strong>Tech Tool Audit:</strong> Are tech tools used good enough?</li>
                <li><strong>Satisfaction Analysis:</strong> Analyze NPS and customer satisfaction (quantitative).</li>
                <li><strong>Shadowing CS:</strong> Shadow Customer Service on calls, looking for repetitive tasks and execution times.</li>
                <li><strong>PTI Review:</strong> Review PTI (Plan de trabajo individual). How long does it take, is it standarized?</li>
                <li><strong>Service Profitability:</strong> Study types of services (hours, daily, weekends) per impact on €.</li>
                <li><strong>Cost Structure:</strong> Cost structure review: hours, onboardings, documentation, travels, materials, tools.</li>
              </ul>
            `}
            proposalContent={`
              <ul class="list-disc pl-5 space-y-2">
                <li><strong>Tech Enablement:</strong> Reduce manual steps on caregivers and Sales team. Can we help them with tech automations, templates, OCR, preloaded contracts, automatize post-onboarding with notifications agent?</li>
                <li><strong>Training:</strong> Training staff (caregivers, CS, Sales) to decrease execution times.</li>
                <li><strong>Standardization:</strong> Standarize services and best practices with caregivers to avoid reworks.</li>
                <li><strong>Route Optimization:</strong> Optimize/reduce travel times: tech to optimize caregivers routes. If feasible, substituting non-essential visits with video calls.</li>
                <li><strong>Procurement:</strong> Negotiating price on materials used recurrently.</li>
              </ul>
            `}
          />
        );

      case ViewState.PROFILE:
        return <Profile />;
        
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAF9] flex flex-col font-sans">
      <Navigation currentView={currentView} setView={setView} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      
      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Case Study Presentation.</p>
          <p className="mt-1">Designed with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;