# Example to demonstrate truffle bug
This repo recreates a potential bug in truffle test and testrpc I've found.

To re-create:
- truffle compile
- truffle migrate --reset
- truffle test

then repeat truffle test several times.
Sometimes it will pass all tests
Others it will fail.

