// fetch-titles.mjs - Fetch game titles from individual game pages
// Usage: node fetch-titles.mjs

import { readFileSync, writeFileSync } from 'fs';

const games = JSON.parse(readFileSync('./src/games-bitbucket.json', 'utf-8'));
const BASE = 'https://unblocked-games-g-plus.bitbucket.io';

async function fetchTitle(id) {
  try {
    const res = await fetch(`${BASE}/go/class-${id}.html`, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0' },
      signal: AbortSignal.timeout(8000)
    });
    if (!res.ok) return null;
    const html = await res.text();
    // Extract from <title>X Unblocked</title>
    const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
    if (titleMatch) {
      // Remove " Unblocked", " - Play Online", " | Unblocked Games G+" etc.
      return titleMatch[1]
        .replace(/\s*[-|]\s*Unblocked Games.*$/i, '')
        .replace(/\s+Unblocked\s*$/i, '')
        .replace(/\s+Online\s*$/i, '')
        .trim();
    }
    return null;
  } catch {
    return null;
  }
}

async function main() {
  console.log(`📋 Fetching titles for ${games.length} games...\n`);
  
  const CONCURRENCY = 10; // fetch 10 at a time
  let done = 0;
  
  for (let i = 0; i < games.length; i += CONCURRENCY) {
    const batch = games.slice(i, i + CONCURRENCY);
    const results = await Promise.all(batch.map(g => fetchTitle(g.id)));
    
    batch.forEach((g, j) => {
      if (results[j]) {
        g.title = results[j];
      }
      done++;
    });
    
    const pct = Math.round((done / games.length) * 100);
    process.stdout.write(`\r  Progress: ${done}/${games.length} (${pct}%) | Last: ${batch[batch.length-1].id} -> ${results[results.length-1] || 'failed'}   `);
    
    // Small delay between batches
    await new Promise(r => setTimeout(r, 200));
  }
  
  console.log('\n\n✅ Done! Sample titles:');
  games.slice(0, 10).forEach(g => console.log(`  [${g.id}] ${g.title}`));
  
  writeFileSync('./src/games-bitbucket.json', JSON.stringify(games, null, 2));
  console.log('\n💾 Saved updated games-bitbucket.json');
}

main().catch(console.error);
