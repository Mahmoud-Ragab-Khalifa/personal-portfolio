"use client";

import { RefObject, useEffect } from "react";

const useClickOutside = (
  ref: RefObject<HTMLElement | null>,
  callback: () => void,
  enabled: boolean,
) => {
  useEffect(() => {
    if (!enabled) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [callback, enabled, ref]);
};

export default useClickOutside;
