var ContractB = artifacts.require("./ContractB.sol");

module.exports = function(deployer) {
    console.log("Migration B...");
    deployer.deploy(ContractB);    
    console.log("Migration B Done!");
};
