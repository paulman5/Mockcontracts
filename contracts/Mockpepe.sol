// contracts/MockPEPE.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MockPEPE is ERC20, Ownable {
    constructor() ERC20("Mock PEPE Coin", "mPEPE") {}

    function mint(address to, uint256 amount) external onlyOwner {
        _mint(to, amount);
    }

    // Optional override if you want to use a different decimal system
    function decimals() public view virtual override returns (uint8) {
        return 18;
    }
}
