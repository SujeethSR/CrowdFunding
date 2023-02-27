const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json')

const provider = new  HDWalletProvider(
    "baby apple protect gasp reduce chair screen glory trash collect affair erase",
    "https://eth-goerli.alchemyapi.io/v2/5M2_bk0HKb4yDgfZjm7xhju_hAshicAE"
);

const web3 = new Web3(provider);

const deploy = async ()=>{
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy contract from account : ' , accounts[0]);
    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data : compiledFactory.bytecode })
    .send({ from : accounts[0] , gas : '1000000'})

    console.log('Contract deployed at address :',result.options.address);
};

deploy();

