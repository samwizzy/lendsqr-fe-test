import userIcon from "/assets/icons/user-group.svg";
import guarantorIcon from "/assets/icons/guarantor.svg";
import loanIcon from "/assets/icons/loans.svg";
import handshakeIcon from "/assets/icons/handshake.svg";
import piggybankIcon from "/assets/icons/piggybank.svg";
import loanRequestIcon from "/assets/icons/loan-request.svg";
import whitelistIcon from "/assets/icons/user-check.svg";
import userTimesIcon from "/assets/icons/user-times.svg";
import briefcaseIcon from "/assets/icons/briefcase.svg";
import savingsIcon from "/assets/icons/savings-product.svg";
import coinsIcon from "/assets/icons/coins-solid.svg";
import transactionIcon from "/assets/icons/transaction.svg";
import servicesIcon from "/assets/icons/services.svg";
import usercogIcon from "/assets/icons/user-cog.svg";
import scrollIcon from "/assets/icons/scroll.svg";
import reportIcon from "/assets/icons/chart-bar.svg";
import preferencesIcon from "/assets/icons/preferences.svg";
import badgePercentIcon from "/assets/icons/badge-percent.svg";
import logsIcon from "/assets/icons/clipboard-list.svg";

export const routes = [
  {
    title: "Customers",
    data: [
      { name: "Users", icon: userIcon, path: "/users" },
      { name: "Guarantors", icon: guarantorIcon, path: "/" },
      { name: "Loans", icon: loanIcon, path: "/" },
      { name: "Decision Models", icon: handshakeIcon, path: "/" },
      { name: "Savings", icon: piggybankIcon, path: "/" },
      { name: "Loan Requests", icon: loanRequestIcon, path: "/" },
      { name: "Whitelist", icon: whitelistIcon, path: "/" },
      { name: "Karma", icon: userTimesIcon, path: "/" },
    ],
  },
  {
    title: "Business",
    data: [
      { name: "Organization", icon: briefcaseIcon, path: "/" },
      { name: "Loan Products", icon: loanRequestIcon, path: "/" },
      { name: "Savings Products", icon: savingsIcon, path: "/" },
      { name: "Fees and Charges", icon: coinsIcon, path: "/" },
      { name: "Transactions", icon: transactionIcon, path: "/" },
      { name: "Services", icon: servicesIcon, path: "/" },
      { name: "Service Account", icon: usercogIcon, path: "/" },
      { name: "Settlements", icon: scrollIcon, path: "/" },
      { name: "Reports", icon: reportIcon, path: "/" },
    ],
  },
  {
    title: "Settings",
    data: [
      { name: "Preferences", icon: preferencesIcon, path: "/" },
      { name: "Fees and Pricing", icon: badgePercentIcon, path: "/" },
      { name: "Audit Logs", icon: logsIcon, path: "/" },
    ],
  },
];
