import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x976DE74a4b822C89853ABeb99BF630C65c20757B'
)

export default instance;