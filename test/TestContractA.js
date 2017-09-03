var ContractA = artifacts.require("ContractA.sol");
var ContractB = artifacts.require("ContractB.sol");

contract('ContractA', function(accounts) {

    var aInstance;
    var bInstance;

    it("Should have correct B Address", async () => {
        aInstance = await ContractA.deployed();
        var storedAddress = await aInstance.bAddress.call();
        bInstance = await ContractB.deployed();
        var deployedAddress = bInstance.address;
        assert.equal(storedAddress, deployedAddress, "Didn't have the right B address!");
    });

    it("Should initially start with a=0", async () => {
        var a = await aInstance.a.call();
        assert.equal(a, 0, "Didn't have the correct starting value!");
    });

    it("Should initially start with b=0", async () => {
        var b = await aInstance.b.call();
        assert.equal(b, 0, "Didn't have the correct starting value!");
    });

    it("Should initially start with c=0", async () => {
        var c = await aInstance.c.call();
        assert.equal(c, 0, "Didn't have the correct starting value!");
    });

    it("Should initially start with sum of 0", async () => {
        var sum = await aInstance.sum.call();
        assert.equal(sum, 0, "Didn't have the correct sum value!");
    });

    it("Should increment 'a' correctly", async () => {
        var txResult = await aInstance.incA();
        var eventFound = false;
        for(var i=0; i<txResult.logs.length; i++) {
            var log = txResult.logs[i];
            if(log.event=="StuffHappened"){
                eventFound = true;
            }
        }
        assert.equal(eventFound, true, "The Event was not detected!");
        var a = await aInstance.a.call();
        assert.equal(a, 1, "Increment was incorrect!");
    });

    it("Should increment 'b' correctly", async () => {
        var txResult = await aInstance.incB();
        var eventFound = false;
        for(var i=0; i<txResult.logs.length; i++) {
            var log = txResult.logs[i];
            if(log.event=="StuffHappened"){
                eventFound = true;
            }
        }
        assert.equal(eventFound, true, "The Event was not detected!");
        var b = await aInstance.b.call();
        assert.equal(b, 1, "Increment was incorrect!");
    });

    it("Should increment 'c' correctly", async () => {
        var txResult = await aInstance.incC();
        var eventFound = false;
        for(var i=0; i<txResult.logs.length; i++) {
            var log = txResult.logs[i];
            if(log.event=="StuffHappened"){
                eventFound = true;
            }
        }
        assert.equal(eventFound, true, "The Event was not detected!");
        var c = await aInstance.c.call();
        assert.equal(c, 1, "Increment was incorrect!");
    });

});