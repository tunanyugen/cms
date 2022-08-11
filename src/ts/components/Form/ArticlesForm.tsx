import { Button, FormControl, TextField } from "@mui/material";
import React from "react";
import GlobalState from "../../helpers/globalState";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export interface ArticlesFormProps extends ArticlesFormState {}

export interface ArticlesFormState {
    parentArticleTitle: string;
    title: string;
    content: string;
}

class ArticlesForm extends React.Component<ArticlesFormProps, ArticlesFormState> {
    constructor(props: ArticlesFormProps) {
        super(props);
        this.state = {
            parentArticleTitle: this.props.parentArticleTitle,
            title: this.props.title,
            content: this.props.content,
        };
    }
    render() {
        return (
            <FormControl
                className="form"
                fullWidth
                sx={{ padding: GlobalState.state.theme.spacing(), gap: GlobalState.state.theme.spacing() }}
            >
                <TextField
                    fullWidth
                    size="small"
                    name="parent_article_title"
                    label={GlobalState.translate("parent_article_title")}
                    value={this.state.parentArticleTitle}
                    onChange={(e) => {
                        this.setState({ parentArticleTitle: e.target.value });
                    }}
                />
                <TextField
                    fullWidth
                    size="small"
                    name="title"
                    label={GlobalState.translate("title")}
                    value={this.state.title}
                    onChange={(e) => {
                        this.setState({ title: e.target.value });
                    }}
                />
                <ReactQuill
                    theme="snow"
                    value={this.state.content}
                    onChange={(value) => {
                        this.setState({ content: value });
                    }}
                />
                <Button sx={{ marginLeft: "auto" }}>{GlobalState.translate("submit")}</Button>
            </FormControl>
        );
    }
}

export default ArticlesForm;
