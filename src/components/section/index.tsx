import React from "react";

type SectionProps = {
  label: string;
  message: string;
};

export function Section(props: SectionProps) {
  const { label, message } = props;
  return (
    <div>
      <p className="text-sm font-medium">{label}</p>
      <p className="text-sm font-light">{message}</p>
    </div>
  );
}
