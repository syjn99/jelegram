"use client";

import useActiveChannel from "../hooks/useActiveChannel";

interface ActiveStatusProps {}

export default function ActiveStatus({}: ActiveStatusProps) {
  useActiveChannel();

  return null;
}
