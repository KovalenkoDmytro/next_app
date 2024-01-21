export interface IInput {
    label?: string,
    required?: boolean,
    error?: string,
    type?: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}