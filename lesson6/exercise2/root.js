const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);

function paragraph() {
    return <p>Welcome Messages</p>
}

function list() {
    return <ul>
        <li>Welcome Tom from Singapore</li>
        <li>Welcome Jerry from Malaysia</li>
        <li>Welcome Sarah from Indonesia</li>
    </ul>
}

function App(){
    return <div>
        {paragraph()}
        {list()}
    </div>
}

root.render(<App />);