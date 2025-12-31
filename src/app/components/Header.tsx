import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, User, Briefcase, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600" />
          <span className="hidden sm:inline-block">DesignHub</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            to="/jobs"
            className={`flex items-center gap-2 transition-colors hover:text-blue-600 ${
              isActive('/jobs') ? 'text-blue-600' : 'text-gray-700'
            }`}
          >
            <Briefcase className="h-4 w-4" />
            Find Jobs
          </Link>
          <Link
            to="/designers"
            className={`flex items-center gap-2 transition-colors hover:text-blue-600 ${
              isActive('/designers') ? 'text-blue-600' : 'text-gray-700'
            }`}
          >
            <Search className="h-4 w-4" />
            Find Designers
          </Link>
          <Link
            to="/messages"
            className={`flex items-center gap-2 transition-colors hover:text-blue-600 ${
              isActive('/messages') ? 'text-blue-600' : 'text-gray-700'
            }`}
          >
            <MessageCircle className="h-4 w-4" />
            Messages
          </Link>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            <User className="h-4 w-4 mr-2" />
            Sign In
          </Button>
          <Button size="sm">Post a Job</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t bg-white">
          <nav className="flex flex-col space-y-4 p-4">
            <Link
              to="/jobs"
              className={`flex items-center gap-2 p-2 rounded-lg transition-colors ${
                isActive('/jobs')
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Briefcase className="h-5 w-5" />
              Find Jobs
            </Link>
            <Link
              to="/designers"
              className={`flex items-center gap-2 p-2 rounded-lg transition-colors ${
                isActive('/designers')
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Search className="h-5 w-5" />
              Find Designers
            </Link>
            <Link
              to="/messages"
              className={`flex items-center gap-2 p-2 rounded-lg transition-colors ${
                isActive('/messages')
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <MessageCircle className="h-5 w-5" />
              Messages
            </Link>
            <div className="pt-4 border-t space-y-2">
              <Button variant="outline" className="w-full">
                <User className="h-4 w-4 mr-2" />
                Sign In
              </Button>
              <Button className="w-full">Post a Job</Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
