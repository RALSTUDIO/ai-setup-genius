
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-sm fixed w-full z-50 border-b border-neutral-200">
      <div className="container-wide py-4 flex justify-between items-center">
        <Link to="/" className="font-bold text-xl text-purple-500">AKID</Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center space-x-6">
            <Link to="/about" className="text-neutral-600 hover:text-purple-500 transition-colors">About</Link>
            <Link to="/services" className="text-neutral-600 hover:text-purple-500 transition-colors">Services</Link>
            <Link to="/ai-solutions" className="text-neutral-600 hover:text-purple-500 transition-colors">AI Solutions</Link>
            <Link to="/pricing" className="text-neutral-600 hover:text-purple-500 transition-colors">Pricing</Link>
          </div>
          <Button asChild className="bg-purple-300 hover:bg-purple-400 text-white">
            <Link to="/start-quiz">Start My Company</Link>
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-neutral-900"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-neutral-200 animate-fade-in">
          <div className="container py-4 flex flex-col space-y-3">
            <Link 
              to="/about" 
              className="px-4 py-2 text-neutral-600 hover:bg-neutral-100 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className="px-4 py-2 text-neutral-600 hover:bg-neutral-100 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/ai-solutions" 
              className="px-4 py-2 text-neutral-600 hover:bg-neutral-100 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              AI Solutions
            </Link>
            <Link 
              to="/pricing" 
              className="px-4 py-2 text-neutral-600 hover:bg-neutral-100 rounded-md"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Button 
              asChild 
              className="w-full bg-purple-300 hover:bg-purple-400 text-white mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Link to="/start-quiz">Start My Company</Link>
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
