
function Header(props) {
    const {show1, minimize, maximize, unmaximize, close, showSetting} = props;
    return <>
        <header className="header">
            <button className="" id="btn" onClick={show1}>Notification</button>
            <button className="minimizeBtn" onClick={minimize}>minimize</button>
            <button className="maximizeBtn" onClick={ maximize}>maximize</button>
            <button className="unmaximizeBtn" onClick={unmaximize}>unmaximize</button>
            <button className="" id="close" onClick={close}>Close</button>
            <button className="settingBtn" onClick={showSetting}>setting</button>
        </header>
    </>
}