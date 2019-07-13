import React from "react";

let Reservations = () => {
    return (
        <div className="island-item">
            <h3 className="reservation-title reservation-header">
               <span className="icon"> <svg id="24x24_reservation" height="24" viewBox="0 0 24 24" width="24"><path d="M18 21H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3 1 1 0 0 1 2 0h8a1 1 0 0 1 2 0 3 3 0 0 1 3 3v12a3 3 0 0 1-3 3zm1-13H5v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V8zm-6 5h4v4h-4v-4z"></path></svg></span>
               <a>Make a Reservation</a>
            </h3>
            <div className="make-reservation-form-container">
                <form className="reservation-availability-search-form">
                    <ul className="inline-layout reservation-fields">
                        <li className="date-picker"></li>

                    </ul>
                </form>
            </div>
        </div>
    )
}

export default Reservations;

//ICONS

{/* <span>
<svg id="18x18_clock" height="18" viewBox="0 0 18 18" width="18"><path d="M9 17A8 8 0 1 1 9 1a8 8 0 0 1 0 16zM9 2C5.14 2 2 5.14 2 9s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm3.223 10.098a.998.998 0 0 1-.588-.192L8 9.256V5a1 1 0 0 1 2 0v3.24l2.812 2.05a1 1 0 0 1-.59 1.808z"></path></svg>
</span>
<span>
<svg id="18x18_friends" height="18" viewBox="0 0 18 18" width="18"><g><path d="M7.904 9.43l-2.098 4.697a.9.9 0 0 1-1.612 0L2.096 9.43a.902.902 0 0 1 .806-1.305h4.196c.67 0 1.105.705.806 1.305zM5 7.375a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"></path><path d="M15.904 9.43l-2.098 4.697a.89.89 0 0 1-.806.498.89.89 0 0 1-.806-.498L10.096 9.43a.902.902 0 0 1 .806-1.305h4.195c.67 0 1.106.705.807 1.305zM13 7.375a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" opacity=".502"></path></g></svg>
</span>  */}