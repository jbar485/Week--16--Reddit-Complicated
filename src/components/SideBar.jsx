import React from "react"

function SideBar() {
    let search = {
        width: '300px',
        height: '20px',
        border: '1px solid grey',
        padding: '6px',
        paddingRight: '25px',
        paddingLeft: '9px',
        verticalAlign: 'middle',
        fontSize: "13px",
        fontFamily: "verdana",
    }
    let signIn = {
        height: '77.27px',
        width: '334px',
        border: '1px solid grey',
        display: 'flex',
        fontSize: '11px',
        fontFamily: "verdana",
        marginTop: '12px',
        
    }

    let formOptions = {
        width: '150px',
        height: '27px',
        border: '1px solid #999',
        paddingLeft: '6px',
        margin: '5px 0px 0px 5px',
    }
let sideBar = {
    float: 'right',
    margin: '5px'
}

let loginButton = {
    float: 'right',
    marginTop: '10px',
    marginRight: '4px',
}

let newLink = {
    display: 'block',
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color: '#369',
    font: 'verdana',
}

let newLinkLove = {
    display: 'block',
    textAlign: 'center',
    position: 'relative',
    border: '1px solid #c4dbf1',
    background: '#ffffff none repeat-x scroll center left',
    backgroundImage: 'url(sprite-reddit.e5NqNKsOkdA.png)',
    backgroundPosition: '0px -278px',
    backgroundRepeat: 'repeat',
    fontSize: '150%',
    fontWeight: 'bold',
    letterSpacing: '-1px',
    lineHeight: '29px',
    height: '29px',
    
}

let nub = {
    position: 'absolute',
    top: '-1px',
    right: '-1px',
    height: '31px',
    width: '24px',
    background: '#ffffff none no-repeat scroll center left',
    backgroundImage: 'url(sprite-reddit.e5NqNKsOkdA.png)',
    backgroundPosition: '-61px -1369px',
    backgroundRepeat: 'no-repeat',
}

    return (
        <div style={sideBar}>
            <div className='search'>
                <form>
                <input style={search}
                type='text'
                id='title'
                placeholder='search'/>

                </form>
            </div>
            <div class="signIn" style={signIn}>
            <form>
            <input style={formOptions}
                type='text'
                id='title'
                placeholder='username'/>
            <input style={formOptions}
                type='text'
                id='title'
                placeholder='password'/>
                <button style={loginButton} type='submit'>login</button>
            </form>
            </div>
            <div style={newLinkLove}>
                <a href="/newpost" style={newLink}>Submit a new Text Post</a>
                <div style={nub}>></div>
            </div>
        </div>
    );
}

export default SideBar;