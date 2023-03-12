declare namespace NodeJS {
    export interface ProcessEnv {
        NEXT_PRIVATE_GITHUB_ID: string;
        NEXT_PRIVATE_GITHUB_SECRET: string;
        NEXT_PRIVATE_EMAIL_SERVER: string;
        NEXT_PRIVATE_EMAIL_FROM: string;
        NEXT_PUBLIC_GOOGLE_CLIENT_ID:string;
        NEXT_PUBLIC_GOOGLE_SECRET_KEY:string;
    }
  }