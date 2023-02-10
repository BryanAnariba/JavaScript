import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { data } from '../../data/info';

export const Careers = () => {
    const [ careers, setCareers ] = useState([]);
    useEffect(() => {
        setCareers( data.careers );
    }, []);
  return (
    <div className="careers">
        {
            careers.map( career => (
                // <Link to={`/careers/${ career.id }`} key={ career.id }>
                <Link to={ career.id.toString() } key={ career.id }>
                    <p>
                        { career.title }
                    </p>
                    <p>
                        { career.location }
                    </p>
                </Link>
            ))
        }
    </div>
  )
}
