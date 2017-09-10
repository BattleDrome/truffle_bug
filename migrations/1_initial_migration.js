var Migrations = artifacts.require("./Migrations.sol");

module.exports = function(deployer) {
  console.log("Initial Migration...");
  deployer.deploy(Migrations);
  console.log("Initial Migration Done!");
};
