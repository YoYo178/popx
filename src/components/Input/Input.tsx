import { FC } from 'react';
import './Input.css';

interface InputProps {
    labelColor: string;
    required?: boolean;
    labelText: string;
    value?: string;
    placeholder?: string;
}

export const Input: FC<InputProps> = ({ labelColor, required, labelText, placeholder, value }) => {
    return (
        <div className="input-container">
            <input
                className='input'
                type='text'
                required={required}
                value={value}
                placeholder={placeholder}
            />
            <div className="input-label">
                <label
                    style={{
                        color: labelColor ?? 'purple'
                    }}
                >
                    {labelText}
                </label>
                {required && (
                    <div className="required-field">*</div>
                )}
            </div>
        </div>
    )
}
