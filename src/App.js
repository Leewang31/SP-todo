import Header from "./component/headerComponents/Header";
import Side from "./component/sideComponents/Side";
import Body from "./component/bodyComponents/Body";

function App() {
    return (<div className='background'>
            <div className='App'>
                <Header/>
                <div className='MainArea'>
                    <Side/>
                    <Body/>
                </div>
            </div>
        </div>
    );
}

export default App;
