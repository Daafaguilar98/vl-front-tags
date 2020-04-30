import axios from "axios";

const VUE_API_REST_URI = process.env.VUE_API_REST_URI || "http://localhost:3000";

export default {
    async getTags() {
        return await axios({
            method: "GET",
            url: `${VUE_API_REST_URI}/api/tags`
          });
    },
    async createTag(data: any) {
        return await axios({
            method: "POST",
            url: `${VUE_API_REST_URI}/api/tags`,
            data
        });
    },
    async updateTag({ id, title }: { id: string, title: string }) {
        return await axios({
            method: "PUT",
            url: `${VUE_API_REST_URI}/api/tags/${id}`,
            data: { title }
          });
    },
    async deleteTag(id: string) {
        return await axios({
            method: "DELETE",
            url: `${VUE_API_REST_URI}/api/tags/${id}`
        });
    }
}