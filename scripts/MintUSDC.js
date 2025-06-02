async function main() {
  const recipient = "0x92b9baA72387Fb845D8Fe88d2a14113F9cb2C4E7"
  const amount = ethers.utils.parseUnits("1000", 6) // Mint 1000 tokens

  // Address of your deployed MockUSDC contract:
  const deployedAddress = "0x3E8DCfF66B2b305467Ea3327068B3a31624502d7"

  // Get the contract interface and attach it to the deployed address
  const mockusdc = await ethers.getContractAt("MockUSDC", deployedAddress)
  console.log("Minting...")

  try {
    const tx = await mockusdc.mint(recipient, amount)
    await tx.wait()
    console.log("Minted!")
  } catch (error) {
    console.error("Mint failed:", error)
  }

  console.log(`✅ Minted 1000 MockUSDC to ${recipient}`)
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
