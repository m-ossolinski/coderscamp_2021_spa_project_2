import { Spinner, Span } from "./Loader.style";

export const Loader = ({ ...props }) => {
  return (
    <Span>
      <Spinner {...props} />
    </Span>
  );
};
