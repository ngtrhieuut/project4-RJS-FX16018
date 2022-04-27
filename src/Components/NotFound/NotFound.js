import style from './NotFound.module.css'
import { Link } from 'react-router-dom';

function NotFound() {

    return (
        <div>
            <p className={style.zoomarea}><b>CSS</b> Page not found </p>
            <section className={style.errorcontainer}>
                <span className={style.four}>
                    <span className={style.screenreadertext}>4</span>
                </span>
                <span className={style.zero}>
                    <span className={style.screenreadertext}>0</span>
                </span>
                <span className={style.four}>
                    <span className={style.screenreadertext}>4</span>
                </span>
            </section>
            <div className={style.linkcontainer}>
                <Link to="/" className={style.morelink}>Return home page</Link>
            </div>
        </div>
    )
}

export default NotFound;