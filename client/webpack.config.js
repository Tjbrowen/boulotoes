import path from 'path';

export default {
  // other webpack configuration options...
  resolve: {
    alias: {
      '@prisma/client': new URL('node_modules/@prisma/client', import.meta.url).pathname,
    },
  },
};
