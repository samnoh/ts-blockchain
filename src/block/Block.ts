import * as CryptoJS from 'crypto-js';

export default class Block {
    public index: number;
    public hash: string;
    public prevHash: string;
    public data: string;
    public timestamp: number;

    constructor(index: number, hash: string, prevHash: string, data: string, timestamp: number) {
        this.index = index;
        this.hash = hash;
        this.prevHash = prevHash;
        this.data = data;
        this.timestamp = timestamp;
    }

    public static calculateBlockHash = (
        index: number,
        prevHash: string,
        timestamp: number,
        data: string
    ): string => CryptoJS.SHA256(index + prevHash + timestamp + data).toString();

    public static validateBlock = (block: Block): boolean =>
        typeof block.index === 'number' &&
        typeof block.hash === 'string' &&
        typeof block.prevHash === 'string' &&
        typeof block.data === 'string' &&
        typeof block.timestamp === 'number';
}
