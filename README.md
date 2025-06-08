## Smart Contract Functionalities

### MockUSDC (ERC20, 6 decimals)

- ERC20 token representing a mock USD Coin with 6 decimals.
- The contract owner (deployer) is set via OpenZeppelin's Ownable.
- The owner can mint new tokens to any address using the `mint` function.
- The constructor pre-mints 1,000,000 tokens to the deployer.

### MockPEPE (ERC20, 18 decimals)

- ERC20 token representing a mock PEPE Coin with 18 decimals.
- The contract owner (deployer) is set via OpenZeppelin's Ownable.
- The owner can mint new tokens to any address using the `mint` function.

### MockSwap

- Allows users to swap between MockPEPE and MockUSDC at a 1:1 rate.
- Users must approve the contract to spend their tokens before swapping.
- Two swap functions: `swapAToB` (PEPE to USDC) and `swapBToA` (USDC to PEPE).
- Emits a `Swap` event for each swap.
- The owner can withdraw tokens from the contract.

**Note:**

- Only the contract owner can mint new tokens for MockUSDC and MockPEPE.
- The swap contract must be pre-funded with both tokens to facilitate swaps.
- To see your tokens in your wallet, add the token contract address manually.
