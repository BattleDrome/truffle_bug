var ContractA = artifacts.require("./ContractA.sol");
var ContractB = artifacts.require("./ContractB.sol");

module.exports = function(deployer,network,accounts) {
    console.log("Setup Migration...");

    deployer.then(function(){
        var aInstance;
        var bInstance;
        ContractA.deployed().then(function(instance){
            aInstance = instance;
            return ContractB.deployed();
        }).then(function(instance){
            bInstance = instance;
        }).then(function(){            
            aInstance.setBAddress(bInstance.address);
            bInstance.setAAddress(aInstance.address);
            console.log("Setup Migration Done!");
        });
    });
};
