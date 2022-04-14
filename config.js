module.exports = Object.freeze({
    // required. wallet privateKey
    privateKey : "<Your private key>",
    
    // required. Your wallet address   
    fromAddress : "0xABbDEFEcB79d8Af35b32DF11ab075FcB1053b337".toLocaleLowerCase(),
    
    // reuiqred. Your target contract address
    toAddress: "0x582048C4077a34E7c3799962F1F8C5342a3F4b12".toLocaleLowerCase(),

    // required. Find out the contract creator address
    creatorAddress: "0x2019222238B971fC06D34828c6AD0F43DF2F6520".toLocaleLowerCase(),

    // required. The price of public mint
    price: "0.07",                    
    
    // required. How many items you wants to buy
    maxPriorityFeePerGas : "1000", 
    
    // required. The collection contract address you want to buy                                                                           
    maxFeePerGas : "1000",                    
    
    // required. The num you want to mint
    number: "2",

    // required. http provider from infura or alchemy. It must be wss
    wssMainnet: "9MHkNb3MxGOkQq15rxlIpP7GcPnJ3E76",

    // required. http provider from infura or alchemy. It must be wss
    wssRinkeby: "wss://eth-rinkeby.alchemyapi.io/v2/<Rinkeby api key>",

    // required. http provider from infura or alchemy. It must be wss
    wssGoerli : "wss://eth-goerli.alchemyapi.io/v2/<Goerli api key>",

    // optional. debug usage. The value should be "Rinkeby" for rinkeby, "Goerli" for goerli or "" for mainnet
    network : "Goerli",

    // timere script const, the start time of dutch
    time: 1644069600,
});
