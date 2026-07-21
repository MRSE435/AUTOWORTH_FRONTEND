export default function TrendingUp({ className = "" }) {
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
                <path d="M4 19V5"/>
                <path d="M4 19h16"/>
                <rect x="7" y="11" width="2.5" height="8"/>
                <rect x="11" y="8" width="2.5" height="11"/>
                <rect x="15" y="5" width="2.5" height="14"/>
            </g>
        </svg>
    );
}