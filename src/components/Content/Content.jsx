import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import TodoItemsContainer from "./TodoItems/TodoItemContainer";
import InputBarContainer from "./InputBar/InputBarContainer";
import AuthContainer from "./Auth/AuthContainer";

const Content = (props) => {
    return (
        <div>
            <CssBaseline/>
            <Container maxWidth="md" style={{
                background: "#f4f4f4",
                marginTop: "35px",
                marginBottom: "35px",
                borderRadius: "4px",
                minHeight: "500px"
            }}>
                {!props.isAuth
                    ? <AuthContainer/>
                    : <div><InputBarContainer/><TodoItemsContainer /></div>
                }
            </Container>
        </div>
    );
};

export default Content;