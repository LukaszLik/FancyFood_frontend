import axios from "axios";
import header from "./header";
class CommentsService {
  async addComment(content: string, recipeId: string) {
    axios.post(`/recipe/${recipeId}/comment`, content, {
      headers: { ...header(), "Content-Type": "application/json" },
    });
  }
}

export default new CommentsService();
