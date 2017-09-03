var ContractA = artifacts.require("./ContractA.sol");

module.exports = function(deployer) {
    deployer.deploy(ContractA);    
};
