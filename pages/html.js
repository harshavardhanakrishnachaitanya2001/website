const html=()=>{
    return (
        <div>
            <style>
                {`
                    h1{
                        text-align:center;
                    }
                    nav{
                        text-align:center;
                        background:lightblue;
                    }
                    nav a {
                        margin:100px;
                    }
                `}
            </style>
            <nav className="navigation">
                <a href="/">Home</a>
                <a href="/html">HTML</a>
                <a href="/css">CSS</a>
                <a href="/javascript">JavaScript</a>
            </nav>
            <h1>HTML</h1>
        </div>
    )
}
export default html