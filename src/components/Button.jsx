
const Button = ({
    children,
    onClick,
    type = "button",
    variant = "primary",
    size = "md",
    className = "",
}) => {
    const baseStyles = "font-semibold transition-all duration-300 shadow inline-flex items-center justify-center cursor-pointer";

    const variants = {
        primary: "bg-[#0c448d] text-white rounded-md hover:bg-blue-700",
        outline: "border border-[#0c448d] text-[#0c448d] rounded-md hover:bg-[#0c448d] hover:text-white",
        cta: "bg-white text-[#0c448d] rounded-full px-8 py-4 shadow-lg hover:scale-105 hover:shadow-xl border border-[#0c448d]",
        danger: " text-gray-700 rounded-md hover:bg-gray-200 transition-all duration-300",
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };

    return (
        <button
            type={type}
            onClick={onClick}
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
