export default function CheckCircle({ className = "" }) {
    return (
        <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            fill="none"
        >
            {/* Outer Circle */}
            <circle
                cx="12"
                cy="12"
                r="8.5"
                stroke="currentColor"
                strokeWidth="2.5"
            />

            {/* Check Mark */}
            <path
                d="M8.2 12.2L10.9 14.9L15.8 10"
                stroke="currentColor"
                strokeWidth="2.6"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}