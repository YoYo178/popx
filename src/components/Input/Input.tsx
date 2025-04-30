import { FC, useState } from 'react';
import './Input.css';

interface InputProps {
    labelColor: string;
    required?: boolean;
    labelText: string;
    value?: string;
    placeholder?: string;
}

export const Input: FC<InputProps> = ({ labelColor, required, labelText, placeholder, value }) => {
    const [text, setText] = useState(value);
    return (
        <div className="input-container">
            <input
                className='input'
                type='text'
                required={required}
                value={text}
                onChange={(e) => setText(e.target.value)}
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
