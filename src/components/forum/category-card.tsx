'use client';

import Link from 'next/link';
import { MessageSquare } from 'lucide-react';

interface CategoryCardProps {
  name: string;
  description: string;
  threadCount: number;
  slug: string;
}

export function CategoryCard({ name, description, threadCount, slug }: CategoryCardProps) {
  return (
    <Link href={`/categories/${slug}`}>
      <div className="group flex flex-col h-full p-6 rounded-lg border border-border bg-card transition-all hover:shadow-md hover:border-primary/20">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold group-hover:text-primary">{name}</h3>
          <div className="flex items-center gap-1 text-muted-foreground">
            <MessageSquare size={16} />
            <span className="text-sm">{threadCount}</span>
          </div>
        </div>
        <p className="text-sm text-muted-foreground flex-grow">{description}</p>
      </div>
    </Link>
  );
} 