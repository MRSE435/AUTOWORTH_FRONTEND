export default function TargetIcon({ className = "" }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* Outer Ring */}
            <circle
                cx="12"
                cy="12"
                r="9"
                stroke="currentColor"
                strokeWidth="2"
            />

            {/* Inner Ring */}
            <circle
                cx="12"
                cy="12"
                r="5"
                stroke="currentColor"
                strokeWidth="2"
            />

            {/* Center Dot */}
            <circle
                cx="12"
                cy="12"
                r="1.8"
                fill="currentColor"
            />

            {/* Top Pointer */}
            <path
                d="M12 1.8L13.3 4.4H10.7L12 1.8Z"
                fill="currentColor"
            />
        </svg>
    );
}