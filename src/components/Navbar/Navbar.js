import React from 'react';

const Navbar = ({cars, getInfo}) => {
    // console.log('this is cars from navbar', cars)
    // console.log('func getInfo', getInfo)
    return (
        <div>
            {
                cars.map((item) => (
                    <strong onClick={() => getInfo(item)} style={{margin: "10px", cursor: "pointer"}} key={item.id}>{item.model}</strong>
                ))
            }
        </div>
    );
};

export default Navbar;