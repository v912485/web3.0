// https://eth-ropsten.alchemyapi.io/v2/3pmY9fKLu2Ox1zXhKZPrsSb_CeC5hMVo

require('@nomiclabs/hardhat-waffle');

module.exports = {
    solidity: '0.8.0',
    networks: {
        ropsten: {
            url: 'https://eth-ropsten.alchemyapi.io/v2/3pmY9fKLu2Ox1zXhKZPrsSb_CeC5hMVo',
            accounts: ['8757aeb61a8ed076d3a5aeb2eeec538246c0b02e2c099dad2adb2379d4f86648']
        }
    }
}