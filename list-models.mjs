import { GoogleGenAI } from '/Users/danielchristner/.gemini/extensions/nanobanana/mcp-server/node_modules/@google/genai/dist/node/index.mjs';

const ai = new GoogleGenAI({ apiKey: process.env.NANOBANANA_API_KEY });
const models = await ai.models.list();
for await (const model of models) {
  if (model.name?.includes('image') || model.name?.includes('imagen')) {
    console.log(model.name, '|', model.supportedActions?.join(', '));
  }
}
