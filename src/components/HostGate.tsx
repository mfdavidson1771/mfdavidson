import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";

type HostGateProps = {
  allow: string[];
  fallback?: ReactNode;
  children: ReactNode;
};

const HostGate = ({ allow, fallback, children }: HostGateProps) => {
  if (typeof window === "undefined") return null;
  const host = window.location.hostname.toLowerCase();
  const isLocal = host === "localhost" || host === "127.0.0.1";
  const isLovable = host.endsWith(".lovable.app") || host.endsWith(".lovable.dev");
  const allowedHosts = allow.map((h) => h.toLowerCase());
  const allowed = isLocal || isLovable || allowedHosts.includes(host);

  if (allowed) return <>{children}</>;
  return fallback ? <>{fallback}</> : <Navigate to="/" replace />;
};

export default HostGate;
