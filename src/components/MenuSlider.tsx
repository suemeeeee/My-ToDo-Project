import { useNavigate } from "react-router-dom";
import { useState } from "react";
import tw from "tailwind-styled-components";
import ClearPopup from "./ClearPopup";

const MenuSlider = () => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  return (
    <>
      <MenuWrapper>
        <MenuContainer>
          <ul>
            <li>
              <MenuButton onClick={() => navigate("/")}>HOME</MenuButton>
            </li>
            <li>
              <MenuButton onClick={() => setModal(!modal)}>Clear List</MenuButton>
            </li>
            <li>
              <MenuButton onClick={() => navigate("/mypage")}>MyPage</MenuButton>
            </li>
          </ul>
          <Label>DO TO-DO</Label>
        </MenuContainer>
      </MenuWrapper>
      {modal ? <ClearPopup modal={modal} setModal={setModal}></ClearPopup> : <></>}
    </>
  );
};

export default MenuSlider;

const MenuWrapper = tw.div`
	fixed
  right-0
	w-3/5
	h-screen
`;

const Label = tw.h1`
	absolute 
	bottom-14
  right-1
  text-3xl
  font-extrabold
`;

const MenuContainer = tw.div`
	w-full
	h-full
	bg-main-color-red
`;

const MenuButton = tw.button`
	w-full
	text-white
	font-bold
	p-8
`;
