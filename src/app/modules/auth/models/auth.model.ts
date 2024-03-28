export class UserLogin {
  authToken: string;
  refreshToken: string;
  expiresIn: Date;

  setAuth(auth: UserLogin) {
    this.authToken = auth.authToken;
    this.refreshToken = auth.refreshToken;
    this.expiresIn = auth.expiresIn;
  }
}
