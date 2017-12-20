class Name extends React.Component {
  render() {
    return (
      <div>
        <p className="building">Building... </p>
        <p className="jianshezhong">建设中...</p>
        <p className="content">Hongfei Li, Software Engineer @ Facebook</p>
        <p className="content">fever324@gmail.com</p>
      </div>
    )
  }
}
ReactDOM.render(
  <Name/>,
  document.getElementById('container')
);
