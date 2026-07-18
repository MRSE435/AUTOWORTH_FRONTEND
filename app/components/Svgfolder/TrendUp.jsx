export default function TrendUp({ className = "" }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <linearGradient id="trendGradient" x1="0" y1="24" x2="24" y2="0">
                    <stop offset="0%" stopColor="#A78BFA" />
                    <stop offset="55%" stopColor="#8B5CF6" />
                    <stop offset="100%" stopColor="#7C3AED" />
                </linearGradient>
            </defs>

            <path
                d="M4 17L9 12L13 16L20 9"
                stroke="url(#trendGradient)"
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            <path
                d="M16 9H20V13"
                stroke="url(#trendGradient)"
                strokeWidth="2.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}