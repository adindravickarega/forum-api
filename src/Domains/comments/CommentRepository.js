class CommentRepository {
    async addComment(newComment) {
      throw new Error("COMMENT_REPOSITORY.METHOD_NOT_IMPLEMENTED");
    }
  
    async verifyCommentOwner(id, owner) {
      throw new Error("COMMENT_REPOSITORY.METHOD_NOT_IMPLEMENTED");
    }
  
    async verifyIsCommentExists(id) {
      throw new Error("COMMENT_REPOSITORY.METHOD_NOT_IMPLEMENTED");
    }
  
    async getCommentsByThreadId(threadId) {
      throw new Error("COMMENT_REPOSITORY.METHOD_NOT_IMPLEMENTED");
    }
  
    async deleteComment(id) {
      throw new Error("COMMENT_REPOSITORY.METHOD_NOT_IMPLEMENTED");
    }
  }
  
  module.exports = CommentRepository;