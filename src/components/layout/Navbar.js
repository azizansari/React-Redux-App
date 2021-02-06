import React from 'react';
import {Link} from 'react-router-dom'
import SignedInLinks from './SignedInLink'
import SignedOutLinks from './SignedOutlinks'
import { connect } from 'react-redux'


const Navbar = (props) => {
console.log(props)
const {auth, profile} = props
const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />


// console.log(auth)
    return (
<nav className="nav-wrapper grey darken-3">
    <div className="container">
        <Link to="/" className="brand-logo" >Create...!</Link>
        {auth.isLoaded && links}
    </div>

</nav>
    );
}

const mapStateToProps = (state) => {
    // console.log(state)
    return {
        auth : state.firebase.auth,
        profile : state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar);
