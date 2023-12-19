import { FirebaseLoginErrorPipe } from './firebase-login-error.pipe';

describe('FirebaseLoginErrorPipe', () => {
  it('create an instance', () => {
    const pipe = new FirebaseLoginErrorPipe();
    expect(pipe).toBeTruthy();
  });
});
