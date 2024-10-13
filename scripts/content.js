const article = document.querySelector("article");

if (article) {
  const text = article.textContent;

  // Regular expression for non-Japanese (counting words)
  const wordMatchRegExp = /[^\s]+/g;
  // Regular expression for Japanese (counting characters)
  const japaneseMatchRegExp = /[\u3040-\u30FF\u4E00-\u9FFF\uFF66-\uFF9F]/g;

  // Match non-Japanese words
  const words = text.matchAll(wordMatchRegExp);
  // Match Japanese characters
  const japaneseChars = text.matchAll(japaneseMatchRegExp);

  // Convert both iterators to arrays and get their lengths
  const wordCount = [...words].length;
  const japaneseCharCount = [...japaneseChars].length;

  // Estimate reading time for non-Japanese (100 words per minute) 
  // and Japanese (400 characters per minute)
  const readingTime = Math.round(wordCount / 150) + Math.round(japaneseCharCount / 400);

  // Create and style the reading time badge
  const badge = document.createElement("p");
  badge.classList.add("color-secondary-text", "type--caption");
  badge.textContent = `⏱️ ${readingTime} min read`;

  // Support for API reference docs
  const heading = article.querySelector("h1");
  // Support for article docs with date
  const date = article.querySelector("time")?.parentNode;

  (date ?? heading).insertAdjacentElement("afterend", badge);
}
