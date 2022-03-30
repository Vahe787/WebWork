import {
  Download,
  Features,
  GetStarted,
  Home,
  Login,
  Price,
  TimeTracking,
  WebWorkLogo,
} from "./Menu/NavBar";

import Billable from "./Menu/Body/Billable/Billable";
import Task from "./Menu/Body/Task/Task";
import Amount from "./Menu/Body/Amount/Amount";
import FinInfo from "./Menu/Body/FinInfo/FinInfo";

export default function WebWork() {
  return (
    <div>
      <div>
        <nav>
          <header className="h-40">
            <div>
              <ul className="flex justify-center  mt-4 text-gray-700">
                <WebWorkLogo />{" "}
                <li className="mt-2 text-base font-serif">
                  <Home />
                </li>
                <li className="mt-2 text-base font-serif">
                  <Features />
                </li>
                <li className="mt-2 text-base font-serif">
                  <TimeTracking />
                </li>
                <li className="mt-2 text-base font-serif">
                  <Price />
                </li>
                <li className="mt-2 text-base font-serif">
                  <Download />
                </li>
                <li className="mt-2 text-base font-serif">
                  <Login />
                </li>
                <GetStarted />
              </ul>
            </div>
          </header>
        </nav>
      </div>

      <div className="h-96">
        <Billable />
      </div>

      <div className="h-44">
        <Task />
      </div>

      <div>
        <Amount />
      </div>

      <div>
        <FinInfo />
      </div>
    </div>
  );
}
