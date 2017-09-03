var ContractA = artifacts.require("./ContractA.sol");
var ContractB = artifacts.require("./ContractB.sol");

module.exports = async(deployer,network,accounts) => {
    console.log("Setup Migration...");
    var primary = accounts[0];
    var aInstance = await ContractA.deployed();
    var bInstance = await ContractB.deployed();
    await aInstance.setBAddress(bInstance.address);
    await bInstance.setAAddress(aInstance.address);
    console.log("Setup Migration Done!");
};
