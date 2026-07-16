export default function BulletDot({ className = "" }) {
    return (
        <svg
            viewBox="0 0 12 12"
            className={className}
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="6" cy="6" r="5" />
        </svg>
    );
}