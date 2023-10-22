import "../styles/Books.css";
interface Props {
  name: any;
}
export default function Bookscard({ name }: Props) {
  return (
    <>
      <div className="books-cards">
        <div className="cards-heading">Class</div>
        <div className="card-classes">
          <h2 className="cards-class">{name}</h2>
        </div>
      </div>
    </>
  );
}
