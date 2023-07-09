import React from 'react'
import createMarkup from '../createMarkup'

const JobDesc = ({ desc }) => {

    return (
        <div className="card mb-2" style={{ width: "100%" }}>
            <div className="card-body">
                <h5 className="card-title">Description</h5>
                <p className="card-text" dangerouslySetInnerHTML={createMarkup(desc)}></p>
            </div>
        </div>
    )
}

export default JobDesc