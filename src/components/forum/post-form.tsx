'use client';

import { useState } from 'react';
import { Button } from '../ui/button';

interface PostFormProps {
  onSubmit: (content: string) => void;
  placeholder?: string;
  buttonText?: string;
  initialContent?: string;
  isReply?: boolean;
}

export function PostForm({
  onSubmit,
  placeholder = 'Write your message here...',
  buttonText = 'Post',
  initialContent = '',
  isReply = false,
}: PostFormProps) {
  const [content, setContent] = useState(initialContent);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim()) return;

    setIsSubmitting(true);
    try {
      await onSubmit(content);
      setContent('');
    } catch (error) {
      console.error('Failed to submit post:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`rounded-lg border border-border bg-card p-4 ${isReply ? 'mt-4' : ''}`}>
      <div className="space-y-4">
        <textarea
          className="w-full min-h-[120px] px-3 py-2 bg-background rounded-md border border-input resize-y focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder={placeholder}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        
        <div className="flex justify-end">
          <Button 
            type="submit" 
            disabled={isSubmitting || !content.trim()}
          >
            {isSubmitting ? 'Submitting...' : buttonText}
          </Button>
        </div>
      </div>
    </form>
  );
} 