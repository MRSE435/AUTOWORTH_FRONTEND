export default function HomeIcon({ className = "" }) {
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
                <path d="M12 30L32 14L52 30" />
                <path d="M18 28V50H46V28" />
                <path d="M27 50V38H37V50" />
            </g>
        </svg>
    );
}