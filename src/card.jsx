export default function Card(props) {
  return (
    <div>
      <img src={props.item.imageUrl} />
      <div>
        <p> {props.item.location} </p>
        <a href={props.item.googleMapsUrl}></a>
      </div>
      <h1>{props.item.title}</h1>
      <p> {`${props.item.startDate}-${props.item.endDate}`} </p>
      <p> {props.item.description}</p>
    </div>
  );
}
