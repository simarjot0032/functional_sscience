// component for each books
import "../styles/Classtenbooks.css";
interface Props {
  linkitem: any;
  numberofchapter: number;
  chaptername: string;
}
export default function Indiviualbook({
  linkitem,
  numberofchapter,
  chaptername,
}: Props) {
  return (
    <>
      <hr className="bookshr" />
      <div className="bookslist">
        <div className="indiviualbook">
          <div className="leftsidelist">
            <div className="contentleftside">{numberofchapter}</div>
          </div>
          <div className="rightsidelist">
            <div className="upperright">{chaptername}</div>
            <div className="lowerright">
              <a href={linkitem} className="linktobook" target="_blank">
                <button className="btnbook">View Online</button>
              </a>
              <a href={linkitem} className="linktobook" download={linkitem}>
                <button className="btnbook">Download</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
