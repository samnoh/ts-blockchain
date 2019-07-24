import Block from './Block';

const genesisBlock: Block = new Block(
    0,
    Block.calculateBlockHash(0, null, Date.now(), 'Hello World!'),
    null,
    'Hello World!',
    Date.now()
);

const blockchain: Block[] = [genesisBlock];

export const getLatestBlock = (): Block => blockchain[blockchain.length - 1];

export default (): Block[] => blockchain; // getBlockchain
