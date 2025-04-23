import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Button } from '../../../components/ui/button';
import { BaseLayout } from '../../../components/layout/base-layout';
import { ThreadCard } from '../../../components/forum/thread-card';

// Mock data for categories
const categories = [
  { 
    name: 'General Discussion', 
    description: 'Discuss any topic related to our community.', 
    threadCount: 128, 
    slug: 'general-discussion' 
  },
  { 
    name: 'Technology', 
    description: 'Share news and discussions about the latest tech trends.', 
    threadCount: 85, 
    slug: 'technology' 
  },
  // ... add more categories if needed
];

// Mock data for threads
const mockThreads = {
  'general-discussion': [
    {
      title: 'Welcome to our forum!',
      author: 'Admin',
      replyCount: 25,
      lastActivityTime: '2 hours ago',
      slug: 'welcome-to-our-forum'
    },
    {
      title: 'Forum rules and guidelines',
      author: 'Moderator',
      replyCount: 12,
      lastActivityTime: '1 day ago',
      slug: 'forum-rules-and-guidelines'
    },
    {
      title: 'Introduce yourself here!',
      author: 'Community Manager',
      replyCount: 156,
      lastActivityTime: '5 minutes ago',
      slug: 'introduce-yourself-here'
    },
    {
      title: 'Feedback and suggestions thread',
      author: 'Admin',
      replyCount: 48,
      lastActivityTime: '3 hours ago',
      slug: 'feedback-and-suggestions-thread'
    }
  ],
  'technology': [
    {
      title: 'The future of AI in everyday life',
      author: 'TechEnthusiast',
      replyCount: 78,
      lastActivityTime: '30 minutes ago',
      slug: 'future-of-ai-in-everyday-life'
    },
    {
      title: 'New smartphone releases discussion',
      author: 'GadgetGuru',
      replyCount: 45,
      lastActivityTime: '2 hours ago',
      slug: 'new-smartphone-releases-discussion'
    },
    {
      title: 'Best programming languages to learn in 2023',
      author: 'CodeMaster',
      replyCount: 92,
      lastActivityTime: '1 hour ago',
      slug: 'best-programming-languages-to-learn-in-2023'
    }
  ]
};

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = params;
  
  // Find the category
  const category = categories.find(cat => cat.slug === slug);
  
  // If category not found, return 404
  if (!category) {
    notFound();
  }
  
  // Get threads for this category
  const threads = mockThreads[slug as keyof typeof mockThreads] || [];
  
  return (
    <BaseLayout>
      <div className="container py-12">
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-4">
            <div>
              <h1 className="text-3xl font-bold">{category.name}</h1>
              <p className="text-muted-foreground">{category.description}</p>
            </div>
            <Link href={`/categories/${slug}/create`}>
              <Button>Create Thread</Button>
            </Link>
          </div>
          <div className="flex gap-2 text-sm">
            <Link href="/categories" className="text-primary hover:underline">
              Categories
            </Link>
            <span className="text-muted-foreground">/</span>
            <span>{category.name}</span>
          </div>
        </div>

        <div className="space-y-4">
          {threads.length > 0 ? (
            threads.map((thread) => (
              <ThreadCard
                key={thread.slug}
                title={thread.title}
                author={thread.author}
                replyCount={thread.replyCount}
                lastActivityTime={thread.lastActivityTime}
                slug={thread.slug}
                categorySlug={slug}
              />
            ))
          ) : (
            <div className="text-center py-12 bg-card rounded-lg border border-border">
              <h3 className="text-xl font-semibold mb-2">No threads yet</h3>
              <p className="text-muted-foreground mb-6">
                Be the first to start a discussion in this category!
              </p>
              <Link href={`/categories/${slug}/create`}>
                <Button>Create Thread</Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </BaseLayout>
  );
} 