export default function Display({display, topDisplay}) {
  return (
    <div className="border border-2 border-dark p-3 rounded">
      <p className="fs-1 text-end" id="topDisplay">{topDisplay}</p>
      <hr />
      <p className="fs-4 text-end" id="display">{display}</p>
      <hr /> 
    </div>
  );
}