import { BaseLayout } from '../../components/layout/base-layout';
import { ThreadCard } from '../../components/forum/thread-card';

// Mock data for recent threads (sorted by most recent)
const recentThreads = [
  {
    title: 'Introduce yourself here!',
    author: 'Community Manager',
    replyCount: 156,
    lastActivityTime: '5 minutes ago',
    slug: 'introduce-yourself-here',
    categorySlug: 'general-discussion'
  },
  {
    title: 'The future of AI in everyday life',
    author: 'TechEnthusiast',
    replyCount: 78,
    lastActivityTime: '30 minutes ago',
    slug: 'future-of-ai-in-everyday-life',
    categorySlug: 'technology'
  },
  {
    title: 'Best programming languages to learn in 2023',
    author: 'CodeMaster',
    replyCount: 92,
    lastActivityTime: '1 hour ago',
    slug: 'best-programming-languages-to-learn-in-2023',
    categorySlug: 'technology'
  },
  {
    title: 'New smartphone releases discussion',
    author: 'GadgetGuru',
    replyCount: 45,
    lastActivityTime: '2 hours ago',
    slug: 'new-smartphone-releases-discussion',
    categorySlug: 'technology'
  },
  {
    title: 'Welcome to our forum!',
    author: 'Admin',
    replyCount: 25,
    lastActivityTime: '2 hours ago',
    slug: 'welcome-to-our-forum',
    categorySlug: 'general-discussion'
  },
  {
    title: 'Feedback and suggestions thread',
    author: 'Admin',
    replyCount: 48,
    lastActivityTime: '3 hours ago',
    slug: 'feedback-and-suggestions-thread',
    categorySlug: 'general-discussion'
  },
  {
    title: 'Forum rules and guidelines',
    author: 'Moderator',
    replyCount: 12,
    lastActivityTime: '1 day ago',
    slug: 'forum-rules-and-guidelines',
    categorySlug: 'general-discussion'
  }
];

export default function RecentPage() {
  return (
    <BaseLayout>
      <div className="container py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Recent Threads</h1>
          <p className="text-muted-foreground">
            The most recently active discussions from across all categories
          </p>
        </div>

        <div className="space-y-4">
          {recentThreads.map((thread) => (
            <ThreadCard
              key={`${thread.categorySlug}-${thread.slug}`}
              title={thread.title}
              author={thread.author}
              replyCount={thread.replyCount}
              lastActivityTime={thread.lastActivityTime}
              slug={thread.slug}
              categorySlug={thread.categorySlug}
            />
          ))}
        </div>
      </div>
    </BaseLayout>
  );
} 