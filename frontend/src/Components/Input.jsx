export default function Input({ type, placeholder, id, name, onChange }) {
    return (
      <div className="relative w-full">
        <input
          type={type}
          id={id}
          className="border-b-2 rounded-full py-1 focus:outline-none focus:border-purple-600 focus:border-b-3 transition-colors peer w-full bg-transparent"
          placeholder={placeholder}
          onChange={onChange}
          autoComplete="off"
          required
        />
        <label
          htmlFor={id}
          className="absolute left-2 top-1 text-white cursor-text peer-focus:text-xs peer-focus:-top-4 peer-focus:text-white transition-all"
        >
          {name}
        </label>
      </div>
    );
  }
  