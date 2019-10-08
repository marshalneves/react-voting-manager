import React from 'react';
import { connect } from "react-redux";

import { Link } from 'react-router-dom';

const HomePage = ({ candidates }) => {
    return (
        <>
            {JSON.stringify(candidates)}
            <h1>Welcome to Robot Voting</h1>
            <Link to="/vote">Click to Vote!</Link>
        </>
    );
}

const mapStateToProps = state => ({
    candidates: state.reducer.candidates,
});

export default connect(
    mapStateToProps,
    null
)(HomePage);