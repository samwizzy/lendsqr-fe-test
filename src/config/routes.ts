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
      { name: "Users", icon: userIcon },
      { name: "Guarantors", icon: guarantorIcon },
      { name: "Loans", icon: loanIcon },
      { name: "Decision Models", icon: handshakeIcon },
      { name: "Savings", icon: piggybankIcon },
      { name: "Loan Requests", icon: loanRequestIcon },
      { name: "Whitelist", icon: whitelistIcon },
      { name: "Karma", icon: userTimesIcon },
    ],
  },
  {
    title: "Business",
    data: [
      { name: "Organization", icon: briefcaseIcon },
      { name: "Loan Products", icon: loanRequestIcon },
      { name: "Savings Products", icon: savingsIcon },
      { name: "Fees and Charges", icon: coinsIcon },
      { name: "Transactions", icon: transactionIcon },
      { name: "Services", icon: servicesIcon },
      { name: "Service Account", icon: usercogIcon },
      { name: "Settlements", icon: scrollIcon },
      { name: "Reports", icon: reportIcon },
    ],
  },
  {
    title: "Settings",
    data: [
      { name: "Preferences", icon: preferencesIcon },
      { name: "Fees and Pricing", icon: badgePercentIcon },
      { name: "Audit Logs", icon: logsIcon },
    ],
  },
];
