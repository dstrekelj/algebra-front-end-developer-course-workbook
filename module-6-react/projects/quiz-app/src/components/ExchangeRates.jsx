export function ExchangeRates(props) {
  const components = props.items.map((item) => (
    <li key={item.currency}>
      <div>{item.currency}</div>
      <div>{item.rate}</div>
      <div>{item.name}</div>
    </li>
  ));

  return <ul>{components}</ul>;
}
