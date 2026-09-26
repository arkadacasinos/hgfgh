import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 96,
          background: '#0a0e1a',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#d4af37',
          fontWeight: 800,
          borderRadius: 24,
          letterSpacing: '-0.05em',
        }}
      >
        LB
      </div>
    ),
    { ...size }
  )
}
