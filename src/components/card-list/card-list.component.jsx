import React from 'react';
import { addVoteTo } from "../../redux/actions";
import { connect } from "react-redux";

import { Route } from 'react-router-dom'


import './card-list.styles.css';

const CardList = ({ addVoteTo, candidates }) => {

    return (
        <div className='container'>
            {
                candidates.map(candidate => (
                    <div className='card' key={candidate.id}>
                        <div><img src={`https://robohash.org/${candidate.id}?set=set2&size=180x180`} /></div>
                        <div className='card-name'>{candidate.name}</div>
                        <div className='card-votes'>{candidate.votes}</div>
                        <button
                            className='card-button'
                            onClick={() => {
                                addVoteTo(candidate);
                            }}
                        >
                            Votar
                        </button>
                    </div>
                ))}
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    addVoteTo: candidate => dispatch(addVoteTo(candidate))
});

export default connect(
    null,
    mapDispatchToProps
)(CardList);