export default function ContractVisual({ tone }) {
  return (
    <div className={`contract-visual ${tone}`}>
      <div className="folder" />
      <div className="paper">
        <span />
        <span />
        <span />
        <strong />
      </div>
      <div className="coins">
        <i />
        <i />
        <i />
      </div>
    </div>
  );
}
