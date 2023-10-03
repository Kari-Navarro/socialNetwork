import { loginUser } from '../src/firebase/auth';

// jest.mock('firebase/auth', () => ({
//   signInWithEmailAndPassword: () =>
//     new Promise((resolve) => resolve({ user: 'Regs' })),
//   getAuth: jest.fn(),
// }));

describe('firebase auth', () => {
  it('loginUser', () => {
    const user = loginUser();
    expect(user).not.toBeUndefined();
  });
});
