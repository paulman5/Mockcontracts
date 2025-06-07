// scripts/deployMockUSDC.js
const hre = require("hardhat")

async function main() {
  const mockUSDCAddress = "0x0cc2166DB4D31d1BaEA8c46Df757eC836b946FD8"
  const mockPEPEAddress = "0xa2c8Bf2CB2351bC6Ae0F5492eb147B09077F183b"

  const MockSwap = await hre.ethers.getContractFactory("MockSwap")
  const mockSwap = await MockSwap.deploy(mockUSDCAddress, mockPEPEAddress)
  await mockSwap.deployed()

  console.log("Mock Swap deployed to:", mockSwap.address)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
