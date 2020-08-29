import React from 'react';
import fakeData from '../../fakeData/fakeData';
import Course from '../../components/Course/Course';
import { useState } from 'react';
import Cart from '../Cart/Cart';


const CourseInfo = () => {
    const courses = [...fakeData];
    const [cart, setCart] = useState([]);

    const handleAddCart = (course) => {
        const newCart = [...cart, course];
        setCart(newCart);
    }

    return (
        <div className="row">
            <div className="col-md-8">
            {courses.map(course => <Course course={course} key={course.id} handleAddCart={handleAddCart}></Course>)}
        </div>
        <div className="col-md-4">
            <Cart cart={cart}></Cart>
        </div>
        </div>
    );
};

export default CourseInfo;