export function RandomQuote(props) {
  return (
    <div className="RandomQuote">
      <div className="RandomQuote__quote">{props.quote}</div>
      <div className="RandomQuote__author">{props.author}</div>
    </div>
  );
}
