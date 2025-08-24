import React from "react";

export function Tabs({ defaultValue, className, children }) {
  const [selectedTab, setSelectedTab] = React.useState(defaultValue);

  const handleTabClick = (value) => {
    setSelectedTab(value);
  };

  return (
    <div className={`tabs ${className}`}>
      <div className="tabs-list">
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              isSelected: child.props.value === selectedTab,
              onClick: () => handleTabClick(child.props.value),
            });
          }
          return child;
        })}
      </div>
      <div className="tabs-content">
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child) && child.props.value === selectedTab) {
            return child.props.children;
          }
          return null;
        })}
      </div>
    </div>
  );
}

export function TabsList({ children }) {
  return <div className="tabs-list">{children}</div>;
}

export function TabsTrigger({ value, isSelected, onClick, children }) {
  return (
    <button
      className={`tab-trigger ${isSelected ? "active" : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export function TabsContent({ children }) {
  return <div className="tabs-content">{children}</div>;
}