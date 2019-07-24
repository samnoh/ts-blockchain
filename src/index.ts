import { getBlockchain, createNewBlock } from './block';

createNewBlock('JavaScript');
createNewBlock('TypeScript');
createNewBlock('CoffeeScript');

console.log(getBlockchain());
