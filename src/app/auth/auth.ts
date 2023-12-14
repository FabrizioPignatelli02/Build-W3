export interface Auth {
  accessToken: string;
  user: {
    poster: string;
    email: string;
    password: string;
    name: string;
    id: number;
  };
}
