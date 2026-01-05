import { BUTTON_COLORS } from "../../constants/buttonColors";
import { TEXT_COLORS } from "../../constants/textColors";

export const Button = ({
  bg = "primary",
  content,
  text = "primary",
  callBack,
}) => {
  const buttonStyle = `${BUTTON_COLORS[bg]}  ${
    TEXT_COLORS[text]
  } border border-gray-200  shadow-sm rounded-lg text-sm px-4 md:px-8 py-2.5 `;
  return (
    <button className={buttonStyle} onClick={callBack}>
      {content}
    </button>
  );
};
