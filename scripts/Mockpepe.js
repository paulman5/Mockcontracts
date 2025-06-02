// scripts/deployMockUSDC.js
const hre = require("hardhat")

async function main() {
  const MockUSDC = await hre.ethers.getContractFactory("Mockpepe")
  const mockUSDC = await MockUSDC.deploy()
  await mockUSDC.deployed()

  console.log("Mock Pepe deployed to:", mockpepe.address)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
