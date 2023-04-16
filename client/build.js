const { context } = require('esbuild');

const run = async () => {
  const ctx = await context({
    entryPoints: ['src/index.tsx'],
    bundle: true,
    outfile: 'public/index.js',
    format: 'iife',
    logLevel: 'verbose',
    platform: 'browser',
    loader: { '.js': 'jsx' },
    sourcemap: 'inline',
  });

  if (process.argv.indexOf('--watch') >= 0) {
    await ctx.watch();
  } else {
    ctx.rebuild();
    ctx.dispose();
  }
}

run();
