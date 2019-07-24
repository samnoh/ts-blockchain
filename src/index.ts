import Block from './Block';

const genesisBlock: Block = new Block(
    0,
    Block.calculateBlockHash(0, null, Date.now(), 'Hello World!'),
    null,
    'Hello World!',
    Date.now()
);

const blockchain: Block[] = [genesisBlock];

const getBlockchain = (): Block[] => blockchain;

const getLatestBlock = (): Block => blockchain[blockchain.length - 1];

const createNewBlock = (data: string): Block => {
    const prevBlock: Block = getLatestBlock();
    const newIndex: number = prevBlock.index + 1;
    const newTimestamp: number = Date.now();
    const newHash: string = Block.calculateBlockHash(newIndex, prevBlock.hash, newTimestamp, data);

    const newBlock: Block = new Block(newIndex, newHash, prevBlock.hash, data, newTimestamp);

    addBlock(newBlock);

    return newBlock;
};

const getBlockHash = (block: Block): string =>
    Block.calculateBlockHash(block.index, block.prevHash, block.timestamp, block.data);

const isBlockValid = (candidateBlock: Block, prevBlock: Block): boolean => {
    if (!Block.validateBlock(candidateBlock)) return false;
    else if (prevBlock.index + 1 !== candidateBlock.index) return false;
    else if (prevBlock.hash !== candidateBlock.prevHash) return false;
    else if (getBlockHash(candidateBlock) !== candidateBlock.hash) return false;

    return true;
};

const addBlock = (candidateBlock: Block): void => {
    if (isBlockValid(candidateBlock, getLatestBlock())) blockchain.push(candidateBlock);
};

createNewBlock('JavaScript');
createNewBlock('TypeScript');
createNewBlock('CoffeeScript');

console.log(getBlockchain());
