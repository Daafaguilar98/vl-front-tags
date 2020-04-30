import axios from "axios";

const API_REST_URI = process.env.VUE_APP_API_REST_URI || "http://localhost:3000";

export default {
    async getTags() {
        return await axios({
            method: "GET",
            url: `${API_REST_URI}/api/tags`
          });
    },
    async createTag(data: any) {
        return await axios({
            method: "POST",
            url: `${API_REST_URI}/api/tags`,
            data
        });
    },
    async updateTag({ id, title }: { id: string, title: string }) {
        return await axios({
            method: "PUT",
            url: `${API_REST_URI}/api/tags/${id}`,
            data: { title }
          });
    },
    async deleteTag(id: string) {
        return await axios({
            method: "DELETE",
            url: `${API_REST_URI}/api/tags/${id}`
        });
    }
}