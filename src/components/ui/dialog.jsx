import React from "react";
import { Dialog as RadixDialog } from "@radix-ui/react-dialog";

export function Dialog({ open, onOpenChange, children }) {
  return (
    <RadixDialog open={open} onOpenChange={onOpenChange}>
      <RadixDialog.Overlay className="fixed inset-0 bg-black/30" />
      <RadixDialog.Content className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-6">
        {children}
      </RadixDialog.Content>
    </RadixDialog>
  );
}

export function DialogHeader({ children }) {
  return <div className="text-lg font-bold">{children}</div>;
}

export function DialogTitle({ children }) {
  return <h2 className="text-xl font-semibold">{children}</h2>;
}

export function DialogContent({ children }) {
  return <div className="mt-4">{children}</div>;
}

export function DialogTrigger({ children, onClick }) {
  return (
    <button onClick={onClick} className="text-blue-500 hover:underline">
      {children}
    </button>
  );
}