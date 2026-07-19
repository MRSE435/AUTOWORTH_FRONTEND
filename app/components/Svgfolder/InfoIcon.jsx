export default function InfoIcon({ className = "" }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Outer Circle */}
            <circle
                cx="12"
                cy="12"
                r="9"
                stroke="currentColor"
                strokeWidth="2"
            />

            {/* Dot */}
            <circle
                cx="12"
                cy="7"
                r="1.2"
                fill="currentColor"
            />

            {/* Vertical Line */}
            <path
                d="M12 10V16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
            />
        </svg>
    );
}