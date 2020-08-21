import React from 'react';

function Header() {
    return (
        <header id="home">
            <div className="nav">
                <div>
                    <h2 className="nav-brand">
                        Font Favorite
                    </h2>
                </div>
                <nav>
                    <ul className="nav-links">
                        <li><a href="/">Catalog</a></li>
                        <li><a href="/">Featured</a></li>
                        <li><a href="/">Articles</a></li>
                        <li><a href="/">About</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
export default Header;