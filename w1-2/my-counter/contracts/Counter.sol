//SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract Counter {
    uint cnt;

    constructor() {
        cnt = 0;
    }

    function add() public {
        cnt = cnt + 1;
    }

    function get() public view returns (uint) {
        return cnt;
    }
}