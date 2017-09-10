var ContractA = artifacts.require("./ContractA.sol");

module.exports = function(deployer) {
    console.log("Migration A...");
    deployer.deploy(ContractA);    
    console.log("Migration A Done!");
};
