import path from 'path';

export default {
  // other webpack configuration options...
  resolve: {
    alias: {
      '@prisma/client': path.resolve(__dirname, 'node_modules/@prisma/client'),
    },
  },
};
