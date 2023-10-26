// component for the subjectcard
import "../styles/Subjects.css";

import { PiFlaskBold } from "react-icons/pi";
interface Props {
  subname: string;
  show_name: string;
}
export default function Subjectcard({ subname, show_name }: Props) {
  return (
    <>
      <div className="subjectcard">
        <div className="subject">{subname}</div>
        <div className="showable">
          <div className="show">
            {show_name}
            {/* S<PiFlaskBold size={35}></PiFlaskBold> */}
          </div>
        </div>
      </div>
    </>
  );
}
