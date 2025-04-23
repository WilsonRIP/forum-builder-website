'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { Button } from '../../../../components/ui/button';
import { BaseLayout } from '../../../../components/layout/base-layout';

export default function CreateThreadPage() {
  const params = useParams();
  const router = useRouter();
  const categorySlug = params.slug as string;
  
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;
    
    setIsSubmitting(true);
    
    // In a real app, this would be an API call to create the thread
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Create a slug from the title
      const threadSlug = title
        .toLowerCase()
        .replace(/[^\w\s]/g, '')
        .replace(/\s+/g, '-');
      
      // Redirect to the newly created thread
      router.push(`/categories/${categorySlug}/threads/${threadSlug}`);
    } catch (error) {
      console.error('Error creating thread:', error);
      setIsSubmitting(false);
    }
  };
  
  return (
    <BaseLayout>
      <div className="container py-12">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/categories" className="text-primary hover:underline">
                Categories
              </Link>
              <span className="text-muted-foreground">/</span>
              <Link href={`/categories/${categorySlug}`} className="text-primary hover:underline">
                {categorySlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </Link>
              <span className="text-muted-foreground">/</span>
              <span>Create Thread</span>
            </div>
            <h1 className="text-3xl font-bold">Create a New Thread</h1>
            <p className="text-muted-foreground mt-2">
              Start a new discussion in the {categorySlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} category
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="title" className="block text-sm font-medium">
                Thread Title
              </label>
              <input
                id="title"
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-3 py-2 bg-background rounded-md border border-input focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter a descriptive title"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="content" className="block text-sm font-medium">
                Content
              </label>
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full min-h-[200px] px-3 py-2 bg-background rounded-md border border-input resize-y focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Write your post content here..."
                required
              />
            </div>
            
            <div className="flex justify-end gap-4">
              <Link href={`/categories/${categorySlug}`}>
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </Link>
              <Button type="submit" disabled={isSubmitting || !title.trim() || !content.trim()}>
                {isSubmitting ? 'Creating...' : 'Create Thread'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </BaseLayout>
  );
} 