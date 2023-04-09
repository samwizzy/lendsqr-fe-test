type Gender = "Male" | "Female";
type Currency = "NGN" | "USD";

export interface User {
  createdAt: string;
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  lastActiveDate: string;
  profile: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    avatar: string;
    gender: Gender;
    bvn: string;
    address: string;
    currency: Currency;
  };
  guarantor: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    gender: Gender;
    address: string;
  };
  accountBalance: string;
  accountNumber: string;
  socials: {
    facebook: string;
    instagram: string;
    twitter: string;
  };
  education: {
    level: string;
    employmentStatus: "Employed";
    sector: string;
    duration: string;
    officeEmail: string;
    monthlyIncome: string[];
    loanRepayment: string;
  };
  id: string;
}

export interface IUser {
  id: string;
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  createdAt: string;
  employmentStatus: string;
}
