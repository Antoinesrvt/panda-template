const tokens = {
  "animations.backdrop-in": {
    "value": "fade-in 250ms var(--easings-emphasized-in)",
    "variable": "var(--animations-backdrop-in)"
  },
  "animations.backdrop-out": {
    "value": "fade-out 200ms var(--easings-emphasized-out)",
    "variable": "var(--animations-backdrop-out)"
  },
  "animations.dialog-in": {
    "value": "slide-in 400ms var(--easings-emphasized-in)",
    "variable": "var(--animations-dialog-in)"
  },
  "animations.dialog-out": {
    "value": "slide-out 200ms var(--easings-emphasized-out)",
    "variable": "var(--animations-dialog-out)"
  },
  "animations.drawer-in-left": {
    "value": "slide-in-left 400ms var(--easings-emphasized-in)",
    "variable": "var(--animations-drawer-in-left)"
  },
  "animations.drawer-out-left": {
    "value": "slide-out-left 200ms var(--easings-emphasized-out)",
    "variable": "var(--animations-drawer-out-left)"
  },
  "animations.drawer-in-right": {
    "value": "slide-in-right 400ms var(--easings-emphasized-in)",
    "variable": "var(--animations-drawer-in-right)"
  },
  "animations.drawer-out-right": {
    "value": "slide-out-right 200ms var(--easings-emphasized-out)",
    "variable": "var(--animations-drawer-out-right)"
  },
  "animations.skeleton-pulse": {
    "value": "skeleton-pulse 2s var(--easings-pulse) infinite",
    "variable": "var(--animations-skeleton-pulse)"
  },
  "animations.fade-in": {
    "value": "fade-in 400ms var(--easings-emphasized-in)",
    "variable": "var(--animations-fade-in)"
  },
  "blurs.sm": {
    "value": "4px",
    "variable": "var(--blurs-sm)"
  },
  "blurs.base": {
    "value": "8px",
    "variable": "var(--blurs-base)"
  },
  "blurs.md": {
    "value": "12px",
    "variable": "var(--blurs-md)"
  },
  "blurs.lg": {
    "value": "16px",
    "variable": "var(--blurs-lg)"
  },
  "blurs.xl": {
    "value": "24px",
    "variable": "var(--blurs-xl)"
  },
  "blurs.2xl": {
    "value": "40px",
    "variable": "var(--blurs-2xl)"
  },
  "blurs.3xl": {
    "value": "64px",
    "variable": "var(--blurs-3xl)"
  },
  "borders.none": {
    "value": "none",
    "variable": "var(--borders-none)"
  },
  "durations.fastest": {
    "value": "50ms",
    "variable": "var(--durations-fastest)"
  },
  "durations.faster": {
    "value": "100ms",
    "variable": "var(--durations-faster)"
  },
  "durations.fast": {
    "value": "150ms",
    "variable": "var(--durations-fast)"
  },
  "durations.normal": {
    "value": "200ms",
    "variable": "var(--durations-normal)"
  },
  "durations.slow": {
    "value": "300ms",
    "variable": "var(--durations-slow)"
  },
  "durations.slower": {
    "value": "400ms",
    "variable": "var(--durations-slower)"
  },
  "durations.slowest": {
    "value": "500ms",
    "variable": "var(--durations-slowest)"
  },
  "easings.pulse": {
    "value": "cubic-bezier(0.4, 0.0, 0.6, 1.0)",
    "variable": "var(--easings-pulse)"
  },
  "easings.default": {
    "value": "cubic-bezier(0.2, 0.0, 0, 1.0)",
    "variable": "var(--easings-default)"
  },
  "easings.emphasized-in": {
    "value": "cubic-bezier(0.05, 0.7, 0.1, 1.0)",
    "variable": "var(--easings-emphasized-in)"
  },
  "easings.emphasized-out": {
    "value": "cubic-bezier(0.3, 0.0, 0.8, 0.15)",
    "variable": "var(--easings-emphasized-out)"
  },
  "fontSizes.2xs": {
    "value": "0.5rem",
    "variable": "var(--font-sizes-2xs)"
  },
  "fontSizes.xs": {
    "value": "0.75rem",
    "variable": "var(--font-sizes-xs)"
  },
  "fontSizes.sm": {
    "value": "0.875rem",
    "variable": "var(--font-sizes-sm)"
  },
  "fontSizes.md": {
    "value": "1rem",
    "variable": "var(--font-sizes-md)"
  },
  "fontSizes.lg": {
    "value": "1.125rem",
    "variable": "var(--font-sizes-lg)"
  },
  "fontSizes.xl": {
    "value": "1.25rem",
    "variable": "var(--font-sizes-xl)"
  },
  "fontSizes.2xl": {
    "value": "1.5rem",
    "variable": "var(--font-sizes-2xl)"
  },
  "fontSizes.3xl": {
    "value": "1.875rem",
    "variable": "var(--font-sizes-3xl)"
  },
  "fontSizes.4xl": {
    "value": "2.25rem",
    "variable": "var(--font-sizes-4xl)"
  },
  "fontSizes.5xl": {
    "value": "3rem",
    "variable": "var(--font-sizes-5xl)"
  },
  "fontSizes.6xl": {
    "value": "3.75rem",
    "variable": "var(--font-sizes-6xl)"
  },
  "fontSizes.7xl": {
    "value": "4.5rem",
    "variable": "var(--font-sizes-7xl)"
  },
  "fontSizes.8xl": {
    "value": "6rem",
    "variable": "var(--font-sizes-8xl)"
  },
  "fontSizes.9xl": {
    "value": "8rem",
    "variable": "var(--font-sizes-9xl)"
  },
  "fontWeights.thin": {
    "value": "100",
    "variable": "var(--font-weights-thin)"
  },
  "fontWeights.extralight": {
    "value": "200",
    "variable": "var(--font-weights-extralight)"
  },
  "fontWeights.light": {
    "value": "300",
    "variable": "var(--font-weights-light)"
  },
  "fontWeights.normal": {
    "value": "400",
    "variable": "var(--font-weights-normal)"
  },
  "fontWeights.medium": {
    "value": "500",
    "variable": "var(--font-weights-medium)"
  },
  "fontWeights.semibold": {
    "value": "600",
    "variable": "var(--font-weights-semibold)"
  },
  "fontWeights.bold": {
    "value": "700",
    "variable": "var(--font-weights-bold)"
  },
  "fontWeights.extrabold": {
    "value": "800",
    "variable": "var(--font-weights-extrabold)"
  },
  "fontWeights.black": {
    "value": "900",
    "variable": "var(--font-weights-black)"
  },
  "letterSpacings.tighter": {
    "value": "-0.05em",
    "variable": "var(--letter-spacings-tighter)"
  },
  "letterSpacings.tight": {
    "value": "-0.025em",
    "variable": "var(--letter-spacings-tight)"
  },
  "letterSpacings.normal": {
    "value": "0em",
    "variable": "var(--letter-spacings-normal)"
  },
  "letterSpacings.wide": {
    "value": "0.025em",
    "variable": "var(--letter-spacings-wide)"
  },
  "letterSpacings.wider": {
    "value": "0.05em",
    "variable": "var(--letter-spacings-wider)"
  },
  "letterSpacings.widest": {
    "value": "0.1em",
    "variable": "var(--letter-spacings-widest)"
  },
  "lineHeights.none": {
    "value": "1",
    "variable": "var(--line-heights-none)"
  },
  "lineHeights.tight": {
    "value": "1.25",
    "variable": "var(--line-heights-tight)"
  },
  "lineHeights.normal": {
    "value": "1.5",
    "variable": "var(--line-heights-normal)"
  },
  "lineHeights.relaxed": {
    "value": "1.75",
    "variable": "var(--line-heights-relaxed)"
  },
  "lineHeights.loose": {
    "value": "2",
    "variable": "var(--line-heights-loose)"
  },
  "radii.none": {
    "value": "0",
    "variable": "var(--radii-none)"
  },
  "radii.2xs": {
    "value": "0.0625rem",
    "variable": "var(--radii-2xs)"
  },
  "radii.xs": {
    "value": "0.125rem",
    "variable": "var(--radii-xs)"
  },
  "radii.sm": {
    "value": "0.25rem",
    "variable": "var(--radii-sm)"
  },
  "radii.md": {
    "value": "0.375rem",
    "variable": "var(--radii-md)"
  },
  "radii.lg": {
    "value": "0.5rem",
    "variable": "var(--radii-lg)"
  },
  "radii.xl": {
    "value": "0.75rem",
    "variable": "var(--radii-xl)"
  },
  "radii.2xl": {
    "value": "1rem",
    "variable": "var(--radii-2xl)"
  },
  "radii.3xl": {
    "value": "1.5rem",
    "variable": "var(--radii-3xl)"
  },
  "radii.full": {
    "value": "9999px",
    "variable": "var(--radii-full)"
  },
  "sizes.0": {
    "value": "0rem",
    "variable": "var(--sizes-0)"
  },
  "sizes.1": {
    "value": "0.25rem",
    "variable": "var(--sizes-1)"
  },
  "sizes.2": {
    "value": "0.5rem",
    "variable": "var(--sizes-2)"
  },
  "sizes.3": {
    "value": "0.75rem",
    "variable": "var(--sizes-3)"
  },
  "sizes.4": {
    "value": "1rem",
    "variable": "var(--sizes-4)"
  },
  "sizes.5": {
    "value": "1.25rem",
    "variable": "var(--sizes-5)"
  },
  "sizes.6": {
    "value": "1.5rem",
    "variable": "var(--sizes-6)"
  },
  "sizes.7": {
    "value": "1.75rem",
    "variable": "var(--sizes-7)"
  },
  "sizes.8": {
    "value": "2rem",
    "variable": "var(--sizes-8)"
  },
  "sizes.9": {
    "value": "2.25rem",
    "variable": "var(--sizes-9)"
  },
  "sizes.10": {
    "value": "2.5rem",
    "variable": "var(--sizes-10)"
  },
  "sizes.11": {
    "value": "2.75rem",
    "variable": "var(--sizes-11)"
  },
  "sizes.12": {
    "value": "3rem",
    "variable": "var(--sizes-12)"
  },
  "sizes.14": {
    "value": "3.5rem",
    "variable": "var(--sizes-14)"
  },
  "sizes.16": {
    "value": "4rem",
    "variable": "var(--sizes-16)"
  },
  "sizes.20": {
    "value": "5rem",
    "variable": "var(--sizes-20)"
  },
  "sizes.24": {
    "value": "6rem",
    "variable": "var(--sizes-24)"
  },
  "sizes.28": {
    "value": "7rem",
    "variable": "var(--sizes-28)"
  },
  "sizes.32": {
    "value": "8rem",
    "variable": "var(--sizes-32)"
  },
  "sizes.36": {
    "value": "9rem",
    "variable": "var(--sizes-36)"
  },
  "sizes.40": {
    "value": "10rem",
    "variable": "var(--sizes-40)"
  },
  "sizes.44": {
    "value": "11rem",
    "variable": "var(--sizes-44)"
  },
  "sizes.48": {
    "value": "12rem",
    "variable": "var(--sizes-48)"
  },
  "sizes.52": {
    "value": "13rem",
    "variable": "var(--sizes-52)"
  },
  "sizes.56": {
    "value": "14rem",
    "variable": "var(--sizes-56)"
  },
  "sizes.60": {
    "value": "15rem",
    "variable": "var(--sizes-60)"
  },
  "sizes.64": {
    "value": "16rem",
    "variable": "var(--sizes-64)"
  },
  "sizes.72": {
    "value": "18rem",
    "variable": "var(--sizes-72)"
  },
  "sizes.80": {
    "value": "20rem",
    "variable": "var(--sizes-80)"
  },
  "sizes.96": {
    "value": "24rem",
    "variable": "var(--sizes-96)"
  },
  "sizes.0.5": {
    "value": "0.125rem",
    "variable": "var(--sizes-0\\.5)"
  },
  "sizes.1.5": {
    "value": "0.375rem",
    "variable": "var(--sizes-1\\.5)"
  },
  "sizes.2.5": {
    "value": "0.625rem",
    "variable": "var(--sizes-2\\.5)"
  },
  "sizes.3.5": {
    "value": "0.875rem",
    "variable": "var(--sizes-3\\.5)"
  },
  "sizes.4.5": {
    "value": "1.125rem",
    "variable": "var(--sizes-4\\.5)"
  },
  "sizes.2xs": {
    "value": "16rem",
    "variable": "var(--sizes-2xs)"
  },
  "sizes.xs": {
    "value": "20rem",
    "variable": "var(--sizes-xs)"
  },
  "sizes.sm": {
    "value": "24rem",
    "variable": "var(--sizes-sm)"
  },
  "sizes.md": {
    "value": "28rem",
    "variable": "var(--sizes-md)"
  },
  "sizes.lg": {
    "value": "32rem",
    "variable": "var(--sizes-lg)"
  },
  "sizes.xl": {
    "value": "36rem",
    "variable": "var(--sizes-xl)"
  },
  "sizes.2xl": {
    "value": "42rem",
    "variable": "var(--sizes-2xl)"
  },
  "sizes.3xl": {
    "value": "48rem",
    "variable": "var(--sizes-3xl)"
  },
  "sizes.4xl": {
    "value": "56rem",
    "variable": "var(--sizes-4xl)"
  },
  "sizes.5xl": {
    "value": "64rem",
    "variable": "var(--sizes-5xl)"
  },
  "sizes.6xl": {
    "value": "72rem",
    "variable": "var(--sizes-6xl)"
  },
  "sizes.7xl": {
    "value": "80rem",
    "variable": "var(--sizes-7xl)"
  },
  "sizes.8xl": {
    "value": "90rem",
    "variable": "var(--sizes-8xl)"
  },
  "sizes.full": {
    "value": "100%",
    "variable": "var(--sizes-full)"
  },
  "sizes.min": {
    "value": "min-content",
    "variable": "var(--sizes-min)"
  },
  "sizes.max": {
    "value": "max-content",
    "variable": "var(--sizes-max)"
  },
  "sizes.fit": {
    "value": "fit-content",
    "variable": "var(--sizes-fit)"
  },
  "sizes.breakpoint-sm": {
    "value": "640px",
    "variable": "var(--sizes-breakpoint-sm)"
  },
  "sizes.breakpoint-md": {
    "value": "768px",
    "variable": "var(--sizes-breakpoint-md)"
  },
  "sizes.breakpoint-lg": {
    "value": "1024px",
    "variable": "var(--sizes-breakpoint-lg)"
  },
  "sizes.breakpoint-xl": {
    "value": "1280px",
    "variable": "var(--sizes-breakpoint-xl)"
  },
  "sizes.breakpoint-2xl": {
    "value": "1536px",
    "variable": "var(--sizes-breakpoint-2xl)"
  },
  "spacing.0": {
    "value": "0rem",
    "variable": "var(--spacing-0)"
  },
  "spacing.1": {
    "value": "0.25rem",
    "variable": "var(--spacing-1)"
  },
  "spacing.2": {
    "value": "0.5rem",
    "variable": "var(--spacing-2)"
  },
  "spacing.3": {
    "value": "0.75rem",
    "variable": "var(--spacing-3)"
  },
  "spacing.4": {
    "value": "1rem",
    "variable": "var(--spacing-4)"
  },
  "spacing.5": {
    "value": "1.25rem",
    "variable": "var(--spacing-5)"
  },
  "spacing.6": {
    "value": "1.5rem",
    "variable": "var(--spacing-6)"
  },
  "spacing.7": {
    "value": "1.75rem",
    "variable": "var(--spacing-7)"
  },
  "spacing.8": {
    "value": "2rem",
    "variable": "var(--spacing-8)"
  },
  "spacing.9": {
    "value": "2.25rem",
    "variable": "var(--spacing-9)"
  },
  "spacing.10": {
    "value": "2.5rem",
    "variable": "var(--spacing-10)"
  },
  "spacing.11": {
    "value": "2.75rem",
    "variable": "var(--spacing-11)"
  },
  "spacing.12": {
    "value": "3rem",
    "variable": "var(--spacing-12)"
  },
  "spacing.14": {
    "value": "3.5rem",
    "variable": "var(--spacing-14)"
  },
  "spacing.16": {
    "value": "4rem",
    "variable": "var(--spacing-16)"
  },
  "spacing.20": {
    "value": "5rem",
    "variable": "var(--spacing-20)"
  },
  "spacing.24": {
    "value": "6rem",
    "variable": "var(--spacing-24)"
  },
  "spacing.28": {
    "value": "7rem",
    "variable": "var(--spacing-28)"
  },
  "spacing.32": {
    "value": "8rem",
    "variable": "var(--spacing-32)"
  },
  "spacing.36": {
    "value": "9rem",
    "variable": "var(--spacing-36)"
  },
  "spacing.40": {
    "value": "10rem",
    "variable": "var(--spacing-40)"
  },
  "spacing.44": {
    "value": "11rem",
    "variable": "var(--spacing-44)"
  },
  "spacing.48": {
    "value": "12rem",
    "variable": "var(--spacing-48)"
  },
  "spacing.52": {
    "value": "13rem",
    "variable": "var(--spacing-52)"
  },
  "spacing.56": {
    "value": "14rem",
    "variable": "var(--spacing-56)"
  },
  "spacing.60": {
    "value": "15rem",
    "variable": "var(--spacing-60)"
  },
  "spacing.64": {
    "value": "16rem",
    "variable": "var(--spacing-64)"
  },
  "spacing.72": {
    "value": "18rem",
    "variable": "var(--spacing-72)"
  },
  "spacing.80": {
    "value": "20rem",
    "variable": "var(--spacing-80)"
  },
  "spacing.96": {
    "value": "24rem",
    "variable": "var(--spacing-96)"
  },
  "spacing.0.5": {
    "value": "0.125rem",
    "variable": "var(--spacing-0\\.5)"
  },
  "spacing.1.5": {
    "value": "0.375rem",
    "variable": "var(--spacing-1\\.5)"
  },
  "spacing.2.5": {
    "value": "0.625rem",
    "variable": "var(--spacing-2\\.5)"
  },
  "spacing.3.5": {
    "value": "0.875rem",
    "variable": "var(--spacing-3\\.5)"
  },
  "spacing.4.5": {
    "value": "1.125rem",
    "variable": "var(--spacing-4\\.5)"
  },
  "zIndex.hide": {
    "value": -1,
    "variable": "var(--z-index-hide)"
  },
  "zIndex.base": {
    "value": 0,
    "variable": "var(--z-index-base)"
  },
  "zIndex.docked": {
    "value": 10,
    "variable": "var(--z-index-docked)"
  },
  "zIndex.dropdown": {
    "value": 1000,
    "variable": "var(--z-index-dropdown)"
  },
  "zIndex.sticky": {
    "value": 1100,
    "variable": "var(--z-index-sticky)"
  },
  "zIndex.banner": {
    "value": 1200,
    "variable": "var(--z-index-banner)"
  },
  "zIndex.overlay": {
    "value": 1300,
    "variable": "var(--z-index-overlay)"
  },
  "zIndex.modal": {
    "value": 1400,
    "variable": "var(--z-index-modal)"
  },
  "zIndex.popover": {
    "value": 1500,
    "variable": "var(--z-index-popover)"
  },
  "zIndex.skipLink": {
    "value": 1600,
    "variable": "var(--z-index-skip-link)"
  },
  "zIndex.toast": {
    "value": 1700,
    "variable": "var(--z-index-toast)"
  },
  "zIndex.tooltip": {
    "value": 1800,
    "variable": "var(--z-index-tooltip)"
  },
  "colors.current": {
    "value": "currentColor",
    "variable": "var(--colors-current)"
  },
  "colors.black": {
    "value": "#000000",
    "variable": "var(--colors-black)"
  },
  "colors.black.a1": {
    "value": "rgba(0, 0, 0, 0.05)",
    "variable": "var(--colors-black-a1)"
  },
  "colors.black.a2": {
    "value": "rgba(0, 0, 0, 0.1)",
    "variable": "var(--colors-black-a2)"
  },
  "colors.black.a3": {
    "value": "rgba(0, 0, 0, 0.15)",
    "variable": "var(--colors-black-a3)"
  },
  "colors.black.a4": {
    "value": "rgba(0, 0, 0, 0.2)",
    "variable": "var(--colors-black-a4)"
  },
  "colors.black.a5": {
    "value": "rgba(0, 0, 0, 0.3)",
    "variable": "var(--colors-black-a5)"
  },
  "colors.black.a6": {
    "value": "rgba(0, 0, 0, 0.4)",
    "variable": "var(--colors-black-a6)"
  },
  "colors.black.a7": {
    "value": "rgba(0, 0, 0, 0.5)",
    "variable": "var(--colors-black-a7)"
  },
  "colors.black.a8": {
    "value": "rgba(0, 0, 0, 0.6)",
    "variable": "var(--colors-black-a8)"
  },
  "colors.black.a9": {
    "value": "rgba(0, 0, 0, 0.7)",
    "variable": "var(--colors-black-a9)"
  },
  "colors.black.a10": {
    "value": "rgba(0, 0, 0, 0.8)",
    "variable": "var(--colors-black-a10)"
  },
  "colors.black.a11": {
    "value": "rgba(0, 0, 0, 0.9)",
    "variable": "var(--colors-black-a11)"
  },
  "colors.black.a12": {
    "value": "rgba(0, 0, 0, 0.95)",
    "variable": "var(--colors-black-a12)"
  },
  "colors.white": {
    "value": "#ffffff",
    "variable": "var(--colors-white)"
  },
  "colors.white.a1": {
    "value": "rgba(255, 255, 255, 0.05)",
    "variable": "var(--colors-white-a1)"
  },
  "colors.white.a2": {
    "value": "rgba(255, 255, 255, 0.1)",
    "variable": "var(--colors-white-a2)"
  },
  "colors.white.a3": {
    "value": "rgba(255, 255, 255, 0.15)",
    "variable": "var(--colors-white-a3)"
  },
  "colors.white.a4": {
    "value": "rgba(255, 255, 255, 0.2)",
    "variable": "var(--colors-white-a4)"
  },
  "colors.white.a5": {
    "value": "rgba(255, 255, 255, 0.3)",
    "variable": "var(--colors-white-a5)"
  },
  "colors.white.a6": {
    "value": "rgba(255, 255, 255, 0.4)",
    "variable": "var(--colors-white-a6)"
  },
  "colors.white.a7": {
    "value": "rgba(255, 255, 255, 0.5)",
    "variable": "var(--colors-white-a7)"
  },
  "colors.white.a8": {
    "value": "rgba(255, 255, 255, 0.6)",
    "variable": "var(--colors-white-a8)"
  },
  "colors.white.a9": {
    "value": "rgba(255, 255, 255, 0.7)",
    "variable": "var(--colors-white-a9)"
  },
  "colors.white.a10": {
    "value": "rgba(255, 255, 255, 0.8)",
    "variable": "var(--colors-white-a10)"
  },
  "colors.white.a11": {
    "value": "rgba(255, 255, 255, 0.9)",
    "variable": "var(--colors-white-a11)"
  },
  "colors.white.a12": {
    "value": "rgba(255, 255, 255, 0.95)",
    "variable": "var(--colors-white-a12)"
  },
  "colors.transparent": {
    "value": "rgb(0 0 0 / 0)",
    "variable": "var(--colors-transparent)"
  },
  "colors.gray.light.1": {
    "value": "#fbfdfc",
    "variable": "var(--colors-gray-light-1)"
  },
  "colors.gray.light.2": {
    "value": "#f7f9f8",
    "variable": "var(--colors-gray-light-2)"
  },
  "colors.gray.light.3": {
    "value": "#eef1f0",
    "variable": "var(--colors-gray-light-3)"
  },
  "colors.gray.light.4": {
    "value": "#e6e9e8",
    "variable": "var(--colors-gray-light-4)"
  },
  "colors.gray.light.5": {
    "value": "#dfe2e0",
    "variable": "var(--colors-gray-light-5)"
  },
  "colors.gray.light.6": {
    "value": "#d7dad9",
    "variable": "var(--colors-gray-light-6)"
  },
  "colors.gray.light.7": {
    "value": "#cbcfcd",
    "variable": "var(--colors-gray-light-7)"
  },
  "colors.gray.light.8": {
    "value": "#b8bcba",
    "variable": "var(--colors-gray-light-8)"
  },
  "colors.gray.light.9": {
    "value": "#868e8b",
    "variable": "var(--colors-gray-light-9)"
  },
  "colors.gray.light.10": {
    "value": "#7c8481",
    "variable": "var(--colors-gray-light-10)"
  },
  "colors.gray.light.11": {
    "value": "#5f6563",
    "variable": "var(--colors-gray-light-11)"
  },
  "colors.gray.light.12": {
    "value": "#1a211e",
    "variable": "var(--colors-gray-light-12)"
  },
  "colors.gray.light.a1": {
    "value": "#00804004",
    "variable": "var(--colors-gray-light-a1)"
  },
  "colors.gray.light.a2": {
    "value": "#00402008",
    "variable": "var(--colors-gray-light-a2)"
  },
  "colors.gray.light.a3": {
    "value": "#002d1e11",
    "variable": "var(--colors-gray-light-a3)"
  },
  "colors.gray.light.a4": {
    "value": "#001f1519",
    "variable": "var(--colors-gray-light-a4)"
  },
  "colors.gray.light.a5": {
    "value": "#00180820",
    "variable": "var(--colors-gray-light-a5)"
  },
  "colors.gray.light.a6": {
    "value": "#00140d28",
    "variable": "var(--colors-gray-light-a6)"
  },
  "colors.gray.light.a7": {
    "value": "#00140a34",
    "variable": "var(--colors-gray-light-a7)"
  },
  "colors.gray.light.a8": {
    "value": "#000f0847",
    "variable": "var(--colors-gray-light-a8)"
  },
  "colors.gray.light.a9": {
    "value": "#00110b79",
    "variable": "var(--colors-gray-light-a9)"
  },
  "colors.gray.light.a10": {
    "value": "#00100a83",
    "variable": "var(--colors-gray-light-a10)"
  },
  "colors.gray.light.a11": {
    "value": "#000a07a0",
    "variable": "var(--colors-gray-light-a11)"
  },
  "colors.gray.light.a12": {
    "value": "#000805e5",
    "variable": "var(--colors-gray-light-a12)"
  },
  "colors.gray.dark.1": {
    "value": "#101211",
    "variable": "var(--colors-gray-dark-1)"
  },
  "colors.gray.dark.2": {
    "value": "#171918",
    "variable": "var(--colors-gray-dark-2)"
  },
  "colors.gray.dark.3": {
    "value": "#202221",
    "variable": "var(--colors-gray-dark-3)"
  },
  "colors.gray.dark.4": {
    "value": "#272a29",
    "variable": "var(--colors-gray-dark-4)"
  },
  "colors.gray.dark.5": {
    "value": "#2e3130",
    "variable": "var(--colors-gray-dark-5)"
  },
  "colors.gray.dark.6": {
    "value": "#373b39",
    "variable": "var(--colors-gray-dark-6)"
  },
  "colors.gray.dark.7": {
    "value": "#444947",
    "variable": "var(--colors-gray-dark-7)"
  },
  "colors.gray.dark.8": {
    "value": "#5b625f",
    "variable": "var(--colors-gray-dark-8)"
  },
  "colors.gray.dark.9": {
    "value": "#63706b",
    "variable": "var(--colors-gray-dark-9)"
  },
  "colors.gray.dark.10": {
    "value": "#717d79",
    "variable": "var(--colors-gray-dark-10)"
  },
  "colors.gray.dark.11": {
    "value": "#adb5b2",
    "variable": "var(--colors-gray-dark-11)"
  },
  "colors.gray.dark.12": {
    "value": "#eceeed",
    "variable": "var(--colors-gray-dark-12)"
  },
  "colors.gray.dark.a1": {
    "value": "#00000000",
    "variable": "var(--colors-gray-dark-a1)"
  },
  "colors.gray.dark.a2": {
    "value": "#f0f2f108",
    "variable": "var(--colors-gray-dark-a2)"
  },
  "colors.gray.dark.a3": {
    "value": "#f3f5f412",
    "variable": "var(--colors-gray-dark-a3)"
  },
  "colors.gray.dark.a4": {
    "value": "#f2fefd1a",
    "variable": "var(--colors-gray-dark-a4)"
  },
  "colors.gray.dark.a5": {
    "value": "#f1fbfa22",
    "variable": "var(--colors-gray-dark-a5)"
  },
  "colors.gray.dark.a6": {
    "value": "#edfbf42d",
    "variable": "var(--colors-gray-dark-a6)"
  },
  "colors.gray.dark.a7": {
    "value": "#edfcf73c",
    "variable": "var(--colors-gray-dark-a7)"
  },
  "colors.gray.dark.a8": {
    "value": "#ebfdf657",
    "variable": "var(--colors-gray-dark-a8)"
  },
  "colors.gray.dark.a9": {
    "value": "#dffdf266",
    "variable": "var(--colors-gray-dark-a9)"
  },
  "colors.gray.dark.a10": {
    "value": "#e5fdf674",
    "variable": "var(--colors-gray-dark-a10)"
  },
  "colors.gray.dark.a11": {
    "value": "#f4fefbb0",
    "variable": "var(--colors-gray-dark-a11)"
  },
  "colors.gray.dark.a12": {
    "value": "#fdfffeed",
    "variable": "var(--colors-gray-dark-a12)"
  },
  "colors.sage.light.1": {
    "value": "#fbfdfc",
    "variable": "var(--colors-sage-light-1)"
  },
  "colors.sage.light.2": {
    "value": "#f7f9f8",
    "variable": "var(--colors-sage-light-2)"
  },
  "colors.sage.light.3": {
    "value": "#eef1f0",
    "variable": "var(--colors-sage-light-3)"
  },
  "colors.sage.light.4": {
    "value": "#e6e9e8",
    "variable": "var(--colors-sage-light-4)"
  },
  "colors.sage.light.5": {
    "value": "#dfe2e0",
    "variable": "var(--colors-sage-light-5)"
  },
  "colors.sage.light.6": {
    "value": "#d7dad9",
    "variable": "var(--colors-sage-light-6)"
  },
  "colors.sage.light.7": {
    "value": "#cbcfcd",
    "variable": "var(--colors-sage-light-7)"
  },
  "colors.sage.light.8": {
    "value": "#b8bcba",
    "variable": "var(--colors-sage-light-8)"
  },
  "colors.sage.light.9": {
    "value": "#868e8b",
    "variable": "var(--colors-sage-light-9)"
  },
  "colors.sage.light.10": {
    "value": "#7c8481",
    "variable": "var(--colors-sage-light-10)"
  },
  "colors.sage.light.11": {
    "value": "#5f6563",
    "variable": "var(--colors-sage-light-11)"
  },
  "colors.sage.light.12": {
    "value": "#1a211e",
    "variable": "var(--colors-sage-light-12)"
  },
  "colors.sage.light.a1": {
    "value": "#00804004",
    "variable": "var(--colors-sage-light-a1)"
  },
  "colors.sage.light.a2": {
    "value": "#00402008",
    "variable": "var(--colors-sage-light-a2)"
  },
  "colors.sage.light.a3": {
    "value": "#002d1e11",
    "variable": "var(--colors-sage-light-a3)"
  },
  "colors.sage.light.a4": {
    "value": "#001f1519",
    "variable": "var(--colors-sage-light-a4)"
  },
  "colors.sage.light.a5": {
    "value": "#00180820",
    "variable": "var(--colors-sage-light-a5)"
  },
  "colors.sage.light.a6": {
    "value": "#00140d28",
    "variable": "var(--colors-sage-light-a6)"
  },
  "colors.sage.light.a7": {
    "value": "#00140a34",
    "variable": "var(--colors-sage-light-a7)"
  },
  "colors.sage.light.a8": {
    "value": "#000f0847",
    "variable": "var(--colors-sage-light-a8)"
  },
  "colors.sage.light.a9": {
    "value": "#00110b79",
    "variable": "var(--colors-sage-light-a9)"
  },
  "colors.sage.light.a10": {
    "value": "#00100a83",
    "variable": "var(--colors-sage-light-a10)"
  },
  "colors.sage.light.a11": {
    "value": "#000a07a0",
    "variable": "var(--colors-sage-light-a11)"
  },
  "colors.sage.light.a12": {
    "value": "#000805e5",
    "variable": "var(--colors-sage-light-a12)"
  },
  "colors.sage.dark.1": {
    "value": "#101211",
    "variable": "var(--colors-sage-dark-1)"
  },
  "colors.sage.dark.2": {
    "value": "#171918",
    "variable": "var(--colors-sage-dark-2)"
  },
  "colors.sage.dark.3": {
    "value": "#202221",
    "variable": "var(--colors-sage-dark-3)"
  },
  "colors.sage.dark.4": {
    "value": "#272a29",
    "variable": "var(--colors-sage-dark-4)"
  },
  "colors.sage.dark.5": {
    "value": "#2e3130",
    "variable": "var(--colors-sage-dark-5)"
  },
  "colors.sage.dark.6": {
    "value": "#373b39",
    "variable": "var(--colors-sage-dark-6)"
  },
  "colors.sage.dark.7": {
    "value": "#444947",
    "variable": "var(--colors-sage-dark-7)"
  },
  "colors.sage.dark.8": {
    "value": "#5b625f",
    "variable": "var(--colors-sage-dark-8)"
  },
  "colors.sage.dark.9": {
    "value": "#63706b",
    "variable": "var(--colors-sage-dark-9)"
  },
  "colors.sage.dark.10": {
    "value": "#717d79",
    "variable": "var(--colors-sage-dark-10)"
  },
  "colors.sage.dark.11": {
    "value": "#adb5b2",
    "variable": "var(--colors-sage-dark-11)"
  },
  "colors.sage.dark.12": {
    "value": "#eceeed",
    "variable": "var(--colors-sage-dark-12)"
  },
  "colors.sage.dark.a1": {
    "value": "#00000000",
    "variable": "var(--colors-sage-dark-a1)"
  },
  "colors.sage.dark.a2": {
    "value": "#f0f2f108",
    "variable": "var(--colors-sage-dark-a2)"
  },
  "colors.sage.dark.a3": {
    "value": "#f3f5f412",
    "variable": "var(--colors-sage-dark-a3)"
  },
  "colors.sage.dark.a4": {
    "value": "#f2fefd1a",
    "variable": "var(--colors-sage-dark-a4)"
  },
  "colors.sage.dark.a5": {
    "value": "#f1fbfa22",
    "variable": "var(--colors-sage-dark-a5)"
  },
  "colors.sage.dark.a6": {
    "value": "#edfbf42d",
    "variable": "var(--colors-sage-dark-a6)"
  },
  "colors.sage.dark.a7": {
    "value": "#edfcf73c",
    "variable": "var(--colors-sage-dark-a7)"
  },
  "colors.sage.dark.a8": {
    "value": "#ebfdf657",
    "variable": "var(--colors-sage-dark-a8)"
  },
  "colors.sage.dark.a9": {
    "value": "#dffdf266",
    "variable": "var(--colors-sage-dark-a9)"
  },
  "colors.sage.dark.a10": {
    "value": "#e5fdf674",
    "variable": "var(--colors-sage-dark-a10)"
  },
  "colors.sage.dark.a11": {
    "value": "#f4fefbb0",
    "variable": "var(--colors-sage-dark-a11)"
  },
  "colors.sage.dark.a12": {
    "value": "#fdfffeed",
    "variable": "var(--colors-sage-dark-a12)"
  },
  "colors.neutral.light.1": {
    "value": "#fcfcfc",
    "variable": "var(--colors-neutral-light-1)"
  },
  "colors.neutral.light.2": {
    "value": "#f9f9f9",
    "variable": "var(--colors-neutral-light-2)"
  },
  "colors.neutral.light.3": {
    "value": "#f0f0f0",
    "variable": "var(--colors-neutral-light-3)"
  },
  "colors.neutral.light.4": {
    "value": "#e8e8e8",
    "variable": "var(--colors-neutral-light-4)"
  },
  "colors.neutral.light.5": {
    "value": "#e0e0e0",
    "variable": "var(--colors-neutral-light-5)"
  },
  "colors.neutral.light.6": {
    "value": "#d9d9d9",
    "variable": "var(--colors-neutral-light-6)"
  },
  "colors.neutral.light.7": {
    "value": "#cecece",
    "variable": "var(--colors-neutral-light-7)"
  },
  "colors.neutral.light.8": {
    "value": "#bbbbbb",
    "variable": "var(--colors-neutral-light-8)"
  },
  "colors.neutral.light.9": {
    "value": "#8d8d8d",
    "variable": "var(--colors-neutral-light-9)"
  },
  "colors.neutral.light.10": {
    "value": "#838383",
    "variable": "var(--colors-neutral-light-10)"
  },
  "colors.neutral.light.11": {
    "value": "#646464",
    "variable": "var(--colors-neutral-light-11)"
  },
  "colors.neutral.light.12": {
    "value": "#202020",
    "variable": "var(--colors-neutral-light-12)"
  },
  "colors.neutral.light.a1": {
    "value": "#00000003",
    "variable": "var(--colors-neutral-light-a1)"
  },
  "colors.neutral.light.a2": {
    "value": "#00000006",
    "variable": "var(--colors-neutral-light-a2)"
  },
  "colors.neutral.light.a3": {
    "value": "#0000000f",
    "variable": "var(--colors-neutral-light-a3)"
  },
  "colors.neutral.light.a4": {
    "value": "#00000017",
    "variable": "var(--colors-neutral-light-a4)"
  },
  "colors.neutral.light.a5": {
    "value": "#0000001f",
    "variable": "var(--colors-neutral-light-a5)"
  },
  "colors.neutral.light.a6": {
    "value": "#00000026",
    "variable": "var(--colors-neutral-light-a6)"
  },
  "colors.neutral.light.a7": {
    "value": "#00000031",
    "variable": "var(--colors-neutral-light-a7)"
  },
  "colors.neutral.light.a8": {
    "value": "#00000044",
    "variable": "var(--colors-neutral-light-a8)"
  },
  "colors.neutral.light.a9": {
    "value": "#00000072",
    "variable": "var(--colors-neutral-light-a9)"
  },
  "colors.neutral.light.a10": {
    "value": "#0000007c",
    "variable": "var(--colors-neutral-light-a10)"
  },
  "colors.neutral.light.a11": {
    "value": "#0000009b",
    "variable": "var(--colors-neutral-light-a11)"
  },
  "colors.neutral.light.a12": {
    "value": "#000000df",
    "variable": "var(--colors-neutral-light-a12)"
  },
  "colors.neutral.dark.1": {
    "value": "#111111",
    "variable": "var(--colors-neutral-dark-1)"
  },
  "colors.neutral.dark.2": {
    "value": "#191919",
    "variable": "var(--colors-neutral-dark-2)"
  },
  "colors.neutral.dark.3": {
    "value": "#222222",
    "variable": "var(--colors-neutral-dark-3)"
  },
  "colors.neutral.dark.4": {
    "value": "#2a2a2a",
    "variable": "var(--colors-neutral-dark-4)"
  },
  "colors.neutral.dark.5": {
    "value": "#313131",
    "variable": "var(--colors-neutral-dark-5)"
  },
  "colors.neutral.dark.6": {
    "value": "#3a3a3a",
    "variable": "var(--colors-neutral-dark-6)"
  },
  "colors.neutral.dark.7": {
    "value": "#484848",
    "variable": "var(--colors-neutral-dark-7)"
  },
  "colors.neutral.dark.8": {
    "value": "#606060",
    "variable": "var(--colors-neutral-dark-8)"
  },
  "colors.neutral.dark.9": {
    "value": "#6e6e6e",
    "variable": "var(--colors-neutral-dark-9)"
  },
  "colors.neutral.dark.10": {
    "value": "#7b7b7b",
    "variable": "var(--colors-neutral-dark-10)"
  },
  "colors.neutral.dark.11": {
    "value": "#b4b4b4",
    "variable": "var(--colors-neutral-dark-11)"
  },
  "colors.neutral.dark.12": {
    "value": "#eeeeee",
    "variable": "var(--colors-neutral-dark-12)"
  },
  "colors.neutral.dark.a1": {
    "value": "#00000000",
    "variable": "var(--colors-neutral-dark-a1)"
  },
  "colors.neutral.dark.a2": {
    "value": "#ffffff09",
    "variable": "var(--colors-neutral-dark-a2)"
  },
  "colors.neutral.dark.a3": {
    "value": "#ffffff12",
    "variable": "var(--colors-neutral-dark-a3)"
  },
  "colors.neutral.dark.a4": {
    "value": "#ffffff1b",
    "variable": "var(--colors-neutral-dark-a4)"
  },
  "colors.neutral.dark.a5": {
    "value": "#ffffff22",
    "variable": "var(--colors-neutral-dark-a5)"
  },
  "colors.neutral.dark.a6": {
    "value": "#ffffff2c",
    "variable": "var(--colors-neutral-dark-a6)"
  },
  "colors.neutral.dark.a7": {
    "value": "#ffffff3b",
    "variable": "var(--colors-neutral-dark-a7)"
  },
  "colors.neutral.dark.a8": {
    "value": "#ffffff55",
    "variable": "var(--colors-neutral-dark-a8)"
  },
  "colors.neutral.dark.a9": {
    "value": "#ffffff64",
    "variable": "var(--colors-neutral-dark-a9)"
  },
  "colors.neutral.dark.a10": {
    "value": "#ffffff72",
    "variable": "var(--colors-neutral-dark-a10)"
  },
  "colors.neutral.dark.a11": {
    "value": "#ffffffaf",
    "variable": "var(--colors-neutral-dark-a11)"
  },
  "colors.neutral.dark.a12": {
    "value": "#ffffffed",
    "variable": "var(--colors-neutral-dark-a12)"
  },
  "colors.text": {
    "value": "#333",
    "variable": "var(--colors-text)"
  },
  "colors.background": {
    "value": "#fff",
    "variable": "var(--colors-background)"
  },
  "colors.primary": {
    "value": "#0070f3",
    "variable": "var(--colors-primary)"
  },
  "colors.secondary": {
    "value": "#1c1c1e",
    "variable": "var(--colors-secondary)"
  },
  "fonts.sans": {
    "value": "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"",
    "variable": "var(--fonts-sans)"
  },
  "fonts.serif": {
    "value": "ui-serif, Georgia, Cambria, \"Times New Roman\", Times, serif",
    "variable": "var(--fonts-serif)"
  },
  "fonts.mono": {
    "value": "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace",
    "variable": "var(--fonts-mono)"
  },
  "fonts.body": {
    "value": "Inter, sans-serif",
    "variable": "var(--fonts-body)"
  },
  "breakpoints.sm": {
    "value": "640px",
    "variable": "var(--breakpoints-sm)"
  },
  "breakpoints.md": {
    "value": "768px",
    "variable": "var(--breakpoints-md)"
  },
  "breakpoints.lg": {
    "value": "1024px",
    "variable": "var(--breakpoints-lg)"
  },
  "breakpoints.xl": {
    "value": "1280px",
    "variable": "var(--breakpoints-xl)"
  },
  "breakpoints.2xl": {
    "value": "1536px",
    "variable": "var(--breakpoints-2xl)"
  },
  "colors.neutral.1": {
    "value": "var(--colors-neutral-1)",
    "variable": "var(--colors-neutral-1)"
  },
  "colors.neutral.2": {
    "value": "var(--colors-neutral-2)",
    "variable": "var(--colors-neutral-2)"
  },
  "colors.neutral.3": {
    "value": "var(--colors-neutral-3)",
    "variable": "var(--colors-neutral-3)"
  },
  "colors.neutral.4": {
    "value": "var(--colors-neutral-4)",
    "variable": "var(--colors-neutral-4)"
  },
  "colors.neutral.5": {
    "value": "var(--colors-neutral-5)",
    "variable": "var(--colors-neutral-5)"
  },
  "colors.neutral.6": {
    "value": "var(--colors-neutral-6)",
    "variable": "var(--colors-neutral-6)"
  },
  "colors.neutral.7": {
    "value": "var(--colors-neutral-7)",
    "variable": "var(--colors-neutral-7)"
  },
  "colors.neutral.8": {
    "value": "var(--colors-neutral-8)",
    "variable": "var(--colors-neutral-8)"
  },
  "colors.neutral.9": {
    "value": "var(--colors-neutral-9)",
    "variable": "var(--colors-neutral-9)"
  },
  "colors.neutral.10": {
    "value": "var(--colors-neutral-10)",
    "variable": "var(--colors-neutral-10)"
  },
  "colors.neutral.11": {
    "value": "var(--colors-neutral-11)",
    "variable": "var(--colors-neutral-11)"
  },
  "colors.neutral.12": {
    "value": "var(--colors-neutral-12)",
    "variable": "var(--colors-neutral-12)"
  },
  "colors.neutral.a1": {
    "value": "var(--colors-neutral-a1)",
    "variable": "var(--colors-neutral-a1)"
  },
  "colors.neutral.a2": {
    "value": "var(--colors-neutral-a2)",
    "variable": "var(--colors-neutral-a2)"
  },
  "colors.neutral.a3": {
    "value": "var(--colors-neutral-a3)",
    "variable": "var(--colors-neutral-a3)"
  },
  "colors.neutral.a4": {
    "value": "var(--colors-neutral-a4)",
    "variable": "var(--colors-neutral-a4)"
  },
  "colors.neutral.a5": {
    "value": "var(--colors-neutral-a5)",
    "variable": "var(--colors-neutral-a5)"
  },
  "colors.neutral.a6": {
    "value": "var(--colors-neutral-a6)",
    "variable": "var(--colors-neutral-a6)"
  },
  "colors.neutral.a7": {
    "value": "var(--colors-neutral-a7)",
    "variable": "var(--colors-neutral-a7)"
  },
  "colors.neutral.a8": {
    "value": "var(--colors-neutral-a8)",
    "variable": "var(--colors-neutral-a8)"
  },
  "colors.neutral.a9": {
    "value": "var(--colors-neutral-a9)",
    "variable": "var(--colors-neutral-a9)"
  },
  "colors.neutral.a10": {
    "value": "var(--colors-neutral-a10)",
    "variable": "var(--colors-neutral-a10)"
  },
  "colors.neutral.a11": {
    "value": "var(--colors-neutral-a11)",
    "variable": "var(--colors-neutral-a11)"
  },
  "colors.neutral.a12": {
    "value": "var(--colors-neutral-a12)",
    "variable": "var(--colors-neutral-a12)"
  },
  "colors.neutral.default": {
    "value": "var(--colors-neutral-default)",
    "variable": "var(--colors-neutral-default)"
  },
  "colors.neutral.emphasized": {
    "value": "var(--colors-neutral-emphasized)",
    "variable": "var(--colors-neutral-emphasized)"
  },
  "colors.neutral.fg": {
    "value": "var(--colors-neutral-fg)",
    "variable": "var(--colors-neutral-fg)"
  },
  "colors.neutral.text": {
    "value": "var(--colors-neutral-text)",
    "variable": "var(--colors-neutral-text)"
  },
  "colors.sage.1": {
    "value": "var(--colors-sage-1)",
    "variable": "var(--colors-sage-1)"
  },
  "colors.sage.2": {
    "value": "var(--colors-sage-2)",
    "variable": "var(--colors-sage-2)"
  },
  "colors.sage.3": {
    "value": "var(--colors-sage-3)",
    "variable": "var(--colors-sage-3)"
  },
  "colors.sage.4": {
    "value": "var(--colors-sage-4)",
    "variable": "var(--colors-sage-4)"
  },
  "colors.sage.5": {
    "value": "var(--colors-sage-5)",
    "variable": "var(--colors-sage-5)"
  },
  "colors.sage.6": {
    "value": "var(--colors-sage-6)",
    "variable": "var(--colors-sage-6)"
  },
  "colors.sage.7": {
    "value": "var(--colors-sage-7)",
    "variable": "var(--colors-sage-7)"
  },
  "colors.sage.8": {
    "value": "var(--colors-sage-8)",
    "variable": "var(--colors-sage-8)"
  },
  "colors.sage.9": {
    "value": "var(--colors-sage-9)",
    "variable": "var(--colors-sage-9)"
  },
  "colors.sage.10": {
    "value": "var(--colors-sage-10)",
    "variable": "var(--colors-sage-10)"
  },
  "colors.sage.11": {
    "value": "var(--colors-sage-11)",
    "variable": "var(--colors-sage-11)"
  },
  "colors.sage.12": {
    "value": "var(--colors-sage-12)",
    "variable": "var(--colors-sage-12)"
  },
  "colors.sage.a1": {
    "value": "var(--colors-sage-a1)",
    "variable": "var(--colors-sage-a1)"
  },
  "colors.sage.a2": {
    "value": "var(--colors-sage-a2)",
    "variable": "var(--colors-sage-a2)"
  },
  "colors.sage.a3": {
    "value": "var(--colors-sage-a3)",
    "variable": "var(--colors-sage-a3)"
  },
  "colors.sage.a4": {
    "value": "var(--colors-sage-a4)",
    "variable": "var(--colors-sage-a4)"
  },
  "colors.sage.a5": {
    "value": "var(--colors-sage-a5)",
    "variable": "var(--colors-sage-a5)"
  },
  "colors.sage.a6": {
    "value": "var(--colors-sage-a6)",
    "variable": "var(--colors-sage-a6)"
  },
  "colors.sage.a7": {
    "value": "var(--colors-sage-a7)",
    "variable": "var(--colors-sage-a7)"
  },
  "colors.sage.a8": {
    "value": "var(--colors-sage-a8)",
    "variable": "var(--colors-sage-a8)"
  },
  "colors.sage.a9": {
    "value": "var(--colors-sage-a9)",
    "variable": "var(--colors-sage-a9)"
  },
  "colors.sage.a10": {
    "value": "var(--colors-sage-a10)",
    "variable": "var(--colors-sage-a10)"
  },
  "colors.sage.a11": {
    "value": "var(--colors-sage-a11)",
    "variable": "var(--colors-sage-a11)"
  },
  "colors.sage.a12": {
    "value": "var(--colors-sage-a12)",
    "variable": "var(--colors-sage-a12)"
  },
  "colors.sage.default": {
    "value": "var(--colors-sage-default)",
    "variable": "var(--colors-sage-default)"
  },
  "colors.sage.emphasized": {
    "value": "var(--colors-sage-emphasized)",
    "variable": "var(--colors-sage-emphasized)"
  },
  "colors.sage.fg": {
    "value": "var(--colors-sage-fg)",
    "variable": "var(--colors-sage-fg)"
  },
  "colors.sage.text": {
    "value": "var(--colors-sage-text)",
    "variable": "var(--colors-sage-text)"
  },
  "colors.gray.1": {
    "value": "var(--colors-gray-1)",
    "variable": "var(--colors-gray-1)"
  },
  "colors.gray.2": {
    "value": "var(--colors-gray-2)",
    "variable": "var(--colors-gray-2)"
  },
  "colors.gray.3": {
    "value": "var(--colors-gray-3)",
    "variable": "var(--colors-gray-3)"
  },
  "colors.gray.4": {
    "value": "var(--colors-gray-4)",
    "variable": "var(--colors-gray-4)"
  },
  "colors.gray.5": {
    "value": "var(--colors-gray-5)",
    "variable": "var(--colors-gray-5)"
  },
  "colors.gray.6": {
    "value": "var(--colors-gray-6)",
    "variable": "var(--colors-gray-6)"
  },
  "colors.gray.7": {
    "value": "var(--colors-gray-7)",
    "variable": "var(--colors-gray-7)"
  },
  "colors.gray.8": {
    "value": "var(--colors-gray-8)",
    "variable": "var(--colors-gray-8)"
  },
  "colors.gray.9": {
    "value": "var(--colors-gray-9)",
    "variable": "var(--colors-gray-9)"
  },
  "colors.gray.10": {
    "value": "var(--colors-gray-10)",
    "variable": "var(--colors-gray-10)"
  },
  "colors.gray.11": {
    "value": "var(--colors-gray-11)",
    "variable": "var(--colors-gray-11)"
  },
  "colors.gray.12": {
    "value": "var(--colors-gray-12)",
    "variable": "var(--colors-gray-12)"
  },
  "colors.gray.a1": {
    "value": "var(--colors-gray-a1)",
    "variable": "var(--colors-gray-a1)"
  },
  "colors.gray.a2": {
    "value": "var(--colors-gray-a2)",
    "variable": "var(--colors-gray-a2)"
  },
  "colors.gray.a3": {
    "value": "var(--colors-gray-a3)",
    "variable": "var(--colors-gray-a3)"
  },
  "colors.gray.a4": {
    "value": "var(--colors-gray-a4)",
    "variable": "var(--colors-gray-a4)"
  },
  "colors.gray.a5": {
    "value": "var(--colors-gray-a5)",
    "variable": "var(--colors-gray-a5)"
  },
  "colors.gray.a6": {
    "value": "var(--colors-gray-a6)",
    "variable": "var(--colors-gray-a6)"
  },
  "colors.gray.a7": {
    "value": "var(--colors-gray-a7)",
    "variable": "var(--colors-gray-a7)"
  },
  "colors.gray.a8": {
    "value": "var(--colors-gray-a8)",
    "variable": "var(--colors-gray-a8)"
  },
  "colors.gray.a9": {
    "value": "var(--colors-gray-a9)",
    "variable": "var(--colors-gray-a9)"
  },
  "colors.gray.a10": {
    "value": "var(--colors-gray-a10)",
    "variable": "var(--colors-gray-a10)"
  },
  "colors.gray.a11": {
    "value": "var(--colors-gray-a11)",
    "variable": "var(--colors-gray-a11)"
  },
  "colors.gray.a12": {
    "value": "var(--colors-gray-a12)",
    "variable": "var(--colors-gray-a12)"
  },
  "colors.gray.default": {
    "value": "var(--colors-gray-default)",
    "variable": "var(--colors-gray-default)"
  },
  "colors.gray.emphasized": {
    "value": "var(--colors-gray-emphasized)",
    "variable": "var(--colors-gray-emphasized)"
  },
  "colors.gray.fg": {
    "value": "var(--colors-gray-fg)",
    "variable": "var(--colors-gray-fg)"
  },
  "colors.gray.text": {
    "value": "var(--colors-gray-text)",
    "variable": "var(--colors-gray-text)"
  },
  "colors.accent.1": {
    "value": "var(--colors-accent-1)",
    "variable": "var(--colors-accent-1)"
  },
  "colors.accent.2": {
    "value": "var(--colors-accent-2)",
    "variable": "var(--colors-accent-2)"
  },
  "colors.accent.3": {
    "value": "var(--colors-accent-3)",
    "variable": "var(--colors-accent-3)"
  },
  "colors.accent.4": {
    "value": "var(--colors-accent-4)",
    "variable": "var(--colors-accent-4)"
  },
  "colors.accent.5": {
    "value": "var(--colors-accent-5)",
    "variable": "var(--colors-accent-5)"
  },
  "colors.accent.6": {
    "value": "var(--colors-accent-6)",
    "variable": "var(--colors-accent-6)"
  },
  "colors.accent.7": {
    "value": "var(--colors-accent-7)",
    "variable": "var(--colors-accent-7)"
  },
  "colors.accent.8": {
    "value": "var(--colors-accent-8)",
    "variable": "var(--colors-accent-8)"
  },
  "colors.accent.9": {
    "value": "var(--colors-accent-9)",
    "variable": "var(--colors-accent-9)"
  },
  "colors.accent.10": {
    "value": "var(--colors-accent-10)",
    "variable": "var(--colors-accent-10)"
  },
  "colors.accent.11": {
    "value": "var(--colors-accent-11)",
    "variable": "var(--colors-accent-11)"
  },
  "colors.accent.12": {
    "value": "var(--colors-accent-12)",
    "variable": "var(--colors-accent-12)"
  },
  "colors.accent.a1": {
    "value": "var(--colors-accent-a1)",
    "variable": "var(--colors-accent-a1)"
  },
  "colors.accent.a2": {
    "value": "var(--colors-accent-a2)",
    "variable": "var(--colors-accent-a2)"
  },
  "colors.accent.a3": {
    "value": "var(--colors-accent-a3)",
    "variable": "var(--colors-accent-a3)"
  },
  "colors.accent.a4": {
    "value": "var(--colors-accent-a4)",
    "variable": "var(--colors-accent-a4)"
  },
  "colors.accent.a5": {
    "value": "var(--colors-accent-a5)",
    "variable": "var(--colors-accent-a5)"
  },
  "colors.accent.a6": {
    "value": "var(--colors-accent-a6)",
    "variable": "var(--colors-accent-a6)"
  },
  "colors.accent.a7": {
    "value": "var(--colors-accent-a7)",
    "variable": "var(--colors-accent-a7)"
  },
  "colors.accent.a8": {
    "value": "var(--colors-accent-a8)",
    "variable": "var(--colors-accent-a8)"
  },
  "colors.accent.a9": {
    "value": "var(--colors-accent-a9)",
    "variable": "var(--colors-accent-a9)"
  },
  "colors.accent.a10": {
    "value": "var(--colors-accent-a10)",
    "variable": "var(--colors-accent-a10)"
  },
  "colors.accent.a11": {
    "value": "var(--colors-accent-a11)",
    "variable": "var(--colors-accent-a11)"
  },
  "colors.accent.a12": {
    "value": "var(--colors-accent-a12)",
    "variable": "var(--colors-accent-a12)"
  },
  "colors.accent.default": {
    "value": "var(--colors-accent-default)",
    "variable": "var(--colors-accent-default)"
  },
  "colors.accent.emphasized": {
    "value": "var(--colors-accent-emphasized)",
    "variable": "var(--colors-accent-emphasized)"
  },
  "colors.accent.fg": {
    "value": "var(--colors-accent-fg)",
    "variable": "var(--colors-accent-fg)"
  },
  "colors.accent.text": {
    "value": "var(--colors-accent-text)",
    "variable": "var(--colors-accent-text)"
  },
  "colors.bg.canvas": {
    "value": "var(--colors-bg-canvas)",
    "variable": "var(--colors-bg-canvas)"
  },
  "colors.bg.default": {
    "value": "var(--colors-bg-default)",
    "variable": "var(--colors-bg-default)"
  },
  "colors.bg.subtle": {
    "value": "var(--colors-bg-subtle)",
    "variable": "var(--colors-bg-subtle)"
  },
  "colors.bg.muted": {
    "value": "var(--colors-bg-muted)",
    "variable": "var(--colors-bg-muted)"
  },
  "colors.bg.emphasized": {
    "value": "var(--colors-bg-emphasized)",
    "variable": "var(--colors-bg-emphasized)"
  },
  "colors.bg.disabled": {
    "value": "var(--colors-bg-disabled)",
    "variable": "var(--colors-bg-disabled)"
  },
  "colors.fg.default": {
    "value": "var(--colors-fg-default)",
    "variable": "var(--colors-fg-default)"
  },
  "colors.fg.muted": {
    "value": "var(--colors-fg-muted)",
    "variable": "var(--colors-fg-muted)"
  },
  "colors.fg.subtle": {
    "value": "var(--colors-fg-subtle)",
    "variable": "var(--colors-fg-subtle)"
  },
  "colors.fg.disabled": {
    "value": "var(--colors-fg-disabled)",
    "variable": "var(--colors-fg-disabled)"
  },
  "colors.border.default": {
    "value": "var(--colors-border-default)",
    "variable": "var(--colors-border-default)"
  },
  "colors.border.muted": {
    "value": "var(--colors-border-muted)",
    "variable": "var(--colors-border-muted)"
  },
  "colors.border.subtle": {
    "value": "var(--colors-border-subtle)",
    "variable": "var(--colors-border-subtle)"
  },
  "colors.border.disabled": {
    "value": "var(--colors-border-disabled)",
    "variable": "var(--colors-border-disabled)"
  },
  "colors.border.outline": {
    "value": "var(--colors-border-outline)",
    "variable": "var(--colors-border-outline)"
  },
  "shadows.xs": {
    "value": "var(--shadows-xs)",
    "variable": "var(--shadows-xs)"
  },
  "shadows.sm": {
    "value": "var(--shadows-sm)",
    "variable": "var(--shadows-sm)"
  },
  "shadows.md": {
    "value": "var(--shadows-md)",
    "variable": "var(--shadows-md)"
  },
  "shadows.lg": {
    "value": "var(--shadows-lg)",
    "variable": "var(--shadows-lg)"
  },
  "shadows.xl": {
    "value": "var(--shadows-xl)",
    "variable": "var(--shadows-xl)"
  },
  "shadows.2xl": {
    "value": "var(--shadows-2xl)",
    "variable": "var(--shadows-2xl)"
  },
  "radii.l1": {
    "value": "var(--radii-l1)",
    "variable": "var(--radii-l1)"
  },
  "radii.l2": {
    "value": "var(--radii-l2)",
    "variable": "var(--radii-l2)"
  },
  "radii.l3": {
    "value": "var(--radii-l3)",
    "variable": "var(--radii-l3)"
  },
  "spacing.-1": {
    "value": "calc(var(--spacing-1) * -1)",
    "variable": "var(--spacing-1)"
  },
  "spacing.-2": {
    "value": "calc(var(--spacing-2) * -1)",
    "variable": "var(--spacing-2)"
  },
  "spacing.-3": {
    "value": "calc(var(--spacing-3) * -1)",
    "variable": "var(--spacing-3)"
  },
  "spacing.-4": {
    "value": "calc(var(--spacing-4) * -1)",
    "variable": "var(--spacing-4)"
  },
  "spacing.-5": {
    "value": "calc(var(--spacing-5) * -1)",
    "variable": "var(--spacing-5)"
  },
  "spacing.-6": {
    "value": "calc(var(--spacing-6) * -1)",
    "variable": "var(--spacing-6)"
  },
  "spacing.-7": {
    "value": "calc(var(--spacing-7) * -1)",
    "variable": "var(--spacing-7)"
  },
  "spacing.-8": {
    "value": "calc(var(--spacing-8) * -1)",
    "variable": "var(--spacing-8)"
  },
  "spacing.-9": {
    "value": "calc(var(--spacing-9) * -1)",
    "variable": "var(--spacing-9)"
  },
  "spacing.-10": {
    "value": "calc(var(--spacing-10) * -1)",
    "variable": "var(--spacing-10)"
  },
  "spacing.-11": {
    "value": "calc(var(--spacing-11) * -1)",
    "variable": "var(--spacing-11)"
  },
  "spacing.-12": {
    "value": "calc(var(--spacing-12) * -1)",
    "variable": "var(--spacing-12)"
  },
  "spacing.-14": {
    "value": "calc(var(--spacing-14) * -1)",
    "variable": "var(--spacing-14)"
  },
  "spacing.-16": {
    "value": "calc(var(--spacing-16) * -1)",
    "variable": "var(--spacing-16)"
  },
  "spacing.-20": {
    "value": "calc(var(--spacing-20) * -1)",
    "variable": "var(--spacing-20)"
  },
  "spacing.-24": {
    "value": "calc(var(--spacing-24) * -1)",
    "variable": "var(--spacing-24)"
  },
  "spacing.-28": {
    "value": "calc(var(--spacing-28) * -1)",
    "variable": "var(--spacing-28)"
  },
  "spacing.-32": {
    "value": "calc(var(--spacing-32) * -1)",
    "variable": "var(--spacing-32)"
  },
  "spacing.-36": {
    "value": "calc(var(--spacing-36) * -1)",
    "variable": "var(--spacing-36)"
  },
  "spacing.-40": {
    "value": "calc(var(--spacing-40) * -1)",
    "variable": "var(--spacing-40)"
  },
  "spacing.-44": {
    "value": "calc(var(--spacing-44) * -1)",
    "variable": "var(--spacing-44)"
  },
  "spacing.-48": {
    "value": "calc(var(--spacing-48) * -1)",
    "variable": "var(--spacing-48)"
  },
  "spacing.-52": {
    "value": "calc(var(--spacing-52) * -1)",
    "variable": "var(--spacing-52)"
  },
  "spacing.-56": {
    "value": "calc(var(--spacing-56) * -1)",
    "variable": "var(--spacing-56)"
  },
  "spacing.-60": {
    "value": "calc(var(--spacing-60) * -1)",
    "variable": "var(--spacing-60)"
  },
  "spacing.-64": {
    "value": "calc(var(--spacing-64) * -1)",
    "variable": "var(--spacing-64)"
  },
  "spacing.-72": {
    "value": "calc(var(--spacing-72) * -1)",
    "variable": "var(--spacing-72)"
  },
  "spacing.-80": {
    "value": "calc(var(--spacing-80) * -1)",
    "variable": "var(--spacing-80)"
  },
  "spacing.-96": {
    "value": "calc(var(--spacing-96) * -1)",
    "variable": "var(--spacing-96)"
  },
  "spacing.-0.5": {
    "value": "calc(var(--spacing-0\\.5) * -1)",
    "variable": "var(--spacing-0\\.5)"
  },
  "spacing.-1.5": {
    "value": "calc(var(--spacing-1\\.5) * -1)",
    "variable": "var(--spacing-1\\.5)"
  },
  "spacing.-2.5": {
    "value": "calc(var(--spacing-2\\.5) * -1)",
    "variable": "var(--spacing-2\\.5)"
  },
  "spacing.-3.5": {
    "value": "calc(var(--spacing-3\\.5) * -1)",
    "variable": "var(--spacing-3\\.5)"
  },
  "spacing.-4.5": {
    "value": "calc(var(--spacing-4\\.5) * -1)",
    "variable": "var(--spacing-4\\.5)"
  },
  "colors.colorPalette": {
    "value": "var(--colors-color-palette)",
    "variable": "var(--colors-color-palette)"
  },
  "colors.colorPalette.a1": {
    "value": "var(--colors-color-palette-a1)",
    "variable": "var(--colors-color-palette-a1)"
  },
  "colors.colorPalette.a2": {
    "value": "var(--colors-color-palette-a2)",
    "variable": "var(--colors-color-palette-a2)"
  },
  "colors.colorPalette.a3": {
    "value": "var(--colors-color-palette-a3)",
    "variable": "var(--colors-color-palette-a3)"
  },
  "colors.colorPalette.a4": {
    "value": "var(--colors-color-palette-a4)",
    "variable": "var(--colors-color-palette-a4)"
  },
  "colors.colorPalette.a5": {
    "value": "var(--colors-color-palette-a5)",
    "variable": "var(--colors-color-palette-a5)"
  },
  "colors.colorPalette.a6": {
    "value": "var(--colors-color-palette-a6)",
    "variable": "var(--colors-color-palette-a6)"
  },
  "colors.colorPalette.a7": {
    "value": "var(--colors-color-palette-a7)",
    "variable": "var(--colors-color-palette-a7)"
  },
  "colors.colorPalette.a8": {
    "value": "var(--colors-color-palette-a8)",
    "variable": "var(--colors-color-palette-a8)"
  },
  "colors.colorPalette.a9": {
    "value": "var(--colors-color-palette-a9)",
    "variable": "var(--colors-color-palette-a9)"
  },
  "colors.colorPalette.a10": {
    "value": "var(--colors-color-palette-a10)",
    "variable": "var(--colors-color-palette-a10)"
  },
  "colors.colorPalette.a11": {
    "value": "var(--colors-color-palette-a11)",
    "variable": "var(--colors-color-palette-a11)"
  },
  "colors.colorPalette.a12": {
    "value": "var(--colors-color-palette-a12)",
    "variable": "var(--colors-color-palette-a12)"
  },
  "colors.colorPalette.light.1": {
    "value": "var(--colors-color-palette-light-1)",
    "variable": "var(--colors-color-palette-light-1)"
  },
  "colors.colorPalette.1": {
    "value": "var(--colors-color-palette-1)",
    "variable": "var(--colors-color-palette-1)"
  },
  "colors.colorPalette.light.2": {
    "value": "var(--colors-color-palette-light-2)",
    "variable": "var(--colors-color-palette-light-2)"
  },
  "colors.colorPalette.2": {
    "value": "var(--colors-color-palette-2)",
    "variable": "var(--colors-color-palette-2)"
  },
  "colors.colorPalette.light.3": {
    "value": "var(--colors-color-palette-light-3)",
    "variable": "var(--colors-color-palette-light-3)"
  },
  "colors.colorPalette.3": {
    "value": "var(--colors-color-palette-3)",
    "variable": "var(--colors-color-palette-3)"
  },
  "colors.colorPalette.light.4": {
    "value": "var(--colors-color-palette-light-4)",
    "variable": "var(--colors-color-palette-light-4)"
  },
  "colors.colorPalette.4": {
    "value": "var(--colors-color-palette-4)",
    "variable": "var(--colors-color-palette-4)"
  },
  "colors.colorPalette.light.5": {
    "value": "var(--colors-color-palette-light-5)",
    "variable": "var(--colors-color-palette-light-5)"
  },
  "colors.colorPalette.5": {
    "value": "var(--colors-color-palette-5)",
    "variable": "var(--colors-color-palette-5)"
  },
  "colors.colorPalette.light.6": {
    "value": "var(--colors-color-palette-light-6)",
    "variable": "var(--colors-color-palette-light-6)"
  },
  "colors.colorPalette.6": {
    "value": "var(--colors-color-palette-6)",
    "variable": "var(--colors-color-palette-6)"
  },
  "colors.colorPalette.light.7": {
    "value": "var(--colors-color-palette-light-7)",
    "variable": "var(--colors-color-palette-light-7)"
  },
  "colors.colorPalette.7": {
    "value": "var(--colors-color-palette-7)",
    "variable": "var(--colors-color-palette-7)"
  },
  "colors.colorPalette.light.8": {
    "value": "var(--colors-color-palette-light-8)",
    "variable": "var(--colors-color-palette-light-8)"
  },
  "colors.colorPalette.8": {
    "value": "var(--colors-color-palette-8)",
    "variable": "var(--colors-color-palette-8)"
  },
  "colors.colorPalette.light.9": {
    "value": "var(--colors-color-palette-light-9)",
    "variable": "var(--colors-color-palette-light-9)"
  },
  "colors.colorPalette.9": {
    "value": "var(--colors-color-palette-9)",
    "variable": "var(--colors-color-palette-9)"
  },
  "colors.colorPalette.light.10": {
    "value": "var(--colors-color-palette-light-10)",
    "variable": "var(--colors-color-palette-light-10)"
  },
  "colors.colorPalette.10": {
    "value": "var(--colors-color-palette-10)",
    "variable": "var(--colors-color-palette-10)"
  },
  "colors.colorPalette.light.11": {
    "value": "var(--colors-color-palette-light-11)",
    "variable": "var(--colors-color-palette-light-11)"
  },
  "colors.colorPalette.11": {
    "value": "var(--colors-color-palette-11)",
    "variable": "var(--colors-color-palette-11)"
  },
  "colors.colorPalette.light.12": {
    "value": "var(--colors-color-palette-light-12)",
    "variable": "var(--colors-color-palette-light-12)"
  },
  "colors.colorPalette.12": {
    "value": "var(--colors-color-palette-12)",
    "variable": "var(--colors-color-palette-12)"
  },
  "colors.colorPalette.light.a1": {
    "value": "var(--colors-color-palette-light-a1)",
    "variable": "var(--colors-color-palette-light-a1)"
  },
  "colors.colorPalette.light.a2": {
    "value": "var(--colors-color-palette-light-a2)",
    "variable": "var(--colors-color-palette-light-a2)"
  },
  "colors.colorPalette.light.a3": {
    "value": "var(--colors-color-palette-light-a3)",
    "variable": "var(--colors-color-palette-light-a3)"
  },
  "colors.colorPalette.light.a4": {
    "value": "var(--colors-color-palette-light-a4)",
    "variable": "var(--colors-color-palette-light-a4)"
  },
  "colors.colorPalette.light.a5": {
    "value": "var(--colors-color-palette-light-a5)",
    "variable": "var(--colors-color-palette-light-a5)"
  },
  "colors.colorPalette.light.a6": {
    "value": "var(--colors-color-palette-light-a6)",
    "variable": "var(--colors-color-palette-light-a6)"
  },
  "colors.colorPalette.light.a7": {
    "value": "var(--colors-color-palette-light-a7)",
    "variable": "var(--colors-color-palette-light-a7)"
  },
  "colors.colorPalette.light.a8": {
    "value": "var(--colors-color-palette-light-a8)",
    "variable": "var(--colors-color-palette-light-a8)"
  },
  "colors.colorPalette.light.a9": {
    "value": "var(--colors-color-palette-light-a9)",
    "variable": "var(--colors-color-palette-light-a9)"
  },
  "colors.colorPalette.light.a10": {
    "value": "var(--colors-color-palette-light-a10)",
    "variable": "var(--colors-color-palette-light-a10)"
  },
  "colors.colorPalette.light.a11": {
    "value": "var(--colors-color-palette-light-a11)",
    "variable": "var(--colors-color-palette-light-a11)"
  },
  "colors.colorPalette.light.a12": {
    "value": "var(--colors-color-palette-light-a12)",
    "variable": "var(--colors-color-palette-light-a12)"
  },
  "colors.colorPalette.dark.1": {
    "value": "var(--colors-color-palette-dark-1)",
    "variable": "var(--colors-color-palette-dark-1)"
  },
  "colors.colorPalette.dark.2": {
    "value": "var(--colors-color-palette-dark-2)",
    "variable": "var(--colors-color-palette-dark-2)"
  },
  "colors.colorPalette.dark.3": {
    "value": "var(--colors-color-palette-dark-3)",
    "variable": "var(--colors-color-palette-dark-3)"
  },
  "colors.colorPalette.dark.4": {
    "value": "var(--colors-color-palette-dark-4)",
    "variable": "var(--colors-color-palette-dark-4)"
  },
  "colors.colorPalette.dark.5": {
    "value": "var(--colors-color-palette-dark-5)",
    "variable": "var(--colors-color-palette-dark-5)"
  },
  "colors.colorPalette.dark.6": {
    "value": "var(--colors-color-palette-dark-6)",
    "variable": "var(--colors-color-palette-dark-6)"
  },
  "colors.colorPalette.dark.7": {
    "value": "var(--colors-color-palette-dark-7)",
    "variable": "var(--colors-color-palette-dark-7)"
  },
  "colors.colorPalette.dark.8": {
    "value": "var(--colors-color-palette-dark-8)",
    "variable": "var(--colors-color-palette-dark-8)"
  },
  "colors.colorPalette.dark.9": {
    "value": "var(--colors-color-palette-dark-9)",
    "variable": "var(--colors-color-palette-dark-9)"
  },
  "colors.colorPalette.dark.10": {
    "value": "var(--colors-color-palette-dark-10)",
    "variable": "var(--colors-color-palette-dark-10)"
  },
  "colors.colorPalette.dark.11": {
    "value": "var(--colors-color-palette-dark-11)",
    "variable": "var(--colors-color-palette-dark-11)"
  },
  "colors.colorPalette.dark.12": {
    "value": "var(--colors-color-palette-dark-12)",
    "variable": "var(--colors-color-palette-dark-12)"
  },
  "colors.colorPalette.dark.a1": {
    "value": "var(--colors-color-palette-dark-a1)",
    "variable": "var(--colors-color-palette-dark-a1)"
  },
  "colors.colorPalette.dark.a2": {
    "value": "var(--colors-color-palette-dark-a2)",
    "variable": "var(--colors-color-palette-dark-a2)"
  },
  "colors.colorPalette.dark.a3": {
    "value": "var(--colors-color-palette-dark-a3)",
    "variable": "var(--colors-color-palette-dark-a3)"
  },
  "colors.colorPalette.dark.a4": {
    "value": "var(--colors-color-palette-dark-a4)",
    "variable": "var(--colors-color-palette-dark-a4)"
  },
  "colors.colorPalette.dark.a5": {
    "value": "var(--colors-color-palette-dark-a5)",
    "variable": "var(--colors-color-palette-dark-a5)"
  },
  "colors.colorPalette.dark.a6": {
    "value": "var(--colors-color-palette-dark-a6)",
    "variable": "var(--colors-color-palette-dark-a6)"
  },
  "colors.colorPalette.dark.a7": {
    "value": "var(--colors-color-palette-dark-a7)",
    "variable": "var(--colors-color-palette-dark-a7)"
  },
  "colors.colorPalette.dark.a8": {
    "value": "var(--colors-color-palette-dark-a8)",
    "variable": "var(--colors-color-palette-dark-a8)"
  },
  "colors.colorPalette.dark.a9": {
    "value": "var(--colors-color-palette-dark-a9)",
    "variable": "var(--colors-color-palette-dark-a9)"
  },
  "colors.colorPalette.dark.a10": {
    "value": "var(--colors-color-palette-dark-a10)",
    "variable": "var(--colors-color-palette-dark-a10)"
  },
  "colors.colorPalette.dark.a11": {
    "value": "var(--colors-color-palette-dark-a11)",
    "variable": "var(--colors-color-palette-dark-a11)"
  },
  "colors.colorPalette.dark.a12": {
    "value": "var(--colors-color-palette-dark-a12)",
    "variable": "var(--colors-color-palette-dark-a12)"
  },
  "colors.colorPalette.default": {
    "value": "var(--colors-color-palette-default)",
    "variable": "var(--colors-color-palette-default)"
  },
  "colors.colorPalette.emphasized": {
    "value": "var(--colors-color-palette-emphasized)",
    "variable": "var(--colors-color-palette-emphasized)"
  },
  "colors.colorPalette.fg": {
    "value": "var(--colors-color-palette-fg)",
    "variable": "var(--colors-color-palette-fg)"
  },
  "colors.colorPalette.text": {
    "value": "var(--colors-color-palette-text)",
    "variable": "var(--colors-color-palette-text)"
  },
  "colors.colorPalette.canvas": {
    "value": "var(--colors-color-palette-canvas)",
    "variable": "var(--colors-color-palette-canvas)"
  },
  "colors.colorPalette.subtle": {
    "value": "var(--colors-color-palette-subtle)",
    "variable": "var(--colors-color-palette-subtle)"
  },
  "colors.colorPalette.muted": {
    "value": "var(--colors-color-palette-muted)",
    "variable": "var(--colors-color-palette-muted)"
  },
  "colors.colorPalette.disabled": {
    "value": "var(--colors-color-palette-disabled)",
    "variable": "var(--colors-color-palette-disabled)"
  },
  "colors.colorPalette.outline": {
    "value": "var(--colors-color-palette-outline)",
    "variable": "var(--colors-color-palette-outline)"
  }
}

export function token(path, fallback) {
  return tokens[path]?.value || fallback
}

function tokenVar(path, fallback) {
  return tokens[path]?.variable || fallback
}

token.var = tokenVar