class DetailThread {
    constructor(payload) {
      this._verifyPayload(payload);
  
      const { id, title, body, username, date } = payload;
  
      this.id = id;
      this.title = title;
      this.body = body;
      this.username = username;
      this.date = date;
    }
  
    _verifyPayload({ id, title, body, username, date }) {
      if (!id || !title || !body || !username || !date) {
        throw new Error("DETAIL_THREAD.NOT_CONTAIN_NEEDED_PROPERTY");
      }
  
      if (
        typeof id !== "string" ||
        typeof date !== "string" ||
        typeof title !== "string" ||
        typeof body !== "string" ||
        typeof username !== "string"
      ) {
        throw new Error("DETAIL_THREAD.NOT_MEET_DATA_TYPE_SPECIFICATION");
      }
    }
  }
  
  module.exports = DetailThread;