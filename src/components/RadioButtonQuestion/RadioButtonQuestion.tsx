import { FC, useState } from 'react';
import './RadioButtonQuestion.css';

interface RadioButtonQuestionProps {
    name: string;
    question: string;
    required?: boolean;
    options: string[];
    defaultCheck?: number;
}

export const RadioButtonQuestion: FC<RadioButtonQuestionProps> = ({
    name,
    question,
    required,
    options,
    defaultCheck
}) => {
    const [selectedIndex, setSelectedIndex] = useState<number | undefined>(defaultCheck);

    return (
        <div className="radio-button-question-container">
            <div className="radio-btn-question-label">
                <span>{question}</span>
                {required && <span className="required-field">*</span>}
            </div>
            <div className="radio-buttons-container">
                {options.map((option, idx) => (
                    <label key={idx} className="radio-label-button-pair">
                        <input type="radio" name={name} value={option} checked={selectedIndex === idx} onChange={() => setSelectedIndex(idx)} />
                        <span className="radio-btn" />
                        <span className="radio-option-label">{option}</span>
                    </label>
                ))}
            </div>
        </div>
    );
};
