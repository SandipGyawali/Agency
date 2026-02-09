import type React from "react"

interface NumbersThatSpeakProps {
  /** Fixed width from Figma: 482px */
  width?: number | string
  /** Fixed height from Figma: 300px */
  height?: number | string
  /** Optional className to pass to root */
  className?: string
  /** Theme palette */
  theme?: "light" | "dark"
}

/**
 * Numbers that speak – Financial dashboard with layered charts
 * Generated from Figma via MCP with exact measurements (482×300px)
 * Single-file component following the v0-ready pattern used in this repo.
 */
const NumbersThatSpeak: React.FC<NumbersThatSpeakProps> = ({
  width = 482,
  height = 300,
  className = "",
  theme = "dark",
}) => {
  // Design tokens (derived from Figma local variables)
  const themeVars =
    theme === "light"
      ? {
          "--nts-surface": "#ffffff",
          "--nts-text-primary": "#2f3037",
          "--nts-text-secondary": "rgba(47,48,55,0.8)",
          "--nts-text-muted": "rgba(55,50,47,0.7)",
          "--nts-border": "rgba(47,48,55,0.12)",
          "--nts-shadow": "rgba(47,48,55,0.06)",
        }
      : ({
          "--nts-surface": "#ffffff",
          "--nts-text-primary": "#2f3037",
          "--nts-text-secondary": "rgba(47,48,55,0.8)",
          "--nts-text-muted": "rgba(55,50,47,0.7)",
          "--nts-border": "rgba(47,48,55,0.12)",
          "--nts-shadow": "rgba(47,48,55,0.06)",
        } as React.CSSProperties)

  // Figma-exported assets
  const imgSchedule = "/placeholder.svg?height=271&width=431"
  const imgYAxisLine = "/placeholder.svg?height=17&width=295"
  const imgYAxisLine1 = "/placeholder.svg?height=13&width=295"
  const imgYAxisLine2 = "/placeholder.svg?height=13&width=295"

  return (
    <div
      className={className}
      style={
        {
          width,
          height,
          position: "relative",
          background: "transparent",
          ...themeVars,
        } as React.CSSProperties
      }
      role="img"
      aria-label="Financial dashboard showing invoiced revenue charts"
      data-name="Numbers that speak"
      data-node-id="454:5856"
    >
      {/* Root positioning container - exact match to Figma */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          // top: "calc(50% + 23.703px)",
        }}
      >
        <div className="grid gap-12 divide-y *:text-center md:grid-cols-3 md:gap-2 md:divide-x md:divide-y-0">
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">+1200</div>
                        <p>Stars on GitHub</p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">22 Million</div>
                        <p>Active Users</p>
                    </div>
                    <div className="space-y-4">
                        <div className="text-5xl font-bold">+500</div>
                        <p>Powered Apps</p>
                    </div>
                </div>
      </div>
    </div>
  )
}

export default NumbersThatSpeak
