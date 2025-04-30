import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create images directory if it doesn't exist
const imagesDir = path.join(process.cwd(), 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Image URLs from Unsplash
const images = {
  'hero-cake.jpg': 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=1920&q=80',
  'birthday-cake.jpg': 'https://images.unsplash.com/photo-1562777717-dc6984f65a63?w=800&q=80',
  'wedding-cake.jpg': 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=800&q=80',
  'cupcakes.jpg': 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=800&q=80',
  'fruit-cake.jpg': 'https://images.unsplash.com/photo-1560180474-e8563fd75bab?w=800&q=80',
  'birthday-cake-1.jpg': 'https://images.unsplash.com/photo-1562777717-dc6984f65a63?w=800&q=80',
  'birthday-cake-2.jpg': 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80',
  'birthday-cake-3.jpg': 'https://images.unsplash.com/photo-1551106652-a5bcf4b29ab6?w=800&q=80',
  'birthday-cake-4.jpg': 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&q=80',
  'wedding-cake-1.jpg': 'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=800&q=80',
  'wedding-cake-2.jpg': 'https://images.unsplash.com/photo-1522307837370-cc113a36b784?w=800&q=80',
  'wedding-cake-3.jpg': 'https://images.unsplash.com/photo-1535254973040-607b474cb50d?w=800&q=80',
  'wedding-cake-4.jpg': 'https://images.unsplash.com/photo-1560180474-e8563fd75bab?w=800&q=80',
  'cupcakes-1.jpg': 'https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?w=800&q=80',
  'cupcakes-2.jpg': 'https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=800&q=80',
  'cupcakes-3.jpg': 'https://images.unsplash.com/photo-1519869325930-281384150729?w=800&q=80',
  'cupcakes-4.jpg': 'https://images.unsplash.com/photo-1587668178277-295251f900ce?w=800&q=80',
  'fruit-cake-1.jpg': 'https://images.unsplash.com/photo-1560180474-e8563fd75bab?w=800&q=80',
  'fruit-cake-2.jpg': 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=800&q=80',
  'fruit-cake-3.jpg': 'https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?w=800&q=80',
  'fruit-cake-4.jpg': 'https://images.unsplash.com/photo-1542124948-dc391252a940?w=800&q=80',
};

// Function to download an image
function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(path.join(imagesDir, filename));
    
    const request = https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    }, (response) => {
      // Handle redirects
      if (response.statusCode === 301 || response.statusCode === 302) {
        fs.unlink(path.join(imagesDir, filename), () => {});
        downloadImage(response.headers.location, filename)
          .then(resolve)
          .catch(reject);
        return;
      }

      // Check if we got a successful response
      if (response.statusCode !== 200) {
        fs.unlink(path.join(imagesDir, filename), () => {});
        reject(new Error(`Failed to download ${filename}: HTTP ${response.statusCode}`));
        return;
      }

      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        // Verify file size
        const stats = fs.statSync(path.join(imagesDir, filename));
        if (stats.size < 1000) { // Less than 1KB is probably an error
          fs.unlink(path.join(imagesDir, filename), () => {});
          reject(new Error(`Downloaded file ${filename} is too small (${stats.size} bytes)`));
          return;
        }
        console.log(`Downloaded ${filename} (${stats.size} bytes)`);
        resolve();
      });
    });

    request.on('error', (err) => {
      fs.unlink(path.join(imagesDir, filename), () => {});
      console.error(`Error downloading ${filename}:`, err.message);
      reject(err);
    });

    // Set a timeout
    request.setTimeout(30000, () => {
      request.destroy();
      fs.unlink(path.join(imagesDir, filename), () => {});
      reject(new Error(`Timeout downloading ${filename}`));
    });
  });
}

// Download all images
async function downloadAllImages() {
  console.log('Starting image downloads...');
  
  // Delete existing images first
  const files = fs.readdirSync(imagesDir);
  for (const file of files) {
    fs.unlinkSync(path.join(imagesDir, file));
  }
  
  for (const [filename, url] of Object.entries(images)) {
    try {
      await downloadImage(url, filename);
    } catch (error) {
      console.error(`Failed to download ${filename}:`, error.message);
      // Try one more time
      try {
        console.log(`Retrying download of ${filename}...`);
        await downloadImage(url, filename);
      } catch (retryError) {
        console.error(`Failed to download ${filename} after retry:`, retryError.message);
      }
    }
  }
  console.log('All downloads completed!');
}

downloadAllImages(); 