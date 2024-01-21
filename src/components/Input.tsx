import { useId } from "react";

type InputProps = {
    name: string,
    error: string,
    label: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input( {...props } : InputProps ) {
    const id = useId(); 
    return (
        <div className={`input_group ${props.error.length  ? 'validate_error' : ''}`}>
            {props.label.length && 
             <div className="input_group__header">
                {props.label.length && <label htmlFor={`${props.name}_${id}`}>{props.label}</label>}
                {props.error && <span className="error">{props.error}</span>}
             </div>
            }
            <input id={`${props.name}_${id}`} type='text' onChange={props.onChange}/>
            
        </div>
    );
}; 