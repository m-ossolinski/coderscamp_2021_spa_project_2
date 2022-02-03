import { StyledNavigation } from "./Navigation.styled";
import { StyledNavLink } from "./NavLink.styled";
import * as Icons from "react-icons/fa";

export const Navigation = () => {
  const sidebarData = [
    { label: "Home", href: "/", icon: "BiHome" },
    { label: "Transactions", href: "/transactions", icon: "FaMoneyBillWave" },
    { label: "Stats", href: "/stats", icon: "ImStatsDots" },
  ];
  return (
    <StyledNavigation>
      <ul>
        {sidebarData.map((link) => (
          <li key={link.href}>
            <StyledNavLink to={link.href}>{link.label}</StyledNavLink>
          </li>
        ))}
      </ul>
    </StyledNavigation>
  );
};
