import { articles } from './src/data/articles';

let shortArticles = 0;
let missingMeta = 0;
const results = [];

articles.forEach((article, index) => {
  // Strip HTML tags to get raw text for word count
  const rawText = article.content.replace(/<[^>]*>?/gm, '');
  const wordCount = rawText.trim().split(/\s+/).length;
  
  const hasExcerpt = !!article.excerpt && article.excerpt.length > 10;
  const hasTitle = !!article.title;
  const hasAuthor = !!article.author;
  const hasCategory = !!article.category;

  const isShort = wordCount < 600;
  if (isShort) shortArticles++;
  
  const isMissingMeta = !hasExcerpt || !hasTitle || !hasAuthor || !hasCategory;
  if (isMissingMeta) missingMeta++;

  if (isShort || isMissingMeta) {
    results.push(`[${index + 1}] "${article.title}"`);
    results.push(`  - Word Count: ${wordCount} words ${isShort ? '❌ (Under 600)' : '✅'}`);
    results.push(`  - Metadata: ${isMissingMeta ? '❌ (Missing some meta: excerpt/title/author/category)' : '✅'}`);
  }
});

console.log(results.join('\n'));
console.log('----------------------------');
console.log(`Total Articles: ${articles.length}`);
console.log(`Short Articles (< 600 words): ${shortArticles}`);
console.log(`Articles Missing Meta: ${missingMeta}`);
