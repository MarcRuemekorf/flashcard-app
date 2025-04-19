import React, { ReactElement } from 'react';

import { RegisterOptions, useFormContext } from 'react-hook-form';

type Props = {
    inputName: string;
    label: string;
    autoComplete?: string;
    disabled?: boolean;
    inputType?: string;
    options?: RegisterOptions;
    placeholder?: string;
    info?: string;
    onFocus?: () => void;
    onBlur?: () => void;
};

const TextInput = ({
    inputType = 'text',
    autoComplete,
    inputName,
    label,
    disabled = false,
    options,
    placeholder,
    onFocus,
    onBlur,
}: Props): ReactElement => {
    const { register } = useFormContext();

    const inputProperties = {
        ...register(inputName, options),
        name: inputName,
        type: inputType,
        disabled,
        autoComplete: autoComplete ? autoComplete : undefined,
        placeholder: placeholder ? placeholder : undefined,
        onFocus: onFocus ? onFocus : undefined,
        onBlur: onBlur ? onBlur : undefined,
    };

    return (
        <label className="form__item">
            <span className="form__label">{label}</span>
            <div className="form__input">
                <input {...inputProperties} />
            </div>
        </label>
    );
};

export default TextInput;
