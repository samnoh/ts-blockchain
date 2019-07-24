import Block from './Block';
import getBlockchain, { getLatestBlock } from './blockchain';

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
    if (isBlockValid(candidateBlock, getLatestBlock())) getBlockchain().push(candidateBlock);
};

export const createNewBlock = (data: string): Block => {
    const prevBlock: Block = getLatestBlock();
    const newIndex: number = prevBlock.index + 1;
    const newTimestamp: number = Date.now();
    const newHash: string = Block.calculateBlockHash(newIndex, prevBlock.hash, newTimestamp, data);

    const newBlock: Block = new Block(newIndex, newHash, prevBlock.hash, data, newTimestamp);

    addBlock(newBlock);

    return newBlock;
};

export { getBlockchain };
