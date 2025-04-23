'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useParams, notFound } from 'next/navigation';
import { BaseLayout } from '../../../../../components/layout/base-layout';
import { Post } from '../../../../../components/forum/post';
import { PostForm } from '../../../../../components/forum/post-form';

// Mock data for threads
const mockThreads = {
  'welcome-to-our-forum': {
    title: 'Welcome to our forum!',
    content: 'Hello everyone, and welcome to our new forum! We\'re excited to build this community together. Feel free to introduce yourself and start discussions on topics that interest you.',
    author: 'Admin',
    createdAt: '3 days ago',
    viewCount: 350,
    posts: [
      {
        id: '1',
        author: 'Admin',
        avatar: '',
        content: 'Hello everyone, and welcome to our new forum! We\'re excited to build this community together. Feel free to introduce yourself and start discussions on topics that interest you.',
        timestamp: '3 days ago',
        likes: 24,
        dislikes: 0,
        isAuthor: true
      },
      {
        id: '2',
        author: 'JaneDoe',
        avatar: '',
        content: 'Thanks for creating this forum! Looking forward to engaging in some interesting discussions.',
        timestamp: '3 days ago',
        likes: 12,
        dislikes: 0,
        isAuthor: false
      },
      {
        id: '3',
        author: 'JohnSmith',
        avatar: '',
        content: 'Great to be here! I\'m interested in tech and gaming discussions primarily.',
        timestamp: '2 days ago',
        likes: 8,
        dislikes: 0,
        isAuthor: false
      },
      {
        id: '4',
        author: 'TechEnthusiast',
        avatar: '',
        content: 'Hello everyone! I\'m passionate about AI and machine learning. Looking forward to sharing ideas with like-minded people.',
        timestamp: '1 day ago',
        likes: 15,
        dislikes: 0,
        isAuthor: false
      }
    ]
  },
  'future-of-ai-in-everyday-life': {
    title: 'The future of AI in everyday life',
    content: 'AI is increasingly becoming a part of our daily lives. From smartphones to smart homes, it\'s everywhere. What do you think the future holds for AI integration in our daily routines?',
    author: 'TechEnthusiast',
    createdAt: '1 day ago',
    viewCount: 142,
    posts: [
      {
        id: '1',
        author: 'TechEnthusiast',
        avatar: '',
        content: 'AI is increasingly becoming a part of our daily lives. From smartphones to smart homes, it\'s everywhere. What do you think the future holds for AI integration in our daily routines?',
        timestamp: '1 day ago',
        likes: 32,
        dislikes: 2,
        isAuthor: true
      },
      {
        id: '2',
        author: 'AIResearcher',
        avatar: '',
        content: 'I believe we\'re still in the early stages of AI integration. The future will likely see AI becoming more personalized and contextually aware, reducing the need for explicit commands or interactions.',
        timestamp: '1 day ago',
        likes: 28,
        dislikes: 0,
        isAuthor: false
      },
      {
        id: '3',
        author: 'PrivacyAdvocate',
        avatar: '',
        content: 'While AI offers many benefits, we need to ensure proper regulations are in place to protect privacy and prevent misuse of personal data.',
        timestamp: '20 hours ago',
        likes: 18,
        dislikes: 3,
        isAuthor: false
      }
    ]
  }
};

export default function ThreadPage() {
  const params = useParams();
  const threadSlug = params.threadSlug as string;
  const categorySlug = params.categorySlug as string;
  
  const [replyToId, setReplyToId] = useState<string | null>(null);
  const [posts, setPosts] = useState(mockThreads[threadSlug as keyof typeof mockThreads]?.posts || []);

  // If thread not found, return 404
  if (!mockThreads[threadSlug as keyof typeof mockThreads]) {
    notFound();
  }
  
  const thread = mockThreads[threadSlug as keyof typeof mockThreads];
  
  const handleReply = (id: string) => {
    setReplyToId(id);
    // Scroll to the reply form
    setTimeout(() => {
      const replyForm = document.getElementById('reply-form');
      if (replyForm) {
        replyForm.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };
  
  const handleSubmitReply = async (content: string) => {
    // Normally, this would be an API call to submit the reply
    const newPost = {
      id: `post-${posts.length + 1}`,
      author: 'CurrentUser', // This would be the logged-in user
      avatar: '',
      content,
      timestamp: 'Just now',
      likes: 0,
      dislikes: 0,
      isAuthor: true
    };
    
    setPosts([...posts, newPost]);
    setReplyToId(null);
    return Promise.resolve();
  };
  
  return (
    <BaseLayout>
      <div className="container py-12">
        <div className="mb-8">
          <div className="flex flex-col gap-2 mb-6">
            <div className="flex gap-2 text-sm">
              <Link href="/categories" className="text-primary hover:underline">
                Categories
              </Link>
              <span className="text-muted-foreground">/</span>
              <Link href={`/categories/${categorySlug}`} className="text-primary hover:underline">
                {categorySlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
              </Link>
              <span className="text-muted-foreground">/</span>
              <span className="truncate">{thread.title}</span>
            </div>
            <h1 className="text-3xl font-bold">{thread.title}</h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <span>Started by {thread.author}</span>
              <span>•</span>
              <span>{thread.createdAt}</span>
              <span>•</span>
              <span>{thread.viewCount} views</span>
            </div>
          </div>
          
          <div className="space-y-6">
            {posts.map((post) => (
              <Post
                key={post.id}
                id={post.id}
                author={post.author}
                avatar={post.avatar}
                content={post.content}
                timestamp={post.timestamp}
                likes={post.likes}
                dislikes={post.dislikes}
                isAuthor={post.isAuthor}
                onReply={handleReply}
              />
            ))}
          </div>
          
          <div id="reply-form" className="mt-8">
            <h3 className="text-xl font-semibold mb-4">
              {replyToId ? 'Post a reply' : 'Join the discussion'}
            </h3>
            <PostForm
              onSubmit={handleSubmitReply}
              placeholder="Write your reply here..."
              buttonText="Post Reply"
              isReply={!!replyToId}
            />
          </div>
        </div>
      </div>
    </BaseLayout>
  );
} 