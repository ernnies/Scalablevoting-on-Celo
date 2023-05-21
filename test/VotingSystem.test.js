const VotingSystem = artifacts.require("VotingSystem");

contract("VotingSystem", (accounts) => {
  let votingSystemInstance;

  before(async () => {
    votingSystemInstance = await VotingSystem.deployed();
  });

  it("should initialize with correct candidate count", async () => {
    const candidateCount = await votingSystemInstance.candidatesCount();
    assert.equal(candidateCount, 3, "Incorrect candidate count");
  });

  it("should increment vote count for a candidate", async () => {
    const candidateId = 0;
    await votingSystemInstance.vote(candidateId);
    const candidate = await votingSystemInstance.candidates(candidateId);
    assert.equal(candidate.voteCount, 1, "Vote count not incremented");
  });
});
