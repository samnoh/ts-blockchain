import Block from './Block';
import seed from './seed';

const blockchain: Block[] = [seed];

export const getLatestBlock = (): Block => blockchain[blockchain.length - 1];

export default (): Block[] => blockchain; // getBlockchain
