import React, { useEffect, useState } from 'react'
import { Link, useLocation, useHistory } from "react-router-dom";
import "./Header.css"

const Header = () => {
    const [activeTab, SetActiveTab] = useState("Home");
    const location = useLocation();
    const [search, setSearch] = useState("");

    const history = useHistory();

    useEffect(() => {

        if (location.pathname === "/") {
            SetActiveTab("Home");
        } else if (location.pathname === "/add") {
            SetActiveTab("AddContact");
        }
        else if (location.pathname === "/about") {
            SetActiveTab("About");
        }
    }, [location]);

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`/search?name=${search}`);
        setSearch("");
    };

    return (
        <div className="header">
            <p className="logo"> Contact App</p>
            <div className="header-right">
                <form onSubmit={handleSubmit} style={{ display: "inline" }}>
                    <input
                        type="text"
                        className="inputField"
                        placeHolder="Search Name ..."
                        onChange={(e) => setSearch(e.target.value)}
                        value={search}
                    />
                </form>
                <Link to="/">
                    <p
                        className={`${activeTab === "Home" ? "active" : ""}`}
                        onClick={() => SetActiveTab("Home")}
                    >
                        Home
                    </p>
                </Link>
                <Link to="/add">
                    <p
                        className={`${activeTab === "AddContact" ? "active" : ""}`}
                        onClick={() => SetActiveTab("AddContact")}
                    >
                        AddContact
                    </p>
                </Link>
                <Link to="/about">
                    <p
                        className={`${activeTab === "About" ? "active" : ""}`}
                        onClick={() => SetActiveTab("About")}
                    >
                        About
                    </p>
                </Link>
            </div>
        </div>
    )
}

export default Header
