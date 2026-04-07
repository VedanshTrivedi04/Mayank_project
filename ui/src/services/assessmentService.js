import api from './api';

const assessmentService = {
  async getTests() {
    const response = await api.get('/assessments/tests/');
    return response.data;
  },

  deleteTest(testId) {
    return api.delete(`/assessments/tests/${testId}/`);
  },
};

export default assessmentService;