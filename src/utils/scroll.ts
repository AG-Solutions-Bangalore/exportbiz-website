import type Lenis from "lenis";

let globalLenis: Lenis | null = null;

export function setGlobalLenis(instance: Lenis | null): void {
  globalLenis = instance;
}

export function getGlobalLenis(): Lenis | null {
  return globalLenis;
}

export function scrollToTarget(
  target: string | HTMLElement | number,
  options?: { offset?: number; immediate?: boolean }
): void {
  if (globalLenis) {
    globalLenis.scrollTo(target, options);
  } else if (typeof window !== "undefined") {
    if (typeof target === "number") {
      window.scrollTo({
        top: target,
        behavior: options?.immediate ? "auto" : "smooth",
      });
    } else if (typeof target === "string") {
      const el = document.getElementById(target.replace("#", ""));
      el?.scrollIntoView({ behavior: options?.immediate ? "auto" : "smooth" });
    } else if (target instanceof HTMLElement) {
      target.scrollIntoView({ behavior: options?.immediate ? "auto" : "smooth" });
    }
  }
}

export function scrollToTop(): void {
  scrollToTarget(0);
}
