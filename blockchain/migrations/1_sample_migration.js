var SampleContract = artifacts.require("sample");

module.exports = function(deployer) {
  // deployment steps
  deployer.deploy(SampleContract);
};