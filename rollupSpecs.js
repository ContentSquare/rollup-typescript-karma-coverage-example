const rollup = require('rollup');
const typescript = require('rollup-plugin-typescript');
const glob = require('glob');

const bundlePromises = glob.sync('*.spec.ts').map(bundle);

Promise.all(bundlePromises)
  .then(() => console.log('Spec bundling successful'));

function bundle(specName) {
  return rollup.rollup({
    entry: specName,
    plugins: [typescript()]
  }).then(bundle => bundle.write({
    dest: `testOutput/bundledSpecs/${specName.replace('ts', 'js')}`,
    format: 'iife',
    sourceMap: true
  }));
}
