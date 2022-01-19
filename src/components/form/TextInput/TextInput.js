import { StyledTextInput } from "./TextInput.styled";
import { useInputState } from "../../../services/hooks/useInputState";

export const TextInput = ({ label, name }) => {
  const [text, handleText] = useInputState("");
  return (
    <StyledTextInput>
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        id={name}
        name={name}
        value={text}
        onChange={handleText}
      />
    </StyledTextInput>
  );
};
