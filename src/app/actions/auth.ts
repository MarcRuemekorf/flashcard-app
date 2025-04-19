"use server";

import { signIn, signOut } from "../../../auth";
import { revalidatePath } from "next/cache";
import { AuthError } from "next-auth";
import prisma from "@/lib/prisma";

type FormData = {
    email: string;
    password: string;
};

const getUserByEmailAction = async (email: string) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                email,
            },
        });
        return user;
    } catch (error) {
        console.log(error);
        return null;
    }
};


export const signInAction = async (formData: FormData) => {
    console.log("FormData", formData);
    const rawFormData = {
        email: formData.email,
        password: formData.password,
    };

    const existingUser = await getUserByEmailAction(formData.email);

    try {
        await signIn("credentials", rawFormData);
    } catch (error: any) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case "CredentialsSignin":
                    return { error: "Invalid credentials!" };
                default:
                    return { error: "Something went wrong!" };
            }
        }

        throw error;
    }

    revalidatePath("/");
};

export async function signOutAction() {
    await signOut({ redirectTo: "/login" });
    revalidatePath("/");
}