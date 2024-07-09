function MyColor({ item }) {
  return (
    <li>
      <h2>{item.name}</h2>
    </li>
  );
}

export function Color({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <MyColor key={item.name} item={item} />
      ))}
    </ul>
  );
}
