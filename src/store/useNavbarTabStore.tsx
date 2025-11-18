import { create } from "zustand";
import { TabTypes } from "../types/types";

interface NavbarTabStore {
    activeTab: TabTypes;
    setActiveTab: (tab: TabTypes) => void;
}

export const useNavbarTabStore = create<NavbarTabStore>((set) => ({
    activeTab: TabTypes.INFO,
    setActiveTab: (tab: TabTypes) => set({ activeTab: tab })
}))