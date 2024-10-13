import * as sdk from "node-appwrite";

export const {
  NEXT_PUBLIC_ENDPOINT: ENDPOINT,
  NEXT_PUBLIC_PROJECT_ID,
  NEXT_PUBLIC_API_KEY,
} = process.env;

const client = new sdk.Client();

client.setEndpoint(ENDPOINT!).setProject(NEXT_PUBLIC_PROJECT_ID!).setKey(NEXT_PUBLIC_API_KEY!);

// export const databases = new sdk.Databases(client);
export const users = new sdk.Users(client);
// export const messaging = new sdk.Messaging(client);
// export const storage = new sdk.Storage(client);