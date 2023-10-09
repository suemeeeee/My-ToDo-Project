import tw from "tailwind-styled-components";
import { deleteAllTodo } from "../Redux/Actions";
import { useDispatch } from "react-redux";

interface PopupType {
  modal: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
}
const ClearPopup = ({ modal, setModal }: PopupType) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteAllTodo());
    setModal(!modal);
  };

  return (
    <PopupWrapper>
      <PopupContainer>
        <h1>
          투두 리스트를
          <br />
          전체 삭제 하시겠습니까?
        </h1>
        <div>
          <PopupButton onClick={handleClick}>네</PopupButton>
          <PopupButton onClick={() => setModal(!modal)}>취소</PopupButton>
        </div>
      </PopupContainer>
    </PopupWrapper>
  );
};

export default ClearPopup;

const PopupWrapper = tw.div`
	w-full
	h-screen
	fixed
	top-0
	left-0
	bg-black
	bg-opacity-70

	flex
	justify-center 
	items-center
`;

const PopupContainer = tw.div`
	w-60
	flex-row
	justify-center
	items-center
	py-6
	px-3
	rounded-lg
	text-black
	bg-main-color-pink

	[&>h1]: text-center
	[&>div]:flex
	[&>div]:mt-2
`;

const PopupButton = tw.button`
	w-full
	m-1
	py-1
	px-1
	rounded-xl

	text-white
	font-medium
	bg-main-color-red
`;
