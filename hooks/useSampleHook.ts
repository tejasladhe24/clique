import { signal } from "@preact/signals";

const sample = signal<number>(0);

export const useSampleHook = { sample };