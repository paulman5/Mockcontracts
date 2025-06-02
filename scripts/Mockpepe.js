// scripts/deployMockUSDC.js
const hre = require("hardhat")

async function main() {
  const MockPEPE = await hre.ethers.getContractFactory("MockPEPE")
  const mockPEPE = await MockPEPE.deploy()
  await mockPEPE.deployed()

  console.log("Mock Pepe deployed to:", mockPEPE.address)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
