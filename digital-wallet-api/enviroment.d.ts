export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      DATABASE_URL: string;
      PORT: number;
      AWS_ACCESS_KE: string;
      AWS_SECRET_KEY: string;
      AWS_REGION: string;
    }
  }
}
