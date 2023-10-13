import { loginUser } from '../src/firebase/auth';

describe('firebase auth', () => {
  it('loginUser', () => {
    const user = loginUser();
    expect(user).not.toBeUndefined();
  });
});
