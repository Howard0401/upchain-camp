const {
  time,
  loadFixture,
} = require("@nomicfoundation/hardhat-network-helpers");
const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
const { expect } = require("chai");

async function deployFixture() {

  const [student1, student2] = await ethers.getSigners();

  // Contracts are deployed using the first signer/account by default
  const Teacher = await ethers.getContractFactory("Teacher");
  const teacher = await Teacher.deploy();
  const Score = await ethers.getContractFactory("Score");
  const score = await Score.deploy(teacher.address);

  console.log("teacher:", teacher.address);
  console.log("score:", score.address);

  return { teacher, score, student1, student2 };
}


describe("Score", function () {

  it("test teacher modify score", async function () {
    const { teacher, score, student1, student2 } = await loadFixture(deployFixture)
    await teacher.modifyByTeacher(score.address, student1.address, 100)
    await teacher.modifyByTeacher(score.address, student2.address, 0)
  })

  it("test Invalid score", async function () {
    const { teacher, score, student1 } = await loadFixture(deployFixture)

    let tx = teacher.modifyByTeacher(score.address, student1.address, 10086)
    await expect(tx).revertedWithCustomError(score, "InvalidScore")

    tx = teacher.modifyByTeacher(score.address, student1.address, 101)
    await expect(tx).revertedWithCustomError(score, "InvalidScore")
  })

  it("not owener or teacher", async function () {
    const { score, student1 } = await loadFixture(deployFixture)
    const tx =  score.connect(student1).setScore(student1.address, 1)
    await expect(tx).revertedWithCustomError(score, "InvalidAddress")
  })

  it("query score", async function () {
    const { teacher, score, student1 } = await loadFixture(deployFixture)
    await teacher.modifyByTeacher(score.address, student1.address, 1)
    const result = await score.connect(student1).getScore(student1.address)
    expect(result).eq(1)
  })
})