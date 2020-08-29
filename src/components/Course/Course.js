import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const Course = (props) => {
    const { img, title, Trainer, CourseFee } = props.course;
    const handleAddCart = props.handleAddCart;
    return (
        <div className="d-flex m-2 shadow p-3 mb-5 bg-white rounded p-4">
            <div className="d-flex align-items-center">
                <img src={img} alt="" />
            </div>
            <div className="ml-3">
                <h4>{title}</h4>
                <p><small>Training With <strong>{Trainer}</strong></small></p>
                <h5>Course Fee : <strong>${CourseFee}</strong></h5>
                <button className="btn btn-warning" onClick={() => handleAddCart(props.course)}>
                    {/* <FontAwesomeIcon icon={faCartPlus} />  */}
                Enroll Now</button>
            </div>
        </div>
    );
};

export default Course;