'use client';

import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/theme-toggle';

interface HeaderProps {
  onMenuToggle: () => void;
  onNavigateHome: () => void;
}

export function Header({ onMenuToggle, onNavigateHome }: HeaderProps) {
  return (
    <header className="sticky top-0 z-10 bg-[rgb(var(--color-surface))] border-b border-[rgb(var(--color-border)/0.2)] shadow-sm">
      <div className="flex items-center justify-between px-4 py-3 max-w-7xl mx-auto">
        {/* Mobile menu toggle */}
        <Button
          variant="ghost"
          size="icon"
          onClick={onMenuToggle}
          className="md:hidden text-[rgb(var(--color-text))] hover:bg-[rgb(var(--color-secondary)/0.12)]"
          aria-label="Open menu"
        >
          <Menu className="h-6 w-6" />
        </Button>

        {/* App title */}
        <h1
          className="text-xl font-semibold text-[rgb(var(--color-text))] cursor-pointer hover:text-[rgb(var(--color-primary))] transition-colors duration-150 rounded-sm px-2 py-1 -mx-2 -my-1 hover:bg-[rgb(var(--color-secondary)/0.12)] focus-visible:outline-[rgb(var(--color-primary))] focus-visible:outline-2 focus-visible:outline-offset-2"
          onClick={onNavigateHome}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              onNavigateHome();
            }
          }}
          tabIndex={0}
          role="button"
          aria-label="Zur Hauptseite"
        >
          Vertretungsplan
        </h1>

        <div className="flex items-center gap-4">
          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-4">
            <a
              href="#impressum"
              className="text-[rgb(var(--color-text-secondary))] hover:text-[rgb(var(--color-primary))] transition-colors duration-150"
              onClick={(e) => {
                e.preventDefault();
                // This will be handled by the parent component
              }}
            >
              Impressum
            </a>
            <a
              href="#datenschutz"
              className="text-[rgb(var(--color-text-secondary))] hover:text-[rgb(var(--color-primary))] transition-colors duration-150"
              onClick={(e) => {
                e.preventDefault();
                // This will be handled by the parent component
              }}
            >
              Datenschutz
            </a>
          </nav>

          {/* Theme toggle */}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
} 