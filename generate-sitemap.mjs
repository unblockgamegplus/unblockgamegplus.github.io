import fs from 'fs';
import path from 'path';

// URL Root
const baseUrl = 'https://unblockgamegplus.github.io';
const gamesJsonPath = path.resolve('public/games.json');
const sitemapPath = path.resolve('public/sitemap.xml');

try {
  // 1. Baca data games.json
  const rawData = fs.readFileSync(gamesJsonPath, 'utf-8');
  const games = JSON.parse(rawData);

  // 2. Buat header XML
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <!-- Homepage -->
  <url>
    <loc>${baseUrl}/</loc>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
`;

  // 3. Looping semua game
  games.forEach((game) => {
    // Karena menggunakan SPA Hash Routing:
    const gameUrl = `${baseUrl}/#/play?id=${game.id}`;
    
    // Ganti karakter khusus XML pada URL kalau diperlukan (misalnya & jadi &amp; walau id harusnya aman)
    const safeUrl = gameUrl.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    
    xml += `  <url>
    <loc>${safeUrl}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>\n`;
  });

  // 4. Tutup XML
  xml += `</urlset>`;

  // 5. Simpan file
  fs.writeFileSync(sitemapPath, xml);
  console.log(`✅ Sukses! Sitemap.xml berhasil di-generate. Total URl: ${games.length + 1}`);
  
} catch (error) {
  console.error("Gagal generate sitemap:", error.message);
}
