import styled from "styled-components";

export const StyledModal = styled.div`
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1040;
    width: 100vw;
    height: 100vh;
    background-color: #000;
    opacity: 0.5;
  }

  .modal-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1050;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    outline: 0;
  }

  .modal {
    z-index: 100;
    background: white;
    position: relative;
    margin: 1rem auto;
    border-radius: 10px;
    max-width: 500px;
    padding: 1rem;
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
  }

  .modal-btn-close {
    width: 35px;
    height: 35px;
    border-radius: 10px;
    font-size: 1.4rem;
    font-weight: 700;
    line-height: 1;
    color: #000;
    cursor: pointer;
    border: none;
  }

  .modal-body {
    min-height: 300px;
    margin-top: 1rem;
  }

  .button-wrapper {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;
