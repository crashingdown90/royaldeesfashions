import { articles } from './src/data/articles';

let issues = 0;
console.log('--- Image Count Audit ---');
articles.forEach((article, index) => {
  // Count img tags
  const imgCount = (article.content.match(/<img/g) || []).length;
  if (imgCount < 2 || imgCount > 5) {
    console.log(`[${index + 1}] "${article.title}": ${imgCount} images ❌`);
    issues++;
  } else {
    // console.log(`[${index + 1}] "${article.title}": ${imgCount} images ✅`);
  }
});

console.log('----------------------------');
console.log(`Total Articles: ${articles.length}`);
console.log(`Articles NOT meeting the 2-5 images requirement: ${issues}`);
