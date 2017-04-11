// The problem with rollem is that it seems to use a particular version of rollup instead of yours.
import typescript from 'rollup-plugin-typescript';
import glob from 'glob';

const configurations = glob.sync('*.spec.ts').map(specName => {
    return {
        entry: specName,
        dest: `testOutput/bundledSpecs/${specName.replace('ts', 'js')}`,
        plugins: [typescript()],
        format: 'iife',
        sourceMap: true
    }
});

export default configurations;
