import api from './api';

const userService = {
  getSections(params = {}) {
    return api.get('/users/sections/', { params });
  },
};

export default userService;