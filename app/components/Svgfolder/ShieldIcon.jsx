export default function ShieldIcon({ className = "" }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M12 2.5L5 5.5V10.8C5 16.2 8.5 20.3 12 21.5C15.5 20.3 19 16.2 19 10.8V5.5L12 2.5Z"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            <path
                d="M12 4.5V20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
            />
        </svg>
    );
}