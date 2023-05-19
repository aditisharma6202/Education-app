import React from 'react';
import'./popup.css';
function Popup({popup, setOpen}) {
    return (  <div className='popup'>
<div className='card'>
    <div className='card-body'>
        <div className='card-title'>
            {popup}
        </div>
    </div>
</div>
    </div>);
}

export default Popup;