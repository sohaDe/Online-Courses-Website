const SectionHeader = ({ label, title, subtitle, align = "center" }) => {
    const alignment = align === "left" ? "text-left" : align === "right" ? "text-right" : "text-center";

    return (
        <div className={`${alignment} mb-12`}>
            {label && (
                <span className="block text-[#0c448d] text-lg font-semibold mb-2">
                    {label}
                </span>
            )}

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {title}
            </h2>

            {subtitle && (
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                    {subtitle}
                </p>
            )}
        </div>
    )
}

export default SectionHeader;
