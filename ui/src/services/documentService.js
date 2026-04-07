import api from './api';

const documentService = {
  getDocuments() {
    return api.get('/documents/');
  },

  uploadDocument(formData) {
    return api.post('/documents/upload/', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },

  deleteDocument(documentId) {
    return api.delete(`/documents/${documentId}/manage/`);
  },
};

export default documentService;