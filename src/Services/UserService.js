import { USERS } from '../Mocks/UsersMocks';

class UserService {
  login({ email, password }) {
    const user = USERS.find(
      (user) => user.email === email && user.password === password
    );
    if (!user) return Promise.reject(new Error('User not found'));

    return Promise.resolve({
      status: 200,
      data: user,
    });
  }

  getAccountId() {
    return sessionStorage.getItem('accountId');
  }
}

export default new UserService();
