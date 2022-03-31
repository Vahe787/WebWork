export default function Billable() {
  return (
    <div className="bg-slate-100 pt-20 pb-5 ">
      <div className="flex justify-center">
        <div>
          <svg
            width="63"
            height="63"
            viewBox="0 0 63 63"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_2_956"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="63"
              height="63"
            >
              <rect width="63" height="63" fill="#C4C4C4" />
            </mask>
            <g mask="url(#mask0_2_956)">
              <path
                d="M27.0727 38.7408C21.8073 27.7685 1.96318 36.0517 1.96438 25.5919C1.96647 7.50015 34.5754 5.11239 42.9398 11.2688C54.2087 19.563 61.9317 31.3777 60.4809 41.646C59.7931 46.5132 57.863 52.2653 46.787 53.1361C35.711 54.0069 27.0727 38.7408 27.0727 38.7408Z"
                fill="url(#paint0_linear_2_956)"
              />
              <mask
                id="mask1_2_956"
                maskUnits="userSpaceOnUse"
                x="9"
                y="9"
                width="45"
                height="46"
              >
                <rect x="9" y="9.00049" width="45" height="45" fill="#C4C4C4" />
              </mask>
              <g mask="url(#mask1_2_956)">
                <path
                  d="M11.0625 17.8352V22.0186C11.0625 22.5876 11.5237 23.0488 12.0926 23.0488C12.5021 23.0488 12.8706 22.8051 13.0469 22.4355C16.3398 15.5309 23.3848 10.7598 31.5442 10.7598C42.1645 10.7598 50.8971 18.8432 51.9247 29.1933"
                  stroke="#37434E"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M51.9247 44.0895V40.4648C51.9247 39.8958 51.4634 39.4345 50.8944 39.4345C50.485 39.4345 50.1166 39.6783 49.9404 40.0478C46.6474 46.9523 39.6025 51.7235 31.443 51.7235C20.8226 51.7235 12.0901 43.64 11.0625 33.29"
                  stroke="#37434E"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M31.8151 21.5654C34.1547 21.627 36.7003 22.6096 38.1458 24.0224C38.1458 24.0224 36.752 22.8554 35.252 22.2627C33.9782 21.7594 31.8151 21.5654 31.8151 21.5654ZM31.8151 21.5654C29.0314 21.4922 26.5395 22.723 26.5395 26.0849C26.5395 32.2724 38.1458 29.1787 38.1458 35.3662C38.1458 38.8951 35.0568 40.4114 31.8151 40.2976M31.8151 21.5654V40.2976M31.8151 21.5654V17.835M31.8151 40.2976C29.3731 40.2118 26.8444 39.2009 25.4844 37.4286C25.4844 37.4286 26.6844 38.6933 27.6352 39.2C29.6947 40.2976 31.8151 40.2976 31.8151 40.2976ZM31.8151 40.2976V44.6473"
                  stroke="#37434E"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_2_956"
                x1="33.1674"
                y1="59.3454"
                x2="48.8609"
                y2="0.772027"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.0613606" stopColor="#65D090" />
                <stop offset="1" stopColor="#AFF4BE" stopOpacity="0.16" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="ml-5 mt-3">
          <p className="text-4xl font-bold text-gray-700">Billable Hours</p>
        </div>
      </div>
      <div>
        <div className=" flex-col flex justify-center items-center text-gray-700">
          <p className="mt-10 text-center w-2/5">
            Set an hourly rate to your contracts to mark them as billable. Get
            amount reports and{" "}
            <a
              href="./generate"
              className="border-2 border-transparent border-b-indigo-900"
            >
              generate invoices
            </a>{" "}
            to get paid.
          </p>
          <button className="mt-10 border-solid border-2 pt-3 pb-3 pl-10 pr-10 bg-purple-500 border-purple-500 cursor-pointer rounded-3xl text-base">
            <p className="text-white">Start 7 Days Free Trial</p>
          </button>
          <p className="text-yellow-400 mt-5">
            Use now, pay in 30 days. No credit card required
          </p>
        </div>
      </div>
    </div>
  );
}
