import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// Single-admin app: credentials are read from environment variables so they
// don't sit in source control. Next-auth's built-in /api/auth/signin page
// handles the form — no custom page needed.
export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                const expectedEmail = process.env.ADMIN_EMAIL;
                const expectedPassword = process.env.ADMIN_PASSWORD;
                if (!expectedEmail || !expectedPassword) return null;
                if (
                    credentials?.email === expectedEmail &&
                    credentials?.password === expectedPassword
                ) {
                    return { id: "1", name: "Admin", email: expectedEmail };
                }
                return null;
            }
        })
    ],
    session: {
        strategy: "jwt"
    }
};
