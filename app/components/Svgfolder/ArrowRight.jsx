export default function ArrowRight({ className = "" }) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
        >
            <g
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M5 12h14"/>
                <path d="M13 6l6 6-6 6"/>
            </g>
        </svg>
    );
}