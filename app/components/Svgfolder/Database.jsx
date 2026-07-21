export default function Database({ className = "" }) {
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
                <ellipse cx="12" cy="5" rx="7" ry="3"/>
                <path d="M5 5v10c0 1.7 3.1 3 7 3s7-1.3 7-3V5"/>
                <path d="M5 10c0 1.7 3.1 3 7 3s7-1.3 7-3"/>
                <path d="M5 15c0 1.7 3.1 3 7 3s7-1.3 7-3"/>
            </g>
        </svg>
    );
}