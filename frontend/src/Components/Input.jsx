export default function Input({ type, id, name, onChange }) {
  return (
    <div className="relative w-full">
      <input
        type={type}
        id={id}
        onChange={onChange}
        placeholder=" "
        autoComplete="off"
        required
        className="peer w-full bg-transparent border-b-2 rounded-full py-1 focus:outline-none focus:border-purple-600 transition-colors"
      />
      <label
        htmlFor={id}
        className="
          absolute left-2 transition-all duration-200 text-white cursor-text
          peer-placeholder-shown:top-1 peer-placeholder-shown:text-base
          peer-focus:-top-4 peer-focus:text-xs
          peer-valid:-top-4 peer-valid:text-xs
        "
      >
        {name}
      </label>
    </div>
  );
}
