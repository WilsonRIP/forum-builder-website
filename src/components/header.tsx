'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { WEBSITE_NAME, ROUTES } from '@/app/libs/types';
export function Header() {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold">{WEBSITE_NAME}</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href={ROUTES.CATEGORIES} className="text-sm font-medium hover:text-primary">
            Categories
          </Link>
          <Link href={ROUTES.RECENT} className="text-sm font-medium hover:text-primary">
            Recent
          </Link>
          <Link href={ROUTES.POPULAR} className="text-sm font-medium hover:text-primary">
            Popular
          </Link>
          <Button size="sm" variant="outline" onClick={toggleTheme}>
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </Button>
          <Link href={ROUTES.SIGN_IN}>
            <Button size="sm" variant="secondary">Sign In</Button>
          </Link>
          <Link href={ROUTES.SIGN_UP}>
            <Button size="sm">Sign Up</Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden px-4 py-2 bg-background border-b border-border">
          <nav className="flex flex-col space-y-4 pb-4">
            <Link href={ROUTES.CATEGORIES} className="text-sm font-medium hover:text-primary py-2">
              Categories
            </Link>
            <Link href={ROUTES.RECENT} className="text-sm font-medium hover:text-primary py-2">
              Recent
            </Link>
            <Link href={ROUTES.POPULAR} className="text-sm font-medium hover:text-primary py-2">
              Popular
            </Link>
            <div className="flex justify-between items-center py-2">
              <span className="text-sm font-medium">Theme</span>
              <Button size="sm" variant="outline" onClick={toggleTheme}>
                {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
              </Button>
            </div>
            <Link href={ROUTES.SIGN_IN} className="py-2">
              <Button size="sm" variant="secondary" className="w-full">Sign In</Button>
            </Link>
            <Link href={ROUTES.SIGN_UP} className="py-2">
              <Button size="sm" className="w-full">Sign Up</Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
} 