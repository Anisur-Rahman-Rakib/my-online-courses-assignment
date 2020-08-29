import React from 'react';
const Cart = (props) => {
    const course = props.cart;
    const total = course.reduce((total, price) => total + price.CourseFee, 0);
    const totalPrice = Number(total).toFixed(2);
    return (
        <div className="shadow-lg p-3 mb-5 bg-white rounded">
            <h3 className="text-center">Review Cart <small>({course.length} Items)</small></h3>
            <hr />
            {course.map(course =>
                <div>
                    <h6><strong>{course.title}</strong> <br/> With <strong>{course.Trainer}</strong></h6>
                    <h6>Course Fee: <strong>${course.CourseFee}</strong></h6>
                    <hr />
                </div>)}
            <div>
                <h4>Total Cost: <strong>${totalPrice}</strong></h4>
                <button className="btn btn-info">Confirm Now</button>
            </div>
        </div>
    );
};

export default Cart;