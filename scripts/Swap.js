// scripts/deployMockUSDC.js
const hre = require("hardhat")

async function main() {
  const mockPEPEAddress = "0x2Eac68d74c552E86b6EF6888b3E18817fAde1785" // Deployed MockPEPE address
  const mockUSDCAddress = "0x3E8DCfF66B2b305467Ea3327068B3a31624502d7"

  const MockSwap = await hre.ethers.getContractFactory("MockSwap")
  const mockSwap = await MockSwap.deploy(mockPEPEAddress, mockUSDCAddress)
  await mockSwap.deployed()

  console.log("Mock Swap deployed to:", mockSwap.address)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
