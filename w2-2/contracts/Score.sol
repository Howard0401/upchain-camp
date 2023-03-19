//SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

interface IScore {
    event ModifyScore(address indexed student, int256 score);
    function setScore(address student, uint256 score) external;
    function getScore(address student) external view returns(uint256 score);
}


contract Score is IScore {
    address public teacher;
    address public contractOwner;
    mapping(address => uint256) private scores;

    error InvalidAddress();
    error InvalidScore();
    constructor(address _teacher) {
        teacher = _teacher;
        contractOwner = msg.sender;
    }

    function setScore(address student, uint256 score) external override {
        if(msg.sender == address(0)) revert InvalidAddress();
        if(msg.sender != teacher) revert InvalidAddress();
        if(score > 100) revert InvalidScore();
        scores[student] = score;
        emit ModifyScore(student, int256(score));
    }

    function getTeacher() external view returns(address) {
        return teacher;
    }

    function setTeacher(address _teacher) public {
        if(msg.sender != contractOwner) revert InvalidAddress();
        teacher = _teacher;
    }

    // auto complete by copilot 
    function getScore(address student) external view override returns(uint256 score) {
        return scores[student];
    }



}