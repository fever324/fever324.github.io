class Name extends React.Component {
  render() {
    return (
      <div>
        <p className="building">Building... </p>
        <p className="jianshezhong">建设中...</p>
        <p className="content">Hongfei Li, MPS @ Cornell Info Science</p>
        <p className="content">hl963@cornell.edu</p>
      </div>
    )
  }
}
ReactDOM.render(
  <Name/>,
  document.getElementById('container')
);
