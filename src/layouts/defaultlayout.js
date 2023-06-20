import Top from "../components/top";
import Content from "../components/content";
import Footer from "../components/footer";
import React, { Fragment } from "react";
import "../styles/defaultlayout.css";
import { Container } from "react-bootstrap";

export default function DefaultLayout({ className = "container fluid", children }) {
    return (
        <>
            <Container fluid>
                <Top />
                <Content />
                <div className={className}>{children}</div>
                <Footer />
            </Container>
        </>
    )
}