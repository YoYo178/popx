import { FC } from 'react';
import './RadioButtonQuestion.css';

interface RadioButtonQuestionProps {
    name: string;
    question: string;
    required?: boolean;
    options: string[];
    checked?: boolean[];
}

export const RadioButtonQuestion: FC<RadioButtonQuestionProps> = ({
    name,
    question,
    required,
    options,
    checked
}) => {
    return (
        <div className="radio-button-question-container">
            <div className="radio-btn-question-label">
                <span>{question}</span>
                {required && <span className="required-field">*</span>}
            </div>
            <div className="radio-buttons-container">
                {options.map((option, idx) => (
                    <label key={idx} className="radio-label-button-pair">
                        <input type="radio" name={name} value={option} checked={checked?.length ? checked[idx] : false} />
                        <span className="radio-btn" />
                        <span className="radio-option-label">{option}</span>
                    </label>
                ))}
            </div>
        </div>
    );
};
    