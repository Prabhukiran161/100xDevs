export const TextArea = ({placeholder}) => {
    return (
        <textarea placeholder={placeholder} rows={6} className="block w-full mb-8 bg-gray-50/25 border border-gray-300/50 rounded-lg px-4 py-3  focus:outline-1 focus:outline-offset-0 focus:outline-white/75"/>
    );
}