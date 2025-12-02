import { create } from "zustand";

type WakaState = {
  time: string | null;
  fetchTime: () => Promise<void>;
};

export const useWakaTime = create<WakaState>((set) => ({
  time: null,

  fetchTime: async () => {
    const res = await fetch("/api/wakatime");
    const data = await res.json();
    const total = data.data?.[0]?.grand_total?.text || "0h";
    set({ time: total });
  },
}));
