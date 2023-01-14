export function NasaImage(props) {
  return (
    <div>
      <img src={props.imageSrc} alt={props.title} />
      <div>{props.title}</div>
      <div>{props.copyright}</div>
    </div>
  );
}
