import siteIcon from '../../assets/moon-orbit.svg';
export default function Header() {
    return (
        <header>
            <img src={siteIcon}></img>
            <button>Sign up</button>
            <button>Login</button>
            <div className="Desktop1" style={{ width: 1440, height: 1726, position: 'relative', background: 'white' }}>
                <div className="BuySell" style={{ left: 203, top: 59, position: 'absolute', color: 'black', fontSize: 36, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Buy & Sell</div>
                <div className="Categories" style={{ left: 417, top: 59, position: 'absolute', color: 'black', fontSize: 36, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Categories</div>
                <div className="Reviews" style={{ left: 627, top: 59, position: 'absolute', color: 'black', fontSize: 36, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Reviews</div>
                <div className="More" style={{ left: 792, top: 50, position: 'absolute', color: 'black', fontSize: 36, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>More</div>
                <div className="Rectangle1" style={{ width: 154, height: 62, left: 1077, top: 41, position: 'absolute', background: '#00F0FF', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                    <div className="Login" style={{ color: 'black', fontSize: 36, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Sign Up</div>
                </div>
                <div className="Rectangle2" style={{ paddingLeft: 29, paddingRight: 29, paddingTop: 9, paddingBottom: 9, left: 1277, top: 41, position: 'absolute', background: '#D9D9D9', justifyContent: 'center', alignItems: 'center', gap: 10, display: 'inline-flex' }}>
                    <div className="Login" style={{ color: 'black', fontSize: 36, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word' }}>Login</div>
                </div>
                <div className="Frame1" style={{ width: 1460, height: 428, padding: 10, left: -10, top: 1308, position: 'absolute', justifyContent: 'center', alignItems: 'center', display: 'inline-flex' }}>
                    <div className="Rectangle3" style={{ width: 1440, height: 408, background: '#D9D9D9' }} />
                </div>
            </div>
        </header>
    );




}