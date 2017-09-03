pragma solidity ^0.4.11;

import "./ContractA.sol";

contract ContractB {
    address public aAddress;
    uint public d;
    uint public e;
    uint public f;

    event ThingsHappened(
        uint indexed number,
        uint timeStamp
    );

    function setAAddress(address addr) {
        aAddress = addr;
    }

    function incD() {
        d = d + ContractA(aAddress).a();
        ThingsHappened(d,now);
    }

    function incE() {
        e = e + ContractA(aAddress).b();
        ThingsHappened(e,now);
    }

    function incF() {
        f = f + ContractA(aAddress).c();
        ThingsHappened(f,now);
    }

    function sum() constant returns(uint) {
        ContractA a = ContractA(aAddress);
        return a.a() + a.b() + a.c() + d + e + f;
    }

}