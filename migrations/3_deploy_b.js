var ContractB = artifacts.require("./ContractB.sol");

module.exports = async(deployer) => {
    console.log("Migration B...");
    await deployer.deploy(ContractB);    
    console.log("Migration B Done!");
};
