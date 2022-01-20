import { StyledTextInput } from "./TextInput.styled";
import { useInputState } from "../../../services/hooks/useInputState";

export const TextInput = ({ label, field, handleForm }) => {
  const [text, handleText] = useInputState("");
  return (
    <StyledTextInput>
      <label htmlFor={field}>{label}</label>
      <input
        type="text"
        id={field}
        name={field}
        value={text}
        onChange={handleText}
        onBlur={() => handleForm(field, text)}
      />
    </StyledTextInput>
  );
};
