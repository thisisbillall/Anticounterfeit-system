var MyContract = artifacts.require("conV1");

module.exports = function(deployer) {
  // deployment steps
  deployer.deploy(MyContract);
};