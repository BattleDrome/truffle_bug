var ContractA = artifacts.require("./ContractA.sol");

module.exports = async(deployer) => {
    console.log("Migration A...");
    await deployer.deploy(ContractA);    
    console.log("Migration A Done!");
};
