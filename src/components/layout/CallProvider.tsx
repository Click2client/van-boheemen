"use client";

import { createContext, useCallback, useContext, useState, type ReactNode } from "react";

type CallContextValue = {
  open: boolean;
  toggle: () => void;
  close: () => void;
};

const CallContext = createContext<CallContextValue | null>(null);

export function CallProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const toggle = useCallback(() => setOpen((value) => !value), []);
  const close = useCallback(() => setOpen(false), []);

  return (
    <CallContext.Provider value={{ open, toggle, close }}>{children}</CallContext.Provider>
  );
}

export function CallButton({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const { toggle } = useCall();
  return (
    <button type="button" data-call-trigger="" onClick={toggle} className={className}>
      {children}
    </button>
  );
}

export function useCall(): CallContextValue {
  const value = useContext(CallContext);
  if (!value) {
    throw new Error("useCall moet binnen CallProvider worden gebruikt.");
  }
  return value;
}
