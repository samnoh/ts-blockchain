import Block from './Block';

const genesisBlock: Block = new Block(
    0,
    Block.calculateBlockHash(0, null, Date.now(), 'Hello World!'),
    null,
    'Hello World!',
    Date.now()
);

export default genesisBlock;
