export default function Button({
  label,
  type = "primary",
  icon,
  children,
  className = "",
  height,
  onClick,
  width,
}) {
  const base =
    "flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-200 px-7 py-4 text-base";

  const styles = {
    primary: `bg-green-500 text-white shadow-lg hover:shadow-green-200 ${
      height ? `h-${height}` : ""
    }${width ? ` w-${width}` : ""}`,
    outline: `border-2 text-green-500 hover:text-green-600 ${
      height ? `h-${height}` : ""
    }${width ? ` w-${width}` : ""}`,
    whiteOutline: `border-2 bg-white text-black hover:text-green-600 ${
      height ? `h-${height}` : ""
    }${width ? ` w-${width}` : ""}`,
    coal: `bg-black text-white shadow-lg hover:shadow-green-200 ${
      height ? `h-${height}` : ""
    }${width ? ` w-${width}` : ""}`,
    normal: `text-white shadow-lg hover:shadow-green-200 ${
      height ? `h-${height}` : ""
    }${width ? ` w-${width}` : ""}`,
  };

  return (
    <button
      className={`${base} ${styles[type]} ${className}`}
      onClick={onClick}
    >
      {icon && <span className="text-xl">{icon}</span>}
      {label || children}
    </button>
  );
}
