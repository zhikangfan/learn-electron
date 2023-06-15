const view = window.mainView;

function App() {
    return <>
        <Header show1={view.show1} minimize={view.minimize} maximize={view.maximize} unmaximize={view.unmaximize} close={view.close} showSetting={view.showSetting}/>
        <main>
            <h1>page</h1>
            <h2 id="h2">{view.chrome()}</h2>

        </main>
    </>
}

const root = ReactDOM.createRoot(document.getElementById('app'))
root.render(<App/>)