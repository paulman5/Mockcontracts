// contracts/MockSwap.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MockSwap is Ownable {
    IERC20 public tokenA;
    IERC20 public tokenB;

    event Swap(
        address indexed user,
        address indexed fromToken,
        address indexed toToken,
        uint256 amount
    );

    constructor(address _tokenA, address _tokenB) {
        tokenA = IERC20(_tokenA);
        tokenB = IERC20(_tokenB);
    }

    // Swap tokenA for tokenB
    function swapAToB(uint256 amount) external {
        require(
            tokenA.transferFrom(msg.sender, address(this), amount),
            "Transfer of tokenA failed"
        );
        require(
            tokenB.transfer(msg.sender, amount),
            "Transfer of tokenB failed"
        );
        emit Swap(msg.sender, address(tokenA), address(tokenB), amount);
    }

    // Swap tokenB for tokenA
    function swapBToA(uint256 amount) external {
        require(
            tokenB.transferFrom(msg.sender, address(this), amount),
            "Transfer of tokenB failed"
        );
        require(
            tokenA.transfer(msg.sender, amount),
            "Transfer of tokenA failed"
        );
        emit Swap(msg.sender, address(tokenB), address(tokenA), amount);
    }

    // Owner can withdraw tokens
    function withdraw(address token, uint256 amount) external onlyOwner {
        require(IERC20(token).transfer(msg.sender, amount), "Withdraw failed");
    }
}
