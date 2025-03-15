import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export type SubscriptionPlan = "annually" | "monthly" | "free" | string;

interface SubscriptionState {
  selectedPlan: SubscriptionPlan;
  isSubscribed: boolean;

  // Actions
  selectPlan: (plan: SubscriptionPlan) => void;
  cancelSubscription: () => void;
  setSubscription: (value: boolean) => void;
}

export const useSubscriptionStore = create<SubscriptionState>()(
  persist(
    (set) => ({
      selectedPlan: "",
      isSubscribed: false,

      selectPlan: (plan) => set({ selectedPlan: plan }),
      setSubscription: (value) => set(() => ({ isSubscribed: value })),
      cancelSubscription: () =>
        set({
          isSubscribed: false,
        }),
    }),
    {
      name: "subscription-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
