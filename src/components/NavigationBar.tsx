import tw from "tailwind-styled-components";
import { BiMenu } from "react-icons/Bi";
import MenuSlider from "./MenuSlider";
import { useState } from "react";

const NavigationBar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleClick = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <div>
      <Container>
        <NavDiv>
          <h1>두, 투두</h1>
          <button onClick={handleClick}>
            <BiMenu size="2rem"></BiMenu>
          </button>
        </NavDiv>
        {openMenu ? <MenuSlider></MenuSlider> : <></>}
      </Container>
    </div>
  );
};

export default NavigationBar;

const Container = tw.div`
  w-full
  h-full
  bg-main-color-red
  text-white
`;

const NavDiv = tw.div`
  flex
  justify-between
  items-center
  py-3
  px-2
  text-lg
  font-bold
`;
