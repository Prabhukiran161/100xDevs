import { DynamicIcon } from "lucide-react/dynamic";

export const SocialIcon = ({ name, path }) => {
  return (
    <a href={path} target="_blank" >
      <DynamicIcon
        name={name}
        size={52}
        className="bg-gray-600/50 p-2.5 rounded-lg hover:bg-gray-700/50 transition"
      />
    </a>
  );
};
