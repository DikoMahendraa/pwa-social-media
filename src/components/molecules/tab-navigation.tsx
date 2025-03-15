"use client";

import { useState } from "react";
import { TabButton } from "../atoms/tab-button";

interface Tab {
  id: string;
  label: string;
}

interface TabNavigationProps {
  tabs: Tab[];
  defaultActiveTab?: string;
  onTabChange?: (tabId: string) => void;
}

export function TabNavigation({
  tabs,
  defaultActiveTab,
  onTabChange,
}: TabNavigationProps) {
  const [activeTab, setActiveTab] = useState(defaultActiveTab || tabs[0]?.id);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    if (onTabChange) {
      onTabChange(tabId);
    }
  };

  return (
    <div className="flex border-b border-b-[#e6e6e6] mb-4">
      {tabs.map((tab) => (
        <TabButton
          key={tab.id}
          active={activeTab === tab.id}
          onClick={() => handleTabClick(tab.id)}
        >
          {tab.label}
        </TabButton>
      ))}
    </div>
  );
}
