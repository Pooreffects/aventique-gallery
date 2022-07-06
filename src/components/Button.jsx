export default function Button({ name, onClick }) {
  return (
    <div className="w-full text-center pb-5">
      <button
        onClick={onClick}
        className="bg-slate-300 p-2 rounded font-primary font-medium  text-gray-800 hover:bg-orange-700 hover:text-gray-200"
      >
        {name}
      </button>
    </div>
  );
}
