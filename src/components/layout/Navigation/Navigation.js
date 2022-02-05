import { StyledNavigation } from "./Navigation.styled";
import { StyledNavLink } from "./NavLink.styled";
import * as Icons from "react-icons/fa";

export const Navigation = () => {
  const sidebarData = [
    { label: "Home", href: "/", icon: "FaHome" },
    { label: "Transactions", href: "/transactions", icon: "FaMoneyBillWave" },
    { label: "Stats", href: "/stats", icon: "FaRegChartBar" },
    { label: "Categories", href: "/categories", icon: "FaBoxes" },
  ];
  return (
    <StyledNavigation>
      <ul>
        {sidebarData.map((link) => {
          const { [link.icon]: Icon } = Icons;
          return (
            <li key={link.href}>
              <StyledNavLink to={link.href}>
                <Icon className="NavLink-icon" />
                {link.label}
              </StyledNavLink>
            </li>
          );
        })}
      </ul>
    </StyledNavigation>
  );
};
