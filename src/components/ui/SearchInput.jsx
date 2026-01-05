export const SearchInput = ({
  placeholder = "Type to search",
  onChange,
  value,
  type="web"
}) => {
  return (
    <div className="relative flex items-center">
      <input
        type="text"
        className={`border  border-gray-300/75 rounded-lg px-9 py-2  text-blue-900 focus:outline-4 focus:outline-blue-900/50 focus:outline-offset-1 ${
          type === "mobile" ? "w-full" : "w-55"
        }`}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-8 absolute left-1 p-1 text-blue-900"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
        />
      </svg>
    </div>
  );
};
