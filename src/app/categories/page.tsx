import { BaseLayout } from '../../components/layout/base-layout';
import { CategoryCard } from '../../components/forum/category-card';

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
  { 
    name: 'Lifestyle', 
    description: 'Discussions about daily life, hobbies, and personal interests.', 
    threadCount: 56, 
    slug: 'lifestyle' 
  },
  { 
    name: 'Health & Fitness', 
    description: 'Tips, advice, and discussions about staying healthy and fit.', 
    threadCount: 38, 
    slug: 'health-fitness' 
  },
  { 
    name: 'Music', 
    description: 'Share and discuss your favorite music, artists, and genres.', 
    threadCount: 45, 
    slug: 'music' 
  },
  { 
    name: 'Movies & TV', 
    description: 'Talk about the latest films, shows, and entertainment news.', 
    threadCount: 52, 
    slug: 'movies-tv' 
  },
];

export default function CategoriesPage() {
  return (
    <BaseLayout>
      <div className="container py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Categories</h1>
          <p className="text-muted-foreground">
            Browse all discussion categories to find topics that interest you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.slug}
              name={category.name}
              description={category.description}
              threadCount={category.threadCount}
              slug={category.slug}
            />
          ))}
        </div>
      </div>
    </BaseLayout>
  );
} 