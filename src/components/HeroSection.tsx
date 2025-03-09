
import { Link } from 'react-router-dom';
import { ArrowRight, Clock } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative pt-24 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10 stripe-grid-pattern opacity-30"></div>
      <div className="absolute inset-0 -z-10 bg-gradient-radial from-transparent to-white"></div>
      
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 text-purple-500 mb-6 animate-fade-in">
            <Clock size={16} className="mr-2" />
            <span className="font-medium">In 30 Seconds</span>
          </div>
          
          <h1 className="heading-xl mb-6 animate-slide-up">
            Know Your Cost, Timeline & Legal Structure!
          </h1>
          
          <p className="text-xl text-neutral-600 mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            Thinking about starting a business in Saudi Arabia?
            Get an instant cost estimate, a step-by-step timeline, and the best legal structure for your company—all in just 30 seconds!
          </p>
          
          <p className="text-lg font-medium text-neutral-800 mb-10 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            🚀 No consultants. No waiting. Just instant answers.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <Link 
              to="/start-quiz" 
              className="button-primary inline-flex items-center justify-center group"
            >
              Take the Quiz Now – It's Free!
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
