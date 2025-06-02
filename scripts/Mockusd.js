const hre = require("hardhat")

async function main() {
  const MockUSDC = await hre.ethers.getContractFactory("MockUSDC")
  const mockUSDC = await MockUSDC.deploy()
  await mockUSDC.deployed()

  console.log("Mock USDC deployed to:", mockUSDC.address)
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
