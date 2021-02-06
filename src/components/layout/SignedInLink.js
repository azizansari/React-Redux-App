import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux'
import {signOut} from '../../store/actions/authAction'
const SignedInLink = (props) => {
    return (
        <div>
            <ul className="right">
                <li><NavLink to ='/create' >New Project</NavLink></li>
                <li><a href="/signin" onClick={props.signOut} >Log Out</a></li>
    <li><NavLink to ='/' className="btn btn-floating dark-grey z-depth-1" >{props.profile.initials}</NavLink></li>
            </ul>
        </div>
    );
}

const mapStateToDispatch = (dispatch) =>{
    return{
        signOut : () => dispatch(signOut())
    }
}

export default connect(null, mapStateToDispatch)(SignedInLink);
