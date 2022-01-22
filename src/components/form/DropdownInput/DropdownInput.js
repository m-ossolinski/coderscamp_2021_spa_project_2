import { StyledDropdownInput } from "./DropdownInput.styled";
import { useInputState } from "../../../services/hooks/useInputState";

export const DropdownInput = ({ options, name, label }) => {
  const [value, handleValue] = useInputState(options[0]);
  return <StyledDropdownInput></StyledDropdownInput>;
};
