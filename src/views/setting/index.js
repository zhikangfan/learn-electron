const view = window.settingView;
function Header(props) {
    const {show1,close} = props;
    return <>
        <header className="header">
            <button className="" id="btn" onClick={show1}>Notification</button>
            <button className="" id="close" onClick={close}>Close</button>
        </header>
    </>
}
function App() {
    return <>
        <Header show1={view.show1} close={view.close}/>
        <main>
            <h1>setting</h1>
            <h2 id="h2">{view.chrome()}</h2>
        </main>
    </>
}

const root = ReactDOM.createRoot(document.getElementById('app'))
root.render(<App/>)