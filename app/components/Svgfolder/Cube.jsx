export default function Cube({ className = "" }) {
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
                <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z"/>
                <path d="M12 12l8-4.5"/>
                <path d="M12 12L4 7.5"/>
                <path d="M12 12v9"/>
            </g>
        </svg>
    );
}