// contracts/MockPEPE.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MockPEPE is ERC20, Ownable {
    constructor() ERC20("Mock Pepe Coin", "mPEPE") {
        _mint(msg.sender, 1_000_000_000_000_000_000_000_000);
    }

    function mint(address to, uint256 amount) external onlyOwner {
        _mint(to, amount);
    }
}
