import { resolve } from 'path';

export default {
  mode: 'development', 
  entry: './src/index.js', 
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


