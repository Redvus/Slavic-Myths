import containerBack from './images/containerBack.png'
import classes from "./app.module.scss";

function App() {
    return (
        <div className={classes.app}>
            <div className={classes.app__container}>
                <object className={classes.app__container_back}>
                    <img src={containerBack} alt="Фон контейнера" />
                </object>
            </div>
        </div>
    );
}

export default App;
