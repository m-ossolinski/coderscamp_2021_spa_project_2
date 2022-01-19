import { StyledNumberInput } from "./NumberInput.styled";
import { useInputState } from "../../../services/hooks/useInputState";

export const NumberInput = ({ label, name }) => {
  const [number, handleNumber] = useInputState("");
  return (
    <StyledNumberInput>
      <label htmlFor={name}>{label}</label>
      <input
        type="number"
        id={name}
        name={name}
        value={number}
        onChange={handleNumber}
        min="0"
      />
    </StyledNumberInput>
  );
};
