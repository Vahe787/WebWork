export default function Footer() {
  return (
    <div>
      <div className="pt-44">
        <p className="text-4xl font-bold text-gray-700 text-center">
          Track Billable Hours with WebWork
        </p>
        <p className="text-4xl font-bold text-gray-700 text-center">
          {" "}
          Time Tracker
        </p>
        <div>
          <div className="flex justify-center pt-20">
            <div>
              <input
                className="mt-10 w-96 border-2 border-slate-300 pt-3 pb-3 pl-5 pr-5 rounded-3xl placeholder-gray-500 border"
                placeholder="Your e-mail adress"
              />
            </div>
            <div>
              <button className="mt-10 border-solid border-2 pt-3 pb-3 pl-10 pr-10 bg-purple-500 border-purple-500 cursor-pointer rounded-3xl text-base">
                <p className="text-white">Start 7 Days Free Trial</p>
              </button>
            </div>
          </div>
          <p className="text-center mr-80 pt-2 text-yellow-400">
            Use now, pay in 30 days. No credit card required
          </p>
        </div>
      </div>
      <div>
        <div>
          <p> Time Tracking Software</p>
          <p>Features</p>
          <p>Pricing</p>
          <p></p>
        </div>
        <div>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
        <div>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
        <div>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </div>
    </div>
  );
}
