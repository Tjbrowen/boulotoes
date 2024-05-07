import { fileURLToPath } from 'url';
import { resolve, dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default {
  mode: 'development', 
  entry: './src/App.jsx', 
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  
  resolve: {
    alias: {
      '@prisma/client': new URL('node_modules/@prisma/client', import.meta.url).pathname,
    },
  },
};


