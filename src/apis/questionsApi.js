import Request from "./index";

class QuestionsApi {
    static createQuestion(data) {
        return Request.post("/questions", data);
    }

    static getQuestions(orderBy = "id", sort = "ASC", limit = 20, offset = 0,
        filters = {}) {

        return Request.get("/questions",
            {
                orderBy: orderBy, sort: sort, limit: limit, offset: offset,
                filters: JSON.stringify(filters)
            });
    }

    static getQuestionById(id) {
        return Request.get(`/questions/${id}`);
    }

    static updateQuestion(id, data) {
        return Request.patch(`/questions/${id}`, data);
    }

    static deleteQuestion(id) {
        return Request.delete(`/questions/${id}`);
    }
}

export default QuestionsApi;