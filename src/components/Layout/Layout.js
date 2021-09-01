import TopMenu from "../TopMenu";

const Layout = ({children}) => {
    return <div className="container-fluid">
        {/*menu*/}
        <div className="row">
            <TopMenu />
        </div>
        {/*body*/}
        <div className="row">
            {children}
        </div>
        {/*footer*/}
        <div className="row">

        </div>
    </div>
}

export default Layout;
