"use client";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { signInAction } from "@/app/actions/auth";
import TextInput from "@/components/text-input/TextInput";

type FormData = {
    email: string;
    password: string;
};

const SignInForm = () => {
    const form = useForm<FormData>({
        defaultValues: {
            email: '',
        },
    });
    const [submitting, setSubmitting] = useState<boolean>(false);

    const onSignIn = async (data: FormData) => {
        setSubmitting(true);
        await signInAction(data)
        setSubmitting(false);
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
                    <button type="submit" title="Log in" disabled={submitting} />
                </div>
            </form>
        </FormProvider>
    );

};

export default SignInForm;