var ContractA = artifacts.require("ContractA.sol");
var ContractB = artifacts.require("ContractB.sol");

contract('ContractB', function(accounts) {

    var aInstance;
    var bInstance;

    it("Should have correct A Address", async () => {
        bInstance = await ContractB.deployed();
        var storedAddress = await bInstance.aAddress.call();
        aInstance = await ContractA.deployed();
        var deployedAddress = aInstance.address;
        assert.equal(storedAddress, deployedAddress, "Didn't have the right B address!");
    });

    it("Should initially start with d=0", async () => {
        var d = await bInstance.d.call();
        assert.equal(d, 0, "Didn't have the correct starting value!");
    });

    it("Should initially start with e=0", async () => {
        var e = await bInstance.e.call();
        assert.equal(e, 0, "Didn't have the correct starting value!");
    });

    it("Should initially start with f=0", async () => {
        var f = await bInstance.f.call();
        assert.equal(f, 0, "Didn't have the correct starting value!");
    });

    it("Should initially start with sum of 0", async () => {
        var sum = await bInstance.sum.call();
        assert.equal(sum, 0, "Didn't have the correct sum value!");
    });

});