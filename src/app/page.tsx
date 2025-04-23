import Link from 'next/link';
import { Button } from '../components/ui/button';
import { BaseLayout } from '../components/layout/base-layout';
import { CategoryCard } from '../components/forum/category-card';
import { WEBSITE_NAME } from './libs/types';
import Image from 'next/image';
// Mock data for categories and recent threads
const featuredCategories = [
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
  { 
    name: 'Gaming', 
    description: 'All things related to video games, board games, and more.', 
    threadCount: 64, 
    slug: 'gaming' 
  },
  { 
    name: 'Art & Design', 
    description: 'Showcase your creative work and discuss design topics.', 
    threadCount: 42, 
    slug: 'art-design' 
  },
];

export default function Home() {
  return (
    <BaseLayout>
      <div className="container py-12 space-y-12">
        {/* Hero section */}
        <section className="text-center space-y-4 py-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            Welcome to {WEBSITE_NAME}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A modern discussion platform to connect, share ideas, and build a community.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Link href="/categories">
              <Button size="lg">Browse Categories</Button>
            </Link>
            <Link href="/signup">
              <Button size="lg" variant="outline">Sign Up</Button>
            </Link>
          </div>
        </section>

        {/* Featured Categories */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Featured Categories</h2>
            <Link href="/categories" className="text-primary hover:underline">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCategories.map((category) => (
              <CategoryCard
                key={category.slug}
                name={category.name}
                description={category.description}
                threadCount={category.threadCount}
                slug={category.slug}
              />
            ))}
          </div>
        </section>

        {/* Community features */}
        <section className="rounded-lg bg-card border border-border p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Join Our Community</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <strong>Create and participate in discussions</strong>
                    <p className="text-muted-foreground">Start your own threads or join existing conversations</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <strong>Connect with like-minded people</strong>
                    <p className="text-muted-foreground">Meet others who share your interests and passions</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <strong>Stay updated on latest trends</strong>
                    <p className="text-muted-foreground">Follow categories that interest you to never miss updates</p>
                  </div>
                </li>
              </ul>
              <div className="mt-6">
                <Link href="/signup">
                  <Button>Join Now</Button>
                </Link>
              </div>
            </div>
            <div className="hidden md:flex md:items-center md:justify-center bg-muted rounded-lg h-72">
              <div className="p-6 text-center">
                <p className="text-lg font-medium">Community Illustration</p>
                <p className="text-sm text-muted-foreground">
                  <Image src="/community.png" alt="Community Illustration" width={200} height={200} />
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </BaseLayout>
  );
}
