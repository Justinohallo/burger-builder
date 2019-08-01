import React from 'react'
import PropTypes from 'prop-types'
import 

const BuildControl = props => {
    return (
        <div>
            <div> {props.label}</div>
            <button>Less</button>
            <button>More</button>
        </div>
    )
}

BuildControl.propTypes = {

}

export default BuildControl
