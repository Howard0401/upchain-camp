// SPDX-License-Identifier: MIT
pragma solidity  ^0.8.18;

contract Counter{

    uint public cnt = 0;

    function add(uint x) public returns(uint){
        cnt = cnt + x;
        return cnt;
    }

}