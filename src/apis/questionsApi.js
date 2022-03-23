import Request from "./index";

class QuestionsApi {
    static createQuestion(data) {
        return Request.post("/questions", data);
    }

    static getQuestions() {
        return Request.get("/questions");
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