import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text", placeholder: "user@tijori.com" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                // Mock Auth for Local Development
                // in a real app, you'd check prisma db here
                if (credentials?.email === "admin@tijori.com" && credentials?.password === "admin") {
                    return { id: "1", name: "Tijori Admin", email: "admin@tijori.com" }
                }
                return null
            }
        })
    ],
    session: {
        strategy: "jwt"
    },
    pages: {
        signIn: '/auth/signin', // Custom signin page if we want later
    }
};
