import axios from "axios";

class CommentsService {
    async addComment(content: string, recipeId: string) {
        axios.post(`/recipe/${recipeId}/comment`, content)
    }
}