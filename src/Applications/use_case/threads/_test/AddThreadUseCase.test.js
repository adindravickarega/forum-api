const ThreadRepository = require("../../../../Domains/threads/ThreadRepository");
const AddThread = require("../../../../Domains/threads/entities/AddThread");
const AddedThread = require("../../../../Domains/threads/entities/AddedThread");
const AddThreadUseCase = require("../AddThreadUseCase");

describe("AddThreadUseCase", () => {
  /**
   * Menguji apakah use case mampu mengoskestrasikan langkah demi langkah dengan benar.
   */
  it("should orchestrating the add thread action correctly", async () => {
    // Arrange
    const useCasePayload = {
      owner: "user-123",
      title: "thread title",
      body: "thread body",
    };

    const mockAddedThread = new AddedThread({
      id: "thread-123",
      title: useCasePayload.title,
      owner: useCasePayload.owner,
    });

    /** creating dependency of use case */
    const mockThreadRepository = new ThreadRepository();

    /** mocking needed function */
    mockThreadRepository.addThread = jest
      .fn()
      .mockImplementation(() => Promise.resolve(mockAddedThread));

    /** creating use case instance */
    const addThreadUseCase = new AddThreadUseCase({
      threadRepository: mockThreadRepository,
    });

    // Action
    const addedThread = await addThreadUseCase.execute(useCasePayload);

    // Assert
    expect(addedThread).toStrictEqual(
      new AddedThread({
        id: "thread-123",
        title: useCasePayload.title,
        owner: useCasePayload.owner,
      })
    );
    expect(mockThreadRepository.addThread).toBeCalledWith(
      new AddThread({
        owner: useCasePayload.owner,
        title: useCasePayload.title,
        body: useCasePayload.body,
      })
    );
  });
});