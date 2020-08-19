const javascript = () => {
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
                    p{
                        text-align:center;
                    }
                `}
            </style>
            <nav className="navigation">
                <a href="/">Home</a>
                <a href="/html">HTML</a>
                <a href="/css">CSS</a>
                <a href="/javascript">JavaScript</a>
            </nav>
            <h1>JavaScript</h1>
            <p>JavaScript is a scripting language which is used to add behaviour to a webpage.</p>
        </div>
    )
}
export default javascript