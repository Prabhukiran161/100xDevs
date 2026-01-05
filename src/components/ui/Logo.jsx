import { Link } from "react-router-dom";
import { LOGO_SIZES } from "../../constants/logoSizes";

export const Logo = ({size="small"}) => {
  const logoStyle = `${LOGO_SIZES[size]} font-semibold mb-4 md:mb-0`;
  return (
    <Link to="/" className={logoStyle}>
      100<span className="text-red-700">x</span>Devs
    </Link>
  );
};
