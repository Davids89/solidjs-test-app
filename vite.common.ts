import solidPlugin from 'vite-plugin-solid';
import * as path from 'path';

const common: Object = {
  plugins: [solidPlugin()],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
}

export default common;