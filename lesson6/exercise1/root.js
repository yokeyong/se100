const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);
root.render(<p>This is inside root.js</p>);
root.render(<>
    <p>Welcome Messages</p>
    <ul>
      <li>Welcome Tom from Singapore</li>
      <li>Welcome Jerry from Malaysia</li>
      <li>Welcome Sarah from Indonesia</li>
    </ul>
    </>);