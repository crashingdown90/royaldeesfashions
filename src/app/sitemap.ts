import { MetadataRoute } from 'next';
import { articles } from '@/data/articles';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://royaldeesfashion.com';

  const articleUrls = articles.map((article) => ({
    url: `${baseUrl}/editorial/${article.slug}`,
    lastModified: new Date(article.date).toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const standardPages = [
    '',
    '/about',
    '/contact',
    '/privacy-policy',
    '/terms-and-conditions',
    '/disclaimer',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'yearly' as const,
    priority: route === '' ? 1 : 0.5,
  }));

  return [...standardPages, ...articleUrls];
}
