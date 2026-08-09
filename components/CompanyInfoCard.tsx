export default function CompanyInfoCard() {
  return (
    <div className="bg-white border border-slate-200 rounded-lg p-6">
      <h2 className="text-lg font-bold text-slate-900 mb-4">DANTECHDEVS</h2>

      <div className="space-y-4 text-sm">
        <div>
          <p className="text-slate-500 uppercase text-xs font-semibold">
            Email Inquiry
          </p>
          <p className="font-medium text-slate-900">support@dantechdevs.co.ke</p>
        </div>

        <div>
          <p className="text-slate-500 uppercase text-xs font-semibold">
            Direct Telephone
          </p>
          <p className="font-medium text-slate-900">+254 712 328150 / +254 728 328150</p>
        </div>

        <div>
          <p className="text-slate-500 uppercase text-xs font-semibold">
            Location &amp; Headquarters
          </p>
          <p className="font-medium text-slate-900">Nairobi, Kenya</p>
        </div>

        <div>
          <p className="text-slate-500 uppercase text-xs font-semibold">
            Working Hours
          </p>
          <p className="font-medium text-slate-900">Mon - Fri: 8:00 AM - 5:00 PM EAT</p>
        </div>
      </div>

      <div className="mt-6 bg-blue-50 border border-blue-100 rounded-md p-4">
        <p className="text-blue-700 font-semibold text-sm mb-1">
          ✔ Our Service Commitment
        </p>
        <p className="text-xs text-slate-600">
          We are committed to quality, reliability, security, professionalism,
          innovation, timely delivery, and long-term partnerships.
        </p>
      </div>
    </div>
  );
}
