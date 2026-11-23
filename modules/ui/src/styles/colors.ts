export const lightColors = {
  surface: {
    primary: "#FFFFFF",
    secondary: "#F8FAFC",
    tertiary: "#F1F5F9",
    inverse: "#0F172A",
  },
  text: {
    primary: "#0F172A",
    secondary: "#334155",
    muted: "#475569",
    inverse: "#F8FAFC",
  },
  border: {
    subtle: "#E2E8F0",
    default: "#CBD5E1",
    strong: "#64748B",
    focus: "#1D4ED8",
  },
  accent: {
    primary: "#1D4ED8",
    pressed: "#1E40AF",
    subtle: "#DBEAFE",
    onPrimary: "#FFFFFF",
  },
  status: {
    success: { foreground: "#166534", background: "#DCFCE7" },
    warning: { foreground: "#92400E", background: "#FEF3C7" },
    error: { foreground: "#B91C1C", background: "#FEE2E2" },
    info: { foreground: "#075985", background: "#E0F2FE" },
  },
} as const;

export type Palette<T> = {
  [Key in keyof T]: T[Key] extends string ? string : Palette<T[Key]>;
};

export const darkColors = {
  surface: {
    primary: "#0F172A",
    secondary: "#1E293B",
    tertiary: "#334155",
    inverse: "#F8FAFC",
  },
  text: {
    primary: "#F8FAFC",
    secondary: "#E2E8F0",
    muted: "#CBD5E1",
    inverse: "#0F172A",
  },
  border: {
    subtle: "#334155",
    default: "#475569",
    strong: "#94A3B8",
    focus: "#93C5FD",
  },
  accent: {
    primary: "#93C5FD",
    pressed: "#60A5FA",
    subtle: "#172554",
    onPrimary: "#0F172A",
  },
  status: {
    success: { foreground: "#86EFAC", background: "#14532D" },
    warning: { foreground: "#FCD34D", background: "#451A03" },
    error: { foreground: "#FCA5A5", background: "#450A0A" },
    info: { foreground: "#7DD3FC", background: "#082F49" },
  },
} as const satisfies Palette<typeof lightColors>;

export type ColorsType = Palette<typeof darkColors>;
