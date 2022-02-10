import styled from "styled-components";

export const StyledSelect = styled.div`
  select {
    // A reset of styles, including removing the default dropdown arrow
    appearance: none;
    background-color: transparent;
    border: none;
    padding: 0 1em 0 0;
    margin: 0;
    width: 100%;
    font-family: inherit;
    font-size: 1.3em;
    cursor: inherit;
    line-height: inherit;
    width: 250px;
    z-index: 1;
    outline: none;
  }

  .select {
    display: grid;
    grid-template-areas: "select";
    align-items: center;
    position: relative;
    min-width: 15ch;
    max-width: 30ch;
    border: 1px solid var(--select-border);
    border-radius: 0.25em;
    padding: 0.25em 0.5em;
    font-size: 1.25rem;
    cursor: pointer;
    line-height: 1.1;
    background-color: #fff;
    background-image: linear-gradient(to top, #f9f9f9, #fff 33%);
  }

  select:focus + .focus {
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    border: 2px solid var(--select-focus);
    border-radius: inherit;
  }

  select option {
    white-space: normal;

    outline-color: var(--select-focus);
  }

  .select--disabled {
    cursor: not-allowed;
    background-color: #eee;
    background-image: linear-gradient(to top, #ddd, #eee 33%);
  }

  label {
    font-size: 3em;
    font-weight: 500;
  }

  .select + label {
    margin-top: 2rem;
  }

  body {
    min-height: 100vh;
    display: grid;
    place-content: center;
    grid-gap: 0.5rem;
    font-family: "Baloo 2", sans-serif;
    background-color: #e9f2fd;
    padding: 1rem;
  }
`;
