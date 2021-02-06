import headerStyle from '../styles/Header.module.css';

const Header = () => {
    return (
        <div>
            <h1 className={headerStyle.title}><span>WebDev</span> News</h1> 
            <p className={headerStyle.description}>keep up tp date with latest web dev news</p>           
        </div>
    )
}

export default Header
