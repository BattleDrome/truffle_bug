pragma solidity ^0.4.11;

contract ContractA {
    address public bAddress;
    uint public a;
    uint public b;
    uint public c;

    event StuffHappened(
        uint indexed number,
        uint timeStamp
    );

    function setBAddress(address addr) {
        bAddress = addr;
    }

    function incA() {
        a++;
        StuffHappened(a,now);
    }

    function incB() {
        b = b + a;
        StuffHappened(a,now);
    }

    function incC() {
        c = c + b;
        StuffHappened(a,now);
    }

    function sum() constant returns(uint) {
        return a+b+c;
    }

}