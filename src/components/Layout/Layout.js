import TopMenu from "../TopMenu";
import OgTags from "../OgTags";

const Layout = ({og_tags,children}) => {
    return <div className="container-fluid">
        <OgTags
            title={og_tags && og_tags.title}
            description={og_tags && og_tags.description}
            url={og_tags && og_tags.url}
            type={og_tags && og_tags.type}
            image={og_tags && og_tags.image}
        />
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
