export default function FuturisticMeeting() {
  return (
    <div className="cinema-frame meeting-scene">
      <div className="screen-wall">
        <div className="screen-title">Rendimento ações</div>
        <div className="chart-bars">
          <span /><span /><span /><span /><span />
        </div>
        <div className="line-chart" />
        <div className="pie-chart" />
      </div>
      <div className="table-glow" />
      <div className="presenter">
        <span className="head" />
        <span className="body" />
        <span className="arm" />
      </div>
      {['left-a', 'left-b', 'right-a', 'right-b'].map((person) => (
        <div key={person} className={`investor ${person}`}>
          <span />
        </div>
      ))}
      <div className="laptop one" />
      <div className="laptop two" />
      <div className="glass-lines" />
    </div>
  );
}
