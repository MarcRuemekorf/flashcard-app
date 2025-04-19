"use client";

import React, { useActionState, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import TextInput from "@/components/text-input/TextInput";
import { signIn } from "next-auth/react";

type FormData = {
    email: string;
    password: string;
};

const SignInForm = () => {
    const form = useForm<FormData>();
    const [submitting, setSubmitting] = useState<boolean>(false);

    const onSignIn = async (formData: FormData) => {
        setSubmitting(true);

        try {
            await signIn("credentials", { ...formData, callbackUrl: "/" });
        } catch (error) {
            console.error("Error signing in: ", error);
        } finally {
            setSubmitting(false);
        }
    };



    return (
        <FormProvider {...form}>
            <form className="form" onSubmit={form.handleSubmit(onSignIn)}>
                <TextInput
                    inputName="email"
                    options={{
                        required: 'your email is required to log in',
                    }}
                    label="Email"
                    autoComplete="email"
                />
                <TextInput
                    inputName="password"
                    options={{
                        required: 'your password is required to log in',
                    }}
                    label="Password"
                    autoComplete="current-password"
                    inputType="password"
                />
                <div className="form__footer">
                    <button type="submit" title="Log in" disabled={submitting}>Sign in</button>
                </div>
            </form>
        </FormProvider>
    );

};

export default SignInForm;