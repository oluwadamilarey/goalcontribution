import React, { useRef, useCallback, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import { MdClose } from "react-icons/md";

const BackGround = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  background: rgba(6, 40, 45, 0.54);
  z-index: 4;
`;

const ModalWrapper = styled.div`
  width: 400px;
  height: 300px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  /* display: grid;
  grid-template-columns: 1fr;*/
  position: relative;
  z-index: 999;
  border-radius: 10px;
  padding: 10;
`;

const ModalImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px 0 0 10px;
  background: #000;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  line-height: 1.8;
  color: #141414;
  padding: 20px;
  margin-top: 10px;

  p {
    margin: 10px;
  }

  button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
  }
`;

const PText = styled.p`
  color: #04c8e0;

  p {
    color: #141414;
  }
`;

const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  background: transparent;
  border: 1px solid #98f4ff;
  border-radius: 6px;
  ::placeholder {
    color: #98f4ff;
  }
`;

const Submit = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  background: #ffa903;
  border: 1px solid;
  border-radius: 6px;
  cursor: pointer;
  color: white;
`;

const Continue = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  margin-top: 20px;
  background: #253351;
  border: 1px solid;
  border-radius: 6px;
  cursor: pointer;
  color: white;
  max-width: 89%;
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;

const Modal = ({
  showModal,
  setShowModal,
  email,
}: {
  showModal: any;
  setShowModal: any;
  email?: any;
}) => {
  const ModalRef = useRef<HTMLDivElement>(null); //this ensures that ModalRef = HTMLDivElement | null which is what the ref prop is expecting rather than HTMLDivElement | undefined.

  const animation = useSpring({
    config: {
      duration: 200,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
  });

  const closeModal = (e: any) => {
    if (ModalRef.current === e.target) {
      setShowModal(false);
    }
  };

  return (
    <>
      {showModal ? (
        <BackGround ref={ModalRef} onClick={closeModal}>
          <animated.div style={animation as any}>
            <ModalWrapper>
              <ModalContent>
                <PText>
                  A verification code will be sent to <p>{email}</p>
                </PText>
                <form>
                  <label>
                    <Input type="text" placeholder="Verification Code" />
                  </label>
                  <Submit type="submit" value="Submit" />
                </form>
                <Continue
                  type="submit"
                  value="Continue"
                  disabled={email == ""}
                />
              </ModalContent>
              <CloseModalButton
                aria-label="Close Modal"
                onClick={() => setShowModal((prev: Boolean) => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </BackGround>
      ) : null}
    </>
  );
};

export default Modal;
