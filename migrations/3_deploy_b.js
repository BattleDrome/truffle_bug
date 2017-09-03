var ContractB = artifacts.require("./ContractB.sol");

module.exports = function(deployer) {
    deployer.deploy(ContractB);    
};
