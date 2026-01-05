import { Link } from "react-router-dom";

export const ImportantLink = ({name,path}) =>{
    const linkStyle = `my-2 md:my-4 block text-base text-gray-300 hover:text-white`;
    return (<Link to={path} className={linkStyle}>{name}</Link>);
}