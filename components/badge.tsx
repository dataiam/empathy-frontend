import React from "react";

export const BadgeSuccess: React.FC<Badge> = ({
  title,
  badgeClass
}) => {
  return <span className={badgeClass}>{title}</span>;
};
