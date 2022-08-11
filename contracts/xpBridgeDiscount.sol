// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract xpBridgeDiscount is Ownable {

    ERC20 public token;

    event Deposit(address indexed _from , uint _value);

    constructor(address _address) {
       token = ERC20(_address);
    }

    function deposit(uint256 _amount) public {
       require(token.balanceOf(msg.sender) >= _amount , "You do not have the amount");
       token.approve(address(this) , _amount);
       token.transferFrom(msg.sender , address(this) ,_amount);
       emit Deposit(msg.sender, _amount);
    }

    function withdraw(uint256 _totalAmount) external onlyOwner {
      token.transfer( msg.sender , _totalAmount);
    }
}