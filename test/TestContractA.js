var ContractA = artifacts.require("ContractA.sol");
var ContractB = artifacts.require("ContractB.sol");

contract('ContractA', function(accounts) {

    var aInstance;
    var bInstance;

    it("Should have correct B Address", function() {
        var storedAddress;
        var deployedAddress;
        return ContractA.deployed().then(function(instance){
            aInstance = instance;
            return aInstance.bAddress.call();
        }).then(function(bAddress) {
            storedAddress = bAddress;
            return ContractB.deployed();
        }).then(function(instance) {
            bInstance = instance;
            deployedAddress = bInstance.address;
            assert.equal(storedAddress, deployedAddress, "Didn't have the right B address!");
        });
    });

    it("Should initially start with a=0", function() {
        return aInstance.a.call().then(function(value) {
            assert.equal(value, 0, "Didn't have the correct starting value!");
        });
    });

    it("Should initially start with b=0", function() {
        return aInstance.b.call().then(function(value) {
            assert.equal(value, 0, "Didn't have the correct starting value!");
        });
    });

    it("Should initially start with c=0", function() {
        return aInstance.c.call().then(function(value) {
            assert.equal(value, 0, "Didn't have the correct starting value!");
        });
    });

    it("Should initially start with sum of 0", function() {
        return aInstance.sum.call().then(function(value) {
            assert.equal(value, 0, "Didn't have the correct starting sum!");
        });
    });

    it("Should increment 'a' correctly", function() {
        return aInstance.incA().then(function(result) {
            var eventFound = false;
            for(var i=0; i<result.logs.length; i++) {
                var log = result.logs[i];
                if(log.event=="StuffHappened"){
                    eventFound = true;
                }
            }
            return eventFound;
        }).then(function(eventFound) {
            assert.equal(eventFound, true, "The Event was not detected!");
            return aInstance.a.call();
        }).then(function(value) {
            assert.equal(value, 1, "Increment was incorrect!");
        });
    });

    it("Should increment 'b' correctly", function() {
        return aInstance.incB().then(function(result) {
            var eventFound = false;
            for(var i=0; i<result.logs.length; i++) {
                var log = result.logs[i];
                if(log.event=="StuffHappened"){
                    eventFound = true;
                }
            }
            return eventFound;
        }).then(function(eventFound) {
            assert.equal(eventFound, true, "The Event was not detected!");
            return aInstance.b.call();
        }).then(function(value) {
            assert.equal(value, 1, "Increment was incorrect!");
        });
    });

    it("Should increment 'c' correctly", function() {
        return aInstance.incC().then(function(result) {
            var eventFound = false;
            for(var i=0; i<result.logs.length; i++) {
                var log = result.logs[i];
                if(log.event=="StuffHappened"){
                    eventFound = true;
                }
            }
            return eventFound;
        }).then(function(eventFound) {
            assert.equal(eventFound, true, "The Event was not detected!");
            return aInstance.c.call();
        }).then(function(value) {
            assert.equal(value, 1, "Increment was incorrect!");
        });
    });

});