export default function Trophy() {
    return (
        <svg className="w-20 h-20"

            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <radialGradient id="bg" cx="35%" cy="30%" r="80%">
                    <stop offset="0%" stopColor="#3B247D" />
                    <stop offset="100%" stopColor="#24135A" />
                </radialGradient>

                <linearGradient id="gold" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#FFD45C" />
                    <stop offset="100%" stopColor="#F5AF1F" />
                </linearGradient>

                <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow
                        dx="0"
                        dy="2"
                        stdDeviation="2"
                        floodColor="#000"
                        floodOpacity="0.35"
                    />
                </filter>
            </defs>

            {/* Background */}
            <circle cx="100" cy="100" r="90" fill="url(#bg)" />

            {/* Decorative dots */}
            <g fill="#5D4A97" opacity="0.7">
                <circle cx="53" cy="124" r="2" />
                <circle cx="66" cy="138" r="1.5" />
                <circle cx="145" cy="122" r="2" />
                <circle cx="135" cy="138" r="1.5" />
            </g>

            {/* Purple glow */}
            <circle cx="143" cy="165" r="10" fill="#6C39FF" opacity="0.4" />

            {/* Trophy */}
            <g fill="url(#gold)" filter="url(#shadow)">
                {/* Cup */}
                <path
                    d="
            M63 48
            H137
            V74
            C137 99 122 118 100 124
            C78 118 63 99 63 74
            Z
          "
                />

                {/* Left Handle */}
                <path
                    d="
            M63 58
            C43 58 42 89 59 97
            C67 101 74 97 77 91
            C69 90 63 84 63 74
            C63 66 66 62 73 62
            L73 58
            Z
          "
                />

                {/* Right Handle */}
                <path
                    d="
            M137 58
            C157 58 158 89 141 97
            C133 101 126 97 123 91
            C131 90 137 84 137 74
            C137 66 134 62 127 62
            L127 58
            Z
          "
                />

                {/* Stem */}
                <rect x="94" y="124" width="12" height="26" rx="3" />

                {/* Base */}
                <rect x="84" y="149" width="32" height="8" rx="3" />
                <rect x="74" y="158" width="52" height="10" rx="3" />
            </g>

            {/* Star */}
            <path
                d="
          M100 69
          L103.8 78.5
          L114 79.5
          L106 86.5
          L108.5 96
          L100 91
          L91.5 96
          L94 86.5
          L86 79.5
          L96.2 78.5
          Z
        "
                fill="#24135A"
            />
        </svg>
    );
}