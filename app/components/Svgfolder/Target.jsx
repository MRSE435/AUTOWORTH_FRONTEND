export default function Target({ className = "" }) {
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
            >
                <circle cx="12" cy="12" r="8"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="12" cy="12" r="1"/>
                <path d="M16 8l4-4"/>
                <path d="M17 4h3v3"/>
            </g>
        </svg>
    );
}