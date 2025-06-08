'use client';

import { ProcessedSubstitution } from '@/types';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, MapPin, User, BookOpen, Info } from 'lucide-react';

interface SubstitutionCardProps {
  substitution: ProcessedSubstitution;
  className?: string;
}

// Category color mapping
const getCategoryColor = (type: string): string => {
  switch (type) {
    case 'Entfall':
      return 'border-l-[rgb(var(--color-entfall))] bg-[rgb(var(--color-entfall)/0.05)]';
    case 'Raumänderung':
      return 'border-l-[rgb(var(--color-raumaenderung))] bg-[rgb(var(--color-raumaenderung)/0.05)]';
    case 'Vertretung':
      return 'border-l-[rgb(var(--color-vertretung))] bg-[rgb(var(--color-vertretung)/0.05)]';
    case 'Sondereinsatz':
      return 'border-l-[rgb(var(--color-sondereinsatz))] bg-[rgb(var(--color-sondereinsatz)/0.05)]';
    case 'EVA':
      return 'border-l-[rgb(var(--color-eva))] bg-[rgb(var(--color-eva)/0.05)]';
    case 'Klausur':
      return 'border-l-[rgb(var(--color-klausur))] bg-[rgb(var(--color-klausur)/0.05)]';
    case 'Freisetzung':
      return 'border-l-[rgb(var(--color-freisetzung))] bg-[rgb(var(--color-freisetzung)/0.05)]';
    case 'Verlegung':
      return 'border-l-[rgb(var(--color-verlegung))] bg-[rgb(var(--color-verlegung)/0.05)]';
    default:
      return 'border-l-[rgb(var(--color-sonstiges))] bg-[rgb(var(--color-sonstiges)/0.05)]';
  }
};

// Get badge variant based on substitution type
const getBadgeVariant = (type: string): "default" | "secondary" | "destructive" | "outline" => {
  switch (type) {
    case 'Entfall':
      return 'destructive';
    case 'Raumänderung':
    case 'Vertretung':
      return 'default';
    case 'EVA':
    case 'Freisetzung':
      return 'secondary';
    default:
      return 'outline';
  }
};

// Format time range for display
const formatTimeDisplay = (time: string, hours: string): string => {
  if (time && hours) {
    return `${hours}. Std. (${time})`;
  }
  if (time) {
    return time;
  }
  if (hours) {
    return `${hours}. Std.`;
  }
  return '';
};

export function SubstitutionCard({ substitution, className = '' }: SubstitutionCardProps) {
  const categoryColorClass = getCategoryColor(substitution.type);
  const badgeVariant = getBadgeVariant(substitution.type);
  const timeDisplay = formatTimeDisplay(substitution.time, substitution.hours);

  return (
    <Card className={`p-4 border-l-4 hover:shadow-md transition-shadow duration-200 ${categoryColorClass} ${className}`}>
      <div className="space-y-3">
        {/* Header with Class and Type */}
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-[rgb(var(--color-text))]">
            {substitution.group}
          </h3>
          <Badge variant={badgeVariant} className="text-sm">
            {substitution.type}
          </Badge>
        </div>

        {/* Time and Subject */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {timeDisplay && (
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-[rgb(var(--color-text-secondary))]" />
              <span className="text-sm text-[rgb(var(--color-text))]">
                {timeDisplay}
              </span>
            </div>
          )}
          
          {substitution.subject && (
            <div className="flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-[rgb(var(--color-text-secondary))]" />
              <span className="text-sm text-[rgb(var(--color-text))]">
                {substitution.subject}
              </span>
            </div>
          )}
        </div>

        {/* Room and Teacher */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {substitution.room && (
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[rgb(var(--color-text-secondary))]" />
              <span className="text-sm text-[rgb(var(--color-text))]">
                {substitution.room}
              </span>
            </div>
          )}
          
          {substitution.teacher && (
            <div className="flex items-center gap-2">
              <User className="h-4 w-4 text-[rgb(var(--color-text-secondary))]" />
              <span className="text-sm text-[rgb(var(--color-text))]">
                {substitution.teacher}
              </span>
            </div>
          )}
        </div>

        {/* Info/Notes */}
        {substitution.info && (
          <div className="flex items-start gap-2 pt-2 border-t border-[rgb(var(--color-border)/0.2)]">
            <Info className="h-4 w-4 text-[rgb(var(--color-text-secondary))] mt-0.5 shrink-0" />
            <span className="text-sm text-[rgb(var(--color-text-secondary))] leading-relaxed">
              {substitution.info}
            </span>
          </div>
        )}
      </div>
    </Card>
  );
} 