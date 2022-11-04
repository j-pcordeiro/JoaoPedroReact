import styles from "./App";

const subtitulo = {
    fontStyle: "italico",
    fontSize: "x-large",
    color: "coral"
}

const Banner = (props) => {
    return (
        <header>
            <div className="row mb-4">
                <div className="col-5">
                    <img className={styles.logo} src="./dowload.jpg" alt="logo"/>
                </div>
                <div className="col-7 mt-5" style={subtitulo}>
                    {props.textoCabecalho} 
                </div>
            </div>
        
        </header>
    )
}

export default Banner;