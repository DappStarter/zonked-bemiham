require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney kiwi onion skull drift raise noble pudding half arena equal gaze'; 
let testAccounts = [
"0x22030307695c0ac7cc272716af09b16143f37a0fd51827739842293742512450",
"0x0558c6bdb6cf5e6528335f0400a8bcc9343fef9ff571198a4ccf6cc7ed657ca2",
"0x966049aaaa923e2246ac702f340ff0eebf3cc2f6bb7d4617d03eb991444edb1d",
"0xff39d35a48e45ab4c0d3cf8ce6116b941aa512754619d657c5437401289f7813",
"0xe2d036db6a6360c26a6f58e0612ff2933e4d68c52d775464794c4d22842c76f8",
"0xad87e8a619436717c9c6488c8185ed5f14c3527aaaa1f0c4ffa25b8a513b159b",
"0x4f5188b64bd8d63b398f9cf15d14ce1674eca7adaf111b8ce40534a633fd36f7",
"0x8fe9d7c2cd7eb8b2d1b2d73d76b99db71bcfd2ef02c0313988577e9fcfe9a98f",
"0x21c7b1e93e34eeeed73addac471f37c53e5a5f233e97baa328e7f12af6d17fc3",
"0x5744478166442b8fc60f6f48e4977dfbf46b445f278ae0497843cacf026b2f5f"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
