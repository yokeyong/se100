// root.js

function WelcomeMessagesTitle() {
    return <p>Welcome Messages</p>
}

function WelcomeMessageReusable(props) {
return <li>Welcome {props.name} from {props.country}</li>
}

function WelcomeMessagesList() {
return <ul>
    <WelcomeMessageReusable name="Tom" country="Singapore" />
    <WelcomeMessageReusable name="Jerry" country="Malaysia" />
    <WelcomeMessageReusable name="Sarah" country="Indonesia" />
    
</ul>
}

function WelcomeMessagesSection() {
return <div>
    <WelcomeMessagesTitle />
    <WelcomeMessagesList />
</div>
}

function App() {
return <div>
    <WelcomeMessagesSection />
</div>
}

const domContainer = document.getElementById('root');
const root = ReactDOM.createRoot(domContainer);
root.render(<App />)