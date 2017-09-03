var Migrations = artifacts.require("./Migrations.sol");

module.exports = async(deployer) => {
  console.log("Initial Migration...");
  await deployer.deploy(Migrations);
  console.log("Initial Migration Done!");
};
