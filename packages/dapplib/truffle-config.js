require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'grid process orient venture struggle deny praise collect harvest pave army gentle'; 
let testAccounts = [
"0x89303d7c2d6d61abcc20a2e2e0961b8e163dc0b9f08aee7d1bc412e3a21c6a7a",
"0xbe5a96de1f40f85890948b1b013da1e295e9d0dbc719da985e47bc286c9e5e0a",
"0x5a82c9ef8eb8fb8334098600edc69ef4d46aaa88adcb4ff4bd4bdfda0a635685",
"0xae7dab4b396205c0d30af9d24a094c9be0463ab83db19d8ff9699431dc4134a2",
"0x7dbda25fc0fa6b9c7cc82a9c6a9828ec45a80d639c01b62247f715ad16ee8293",
"0xc1a5dc626a7296e65caf0820653c08f74e1c2cf55bcd76d1a6bd7c8a2745c00e",
"0xe8d4d669bfc03564fe7009f082662002ef20fc1d2dc08052b46b07addb83535a",
"0x5f12e9b4ede6d39b4640d09f399732b0db4b854d225d410e2b4930f89a77005c",
"0x02fb4bfa93846c8b565479a82fefb046f9e99e0ca652fa6bdd545ea6cfd5f025",
"0xc86ea168db31e26e69e5503cd568e820a55bcb5cccf207ce4a7bda6be8bf8ed7"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


