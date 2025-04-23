'use client';

import Link from 'next/link';
import { MessageSquare, Clock } from 'lucide-react';

interface ThreadCardProps {
  title: string;
  author: string;
  replyCount: number;
  lastActivityTime: string;
  slug: string;
  categorySlug: string;
}

export function ThreadCard({ 
  title, 
  author, 
  replyCount, 
  lastActivityTime, 
  slug, 
  categorySlug 
}: ThreadCardProps) {
  return (
    <Link href={`/categories/${categorySlug}/threads/${slug}`}>
      <div className="group flex flex-col p-4 rounded-lg border border-border bg-card transition-all hover:shadow-md hover:border-primary/20">
        <h3 className="text-lg font-medium group-hover:text-primary line-clamp-2">{title}</h3>
        
        <div className="flex flex-col sm:flex-row sm:justify-between mt-3">
          <div className="flex items-center text-sm text-muted-foreground">
            <span>by {author}</span>
          </div>
          
          <div className="flex items-center space-x-4 mt-2 sm:mt-0">
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <MessageSquare size={14} />
              <span>{replyCount} replies</span>
            </div>
            
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <Clock size={14} />
              <span>{lastActivityTime}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
} 