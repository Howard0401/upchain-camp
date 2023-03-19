//SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;
import "./Score.sol";

contract Teacher{
    function modifyByTeacher(IScore ctx, address student, uint256 score) external {
        ctx.setScore(student, score);
    }
}