import { resolve } from 'path';

export default {
  mode: 'development', 
  entry: './src/App.jsx', 
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  resolve: {
    alias: {
      '@prisma/client': new URL('node_modules/@prisma/client', import.meta.url).pathname,
    },
    extensions: ['.js', '.jsx'] 
  },
};


