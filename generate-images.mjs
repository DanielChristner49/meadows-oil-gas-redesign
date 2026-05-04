import { GoogleGenAI } from '/Users/danielchristner/.gemini/extensions/nanobanana/mcp-server/node_modules/@google/genai/dist/node/index.mjs';
import fs from 'fs';
import path from 'path';

const API_KEY = process.env.NANOBANANA_API_KEY || process.env.NANOBANANA_GEMINI_API_KEY || process.env.GEMINI_API_KEY;
if (!API_KEY) { console.error('ERROR: Set NANOBANANA_API_KEY.'); process.exit(1); }

const ai = new GoogleGenAI({ apiKey: API_KEY });
const MODEL = 'imagen-4.0-fast-generate-001';
const OUT_DIR = '/Users/danielchristner/meadows-oil-gas-redesign/public/images';

const IMAGES = [
  // --- GALLERY 01–07 (replace — some had people) ---
  { file: 'gallery-01.jpg', prompt: 'Multiple pump jacks of various sizes across vast West Texas plains at golden hour, aerial view, warm amber light, oil field infrastructure, no people' },
  { file: 'gallery-02.jpg', prompt: 'Close-up of beam pump jack mechanical head and walking beam, clear blue sky, industrial detail, oil field equipment on land, no people' },
  { file: 'gallery-03.jpg', prompt: 'Row of medium pump jacks silhouetted against dramatic orange and purple sunset, West Texas flat plains, no people, wide shot' },
  { file: 'gallery-04.jpg', prompt: 'Large industrial beam pump jack operating in arid desert landscape, dry terrain, daytime, no people, wide establishing shot' },
  { file: 'gallery-05.jpg', prompt: 'Tank battery with multiple cylindrical oil storage tanks and separator equipment, pipeline connections, aerial view, no people, industrial oil infrastructure' },
  { file: 'gallery-06.jpg', prompt: 'Small walking beam pump jack on flat agricultural land, blue sky with dramatic clouds, no people, wide landscape shot' },
  { file: 'gallery-07.jpg', prompt: 'Oil field at night with illuminated pump jacks visible under stars, long exposure photography, no people, atmospheric' },

  // --- GALLERY 17–30 (new — expand gallery to 30 images) ---
  { file: 'gallery-17.jpg', prompt: 'Modern data center building exterior at night, illuminated glass facade and server cooling units, no people, architectural photography' },
  { file: 'gallery-18.jpg', prompt: 'Data center server corridor with rows of illuminated blue and white server racks stretching into distance, no people, dramatic lighting' },
  { file: 'gallery-19.jpg', prompt: 'Aerial view of massive Permian Basin oil field with dozens of pump jacks on flat Texas plains, golden hour, no people' },
  { file: 'gallery-20.jpg', prompt: 'Large beam pump jack against dramatic dark stormy sky with lightning, oil field on land, no people, cinematic' },
  { file: 'gallery-21.jpg', prompt: 'Oil storage tank farm aerial view, circular white tanks in geometric arrangement, pipeline network, no people' },
  { file: 'gallery-22.jpg', prompt: 'Small pump jack on frost-covered winter landscape, ice on ground, cold morning light, no people, rural oil production' },
  { file: 'gallery-23.jpg', prompt: 'Cluster of different-sized pump jacks operating in oil field, small medium and large jacks together, no people, industrial' },
  { file: 'gallery-24.jpg', prompt: 'Data center cooling towers and HVAC equipment on large industrial rooftop, exterior architecture, no people' },
  { file: 'gallery-25.jpg', prompt: 'Miniature pump jack on rocky terrain, small-scale oil production on dry land, no people, close-up perspective' },
  { file: 'gallery-26.jpg', prompt: 'Oil field pipeline network stretching across flat plains horizon, aerial photography, industrial infrastructure, no people' },
  { file: 'gallery-27.jpg', prompt: 'Large pump jack beside tall wind turbine on West Texas plains, energy infrastructure, golden hour light, no people' },
  { file: 'gallery-28.jpg', prompt: 'Close-up of pump jack counterweight and crank mechanism, mechanical engineering detail, oil field equipment, no people' },
  { file: 'gallery-29.jpg', prompt: 'Data center server room corridor from end perspective, deep depth, glowing server racks lining both walls, no people' },
  { file: 'gallery-30.jpg', prompt: 'Oil field at twilight with pump jacks and gas flare stack burning orange flame, atmospheric, dramatic sky, no people' },

  // --- HERO (replace existing) ---
  { file: 'hero.jpg', prompt: 'Ultra-wide cinematic panoramic West Texas oil field at golden hour, 15 pump jacks of various sizes stretching to horizon across flat plains, dramatic golden sky with clouds, no people, epic scale' },

  // --- ABOUT PAGE ---
  { file: 'about-hero.jpg', prompt: 'Expansive Texas oil field viewed from above, flat horizon to horizon, dozens of pump jacks of various sizes, no people, aerial photography' },
  { file: 'about-history.jpg', prompt: 'Side-by-side vintage style pump jack and modern pump jack in oil field landscape, Texas plains, no people, comparison shot' },
  { file: 'about-datacenter.jpg', prompt: 'Large modern data center facility exterior, clean architectural design, surrounded by landscaping, daytime, no people' },
  { file: 'about-infrastructure.jpg', prompt: 'Aerial view of oil field pipeline grid and pump jack network spread across Texas landscape, industrial infrastructure, no people' },

  // --- SERVICES PAGE ---
  { file: 'services-hero.jpg', prompt: 'Bird\'s-eye aerial view of active oil lease with multiple pump jacks, dirt roads, and well pads, West Texas, no people' },
  { file: 'services-brokerage.jpg', prompt: 'Rolling Texas plains with scattered oil pump jacks of various sizes, property land parcels visible from above, no people, golden light' },
  { file: 'services-technical.jpg', prompt: 'Data center server room interior, rows of technical equipment and server racks lit in blue and white, no people, wide angle' },
  { file: 'services-wind.jpg', prompt: 'Wind turbines with small and medium pump jacks in foreground on open Texas plains, energy landscape, golden hour, no people' },
];

async function generateImage(prompt, outputPath) {
  const response = await ai.models.generateImages({
    model: MODEL,
    prompt,
    config: { numberOfImages: 1 },
  });
  const imageBytes = response?.generatedImages?.[0]?.image?.imageBytes;
  if (!imageBytes) throw new Error('No image bytes in response');
  const buffer = Buffer.from(imageBytes, 'base64');
  fs.writeFileSync(outputPath, buffer);
  return buffer.length;
}

async function compress(filePath) {
  const { exec } = await import('child_process');
  const { promisify } = await import('util');
  const execAsync = promisify(exec);
  await execAsync(`sips -s format jpeg -s formatOptions 80 --resampleWidth 1200 "${filePath}" --out "${filePath}"`);
}

async function main() {
  console.log(`Model: ${MODEL} | Generating ${IMAGES.length} images\n`);
  let ok = 0, fail = 0;

  for (const img of IMAGES) {
    const outPath = path.join(OUT_DIR, img.file);
    process.stdout.write(`[${ok + fail + 1}/${IMAGES.length}] ${img.file} ... `);
    try {
      const bytes = await generateImage(img.prompt, outPath);
      await compress(outPath);
      const afterKB = Math.round(fs.statSync(outPath).size / 1024);
      console.log(`✓ ${afterKB}KB`);
      ok++;
      await new Promise(r => setTimeout(r, 1000));
    } catch (err) {
      console.log(`✗ ${err.message.slice(0, 80)}`);
      fail++;
    }
  }
  console.log(`\nDone: ${ok} generated, ${fail} failed`);
}

main().catch(console.error);
