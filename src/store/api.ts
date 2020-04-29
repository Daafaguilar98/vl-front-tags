import axios from "axios";

export default {
    async getTags() {
        return await axios({
            method: "GET",
            url: "http://localhost:3000/api/tags"
          });
    },
    async createTag(data: any) {
        return await axios({
            method: "POST",
            url: "http://localhost:3000/api/tags",
            data
        });
    },
    async updateTag({ id, title }: { id: string, title: string }) {
        return await axios({
            method: "PUT",
            url: `http://localhost:3000/api/tags/${id}`,
            data: { title }
          });
    },
    async deleteTag(id: string) {
        return await axios({
            method: "DELETE",
            url: `http://localhost:3000/api/tags/${id}`
        });
    }
}