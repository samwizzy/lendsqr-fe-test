import React from "react";
import { Divider } from "@mui/material";
import { User } from "../../../store/model/User";

type IProps = {
  user: User;
};

function GeneralDetails(props: IProps) {
  const { user } = props;
  return (
    <div>
      <div className="mb-8">
        <h3 className="text-secondary text-lg font-medium">Personal Information</h3>
      </div>

      <section className="grid grid-cols-5 gap-x-6">
        <dl className="col-span-5 sm:col-span-1">
          <dt className="font-thin text-xs uppercase">full Name</dt>
          <dd className="font-medium text-secondary">{user.profile.firstName + " " + user.profile.lastName}</dd>
          <dt className="font-thin text-xs uppercase">Marital status</dt>
          <dd className="font-medium text-secondary">Single</dd>
        </dl>
        <dl className="col-span-5 sm:col-span-1">
          <dt className="font-thin text-xs uppercase">Phone Number</dt>
          <dd className="font-medium text-secondary">{user.phoneNumber}</dd>
          <dt className="font-thin text-xs uppercase">Children</dt>
          <dd className="font-medium text-secondary">None</dd>
        </dl>
        <dl className="col-span-5 sm:col-span-1">
          <dt className="font-thin text-xs uppercase">Email Address</dt>
          <dd className="font-medium text-secondary">{user.email}</dd>
          <dt className="font-thin text-xs uppercase">Type of residence</dt>
          <dd className="font-medium text-secondary">Parent's Apartment</dd>
        </dl>
        <dl className="col-span-5 sm:col-span-1">
          <dt className="font-thin text-xs uppercase">Bvn</dt>
          <dd className="font-medium text-secondary">{user.profile.bvn}</dd>
        </dl>
        <dl className="col-span-5 sm:col-span-1">
          <dt className="font-thin text-xs uppercase">Gender</dt>
          <dd className="font-medium text-secondary">{user.profile.gender}</dd>
        </dl>
      </section>

      <Divider sx={{ my: 3 }} />

      <div className="mb-8">
        <h3 className="text-secondary text-lg font-medium">Education and Employment</h3>
      </div>

      <section className="grid grid-cols-5 gap-x-6">
        <dl className="col-span-5 sm:col-span-1">
          <dt className="font-thin text-xs uppercase">level of education</dt>
          <dd className="font-medium text-secondary">{user.education.level}</dd>
          <dt className="font-thin text-xs uppercase">office email</dt>
          <dd className="font-medium text-secondary">{user.education.officeEmail}</dd>
        </dl>
        <dl className="col-span-5 sm:col-span-1">
          <dt className="font-thin text-xs uppercase">employment status</dt>
          <dd className="font-medium text-secondary">{user.education.employmentStatus}</dd>
          <dt className="font-thin text-xs uppercase">Monthly income</dt>
          <dd className="font-medium text-secondary">
            {user.education.monthlyIncome[1]} — {user.education.monthlyIncome[2]}
          </dd>
        </dl>
        <dl className="col-span-5 sm:col-span-1">
          <dt className="font-thin text-xs uppercase">sector of employment</dt>
          <dd className="font-medium text-secondary">{user.education.sector}</dd>
          <dt className="font-thin text-xs uppercase">loan repayment</dt>
          <dd className="font-medium text-secondary">{user.education.loanRepayment}</dd>
        </dl>
        <dl className="col-span-5 sm:col-span-1">
          <dt className="font-thin text-xs uppercase">Duration of employment</dt>
          <dd className="font-medium text-secondary">{user.education.duration}</dd>
        </dl>
      </section>

      <Divider sx={{ my: 3 }} />

      <div className="mb-8">
        <h3 className="text-secondary text-lg font-medium">Socials</h3>
      </div>

      <section className="grid grid-cols-5 gap-x-6">
        <dl className="col-span-5 sm:col-span-1">
          <dt className="font-thin text-xs uppercase">Twitter</dt>
          <dd className="font-medium text-secondary">{user.socials.twitter}</dd>
        </dl>
        <dl className="col-span-5 sm:col-span-1">
          <dt className="font-thin text-xs uppercase">Facebook</dt>
          <dd className="font-medium text-secondary">{user.socials.facebook}</dd>
        </dl>
        <dl className="col-span-5 sm:col-span-1">
          <dt className="font-thin text-xs uppercase">Instagram</dt>
          <dd className="font-medium text-secondary">{user.socials.instagram}</dd>
        </dl>
      </section>

      <Divider sx={{ my: 3 }} />

      <div className="mb-8">
        <h3 className="text-secondary text-lg font-medium">Guarantor</h3>
      </div>

      <section className="grid grid-cols-5 gap-x-6">
        <dl className="col-span-5 sm:col-span-1">
          <dt className="font-thin text-xs uppercase">full Name</dt>
          <dd className="font-medium text-secondary">{user.guarantor.firstName + " " + user.guarantor.lastName}</dd>
        </dl>
        <dl className="col-span-5 sm:col-span-1">
          <dt className="font-thin text-xs uppercase">Phone Number</dt>
          <dd className="font-medium text-secondary">{user.guarantor.phoneNumber}</dd>
        </dl>
        <dl className="col-span-5 sm:col-span-1">
          <dt className="font-thin text-xs uppercase">Email Address</dt>
          <dd className="font-medium text-secondary">debby@gmail.com</dd>
        </dl>
        <dl className="col-span-5 sm:col-span-1">
          <dt className="font-thin text-xs uppercase">Relationship</dt>
          <dd className="font-medium text-secondary">Sister</dd>
        </dl>
      </section>

      <Divider sx={{ my: 3 }} />

      <section className="grid grid-cols-5 gap-x-6 ">
        <dl className="col-span-5 sm:col-span-1">
          <dt className="font-thin text-xs uppercase">full Name</dt>
          <dd className="font-medium text-secondary">{user.guarantor.firstName + " " + user.guarantor.lastName}</dd>
        </dl>
        <dl className="col-span-5 sm:col-span-1">
          <dt className="font-thin text-xs uppercase">Phone Number</dt>
          <dd className="font-medium text-secondary">{user.guarantor.phoneNumber}</dd>
        </dl>
        <dl className="col-span-5 sm:col-span-1">
          <dt className="font-thin text-xs uppercase">Email Address</dt>
          <dd className="font-medium text-secondary">debby@gmail.com</dd>
        </dl>
        <dl className="col-span-5 sm:col-span-1">
          <dt className="font-thin text-xs uppercase">Relationship</dt>
          <dd className="font-medium text-secondary">Sister</dd>
        </dl>
      </section>
    </div>
  );
}

export default GeneralDetails;
