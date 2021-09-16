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
        <div className="body">
            {children}
        </div>
        {/*footer*/}
        <div className="footer">

        </div>
        {/*<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>*/}
        {/*<script noModule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>*/}
    </div>
}

export default Layout;
