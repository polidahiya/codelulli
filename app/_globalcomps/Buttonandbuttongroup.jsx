export const Button = ({ children, onClick, style }) => (
  <button
    onClick={onClick}
    style={style}
    className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
  >
    {children}
  </button>
);

export const ControlGroup = ({ title, children }) => (
  <div>
    <p className="font-medium mt-5 !mb-0">{title}:</p>
    <div className="flex flex-wrap gap-2">{children}</div>
  </div>
);
