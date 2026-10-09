
export default function Container({ size = "6xl", className = "", children }) {
  const widths = {
    md: "max-w-md",
    "3xl": "max-w-3xl",
    "6xl": "max-w-6xl",
  };

  return (
    <div className={`mx-auto w-full px-4 ${widths[size]} ${className}`}>
      {children}
    </div>
  );
}
