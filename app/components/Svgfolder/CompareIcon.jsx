export default function CompareIcon({ className = "" }) {
    return (
        <svg
            className={className}
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="M16 48V24" />
                <path d="M32 48V16" />
                <path d="M48 48V30" />

                <circle cx="16" cy="24" r="3" />
                <circle cx="32" cy="16" r="3" />
                <circle cx="48" cy="30" r="3" />

                <path d="M13 48H19" />
                <path d="M29 48H35" />
                <path d="M45 48H51" />
            </g>
        </svg>
    );
}