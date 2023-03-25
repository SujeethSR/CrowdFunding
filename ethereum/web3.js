import Web3 from 'web3';

let web3;

if( typeof window != 'undefined' && typeof window.web3 != 'undefined'){
    // We are into the browser and metamask is installed 
    web3 = new Web3(window.web3.currentProvider);;
}
else{
    // we are on the server OR user is not running metamask
    const provider = new Web3.providers.HttpProvider(
        'https://eth-goerli.alchemyapi.io/v2/5M2_bk0HKb4yDgfZjm7xhju_hAshicAE' );
    web3 = new Web3(provider);
}

export default web3;