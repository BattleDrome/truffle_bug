var ContractA = artifacts.require("ContractA.sol");
var ContractB = artifacts.require("ContractB.sol");

contract('ContractB', function(accounts) {

    var aInstance;
    var bInstance;

    it("Should have correct A Address", function() {
        var storedAddress;
        var deployedAddress;
        return ContractB.deployed().then(function(instance){
            bInstance = instance;
            return bInstance.aAddress.call();
        }).then(function(aAddress) {
            storedAddress = aAddress;
            return ContractA.deployed();
        }).then(function(instance) {
            aInstance = instance;
            deployedAddress = aInstance.address;
            assert.equal(storedAddress, deployedAddress, "Didn't have the right A address!");
        });
    });

    it("Should initially start with d=0", function() {
        return bInstance.d.call().then(function(value) {
            assert.equal(value, 0, "Didn't have the correct starting value!");
        });
    });

    it("Should initially start with e=0", function() {
        return bInstance.e.call().then(function(value) {
            assert.equal(value, 0, "Didn't have the correct starting value!");
        });
    });

    it("Should initially start with f=0", function() {
        return bInstance.f.call().then(function(value) {
            assert.equal(value, 0, "Didn't have the correct starting value!");
        });
    });

    it("Should initially start with sum of 0", function() {
        return bInstance.sum.call().then(function(value) {
            assert.equal(value, 0, "Didn't have the correct starting sum!");
        });
    });

});