import React from "react"

function Header() {

    let headerImage = {
        marginBottom: '3px',
        height: '40px',
        width: '120px',
        paddingTop: '4px',
    }

    let header = {
        borderBottom: '1px solid #5f99cf',
        position: 'relative',
        backgroundColor: '#cee3f8',
        zIndex: '99',
    }

    return (
        <div style={header}>
            <a href="/"><img style={headerImage} src="https://www.cbronline.com/wp-content/uploads/2016/05/what-is-reddit-770x257.png" alt="reddit"/></a>
        </div>
    );
}

export default Header;