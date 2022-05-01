import React from 'react'

const ContentPanel = ({open}) => {

    return (
        <div className={`contentWrapper ${open ? 'open' : ''}`}>
            <h2>My world today</h2>
            <div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Lacus luctus accumsan tortor posuere ac ut consequat semper.
                    Egestas fringilla phasellus faucibus scelerisque. Scelerisque
                    fermentum dui faucibus in ornare quam viverra orci sagittis.
                    Lectus sit amet est placerat. Massa vitae tortor condimentum
                    lacinia quis vel eros donec ac.

                    <a href="#" target="_blank">View all days</a> {" "}

                    quam viverra
                    orci sagittis eu volutpat odio. Fermentum iaculis eu non diam
                    phasellus vestibulum lorem. Quis lectus nulla at volutpat diam
                    ut venenatis tellus. Faucibus turpis in eu mi. Cursus eget nunc
                    scelerisque viverra mauris in aliquam sem fringilla. Duis
                    ultricies lacus sed turpis tincidunt id.
                </p>
                <p>
                    Vitae turpis massa sed elementum tempus egestas sed sed. Lacus
                    luctus accumsan tortor posuere ac ut consequat. Nisl suscipit
                    adipiscing bibendum est ultricies. Nisi porta lorem mollis
                    aliquam ut porttitor. Tincidunt dui ut ornare lectus sit.
                    Ultricies tristique nulla aliquet enim tortor at. Fames ac
                    turpis egestas maecenas. Sagittis nisl rhoncus mattis rhoncus
                    urna neque. Risus viverra adipiscing at in tellus integer
                    feugiat. Habitant morbi tristique senectus et netus et malesuada
                    fames ac.
                </p>
            </div>
        </div>
    )
}

export default ContentPanel;