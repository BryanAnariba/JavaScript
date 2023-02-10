import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export const Help = () => {
  return (
    <div className="help-layout">
        <h2>Work Outs Help</h2>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit inventore modi tempora dolor quaerat ad veniam saepe doloribus illum rerum quisquam ab nihil officiis similique sed possimus suscipit iusto tempore quos magni, dolorem in eaque nisi. Similique sint delectus ea, eum unde, perferendis dicta placeat expedita odio neque reprehenderit cupiditate?
        </p>

        <nav>
            <NavLink to='faq'>Faq</NavLink>
            <NavLink to='contact'>Contact Us</NavLink>
        </nav>

        <div className="container">
            <Outlet />
        </div>
    </div>
  )
}
