import React from 'react';
import { Outlet } from 'react-router-dom';

export const CareersLayout = () => {
  return (
    <div className="careers-layout">
        <h2>Careers</h2>
        <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil nam quod temporibus necessitatibus ut, officia laboriosam nemo tenetur, quibusdam illum, labore animi.
        </p>

        <Outlet />
    </div>
  )
}
