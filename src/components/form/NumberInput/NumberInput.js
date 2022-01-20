import { StyledNumberInput } from "./NumberInput.styled";
import { useInputState } from "../../../services/hooks/useInputState";

export const NumberInput = ({ label, field, handleForm }) => {
  const [number, handleNumber] = useInputState("");

  return (
    <StyledNumberInput>
      <label htmlFor={field}>{label}</label>
      <input
        type="number"
        id={field}
        name={field}
        value={number}
        onChange={handleNumber}
        onBlur={() => handleForm(field, number)}
        min="0"
      />
    </StyledNumberInput>
  );
};
