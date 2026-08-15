export function VoiceReasonMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 512 512" role="img" aria-label="VoiceReason" className={className}>
      <defs>
        <radialGradient id="vr-orb" cx="35%" cy="30%" r="78%">
          <stop offset="0%" stopColor="#8a63ff" />
          <stop offset="60%" stopColor="#5a2cf0" />
          <stop offset="100%" stopColor="#3d1fb0" />
        </radialGradient>
        <radialGradient id="vr-glow" cx="50%" cy="50%" r="50%">
          <stop offset="55%" stopColor="#6a3cff" stopOpacity="0.32" />
          <stop offset="78%" stopColor="#6a3cff" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#6a3cff" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="vr-sheen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.22" />
          <stop offset="45%" stopColor="#ffffff" stopOpacity="0.04" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>
      </defs>
      <circle cx="256" cy="256" r="252" fill="url(#vr-glow)" />
      <circle cx="256" cy="256" r="196" fill="url(#vr-orb)" />
      <circle cx="256" cy="256" r="196" fill="url(#vr-sheen)" />
      <g transform="translate(256,256) scale(3.15) translate(-48,-30)">
        <polyline
          fill="none"
          stroke="#ffffff"
          strokeWidth="3.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.97"
          points="6,30 14,27 20,21 26,37 32,15 38,43 44,9 50,45 56,17 62,41 68,25 74,33 82,30 90,30"
        />
      </g>
    </svg>
  );
}
