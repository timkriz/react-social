import React from 'react'
import { Formik, Form, Field, ErrorMessage} from "formik"

function CreatePost() {
  return (
    <div className="createPostPage">
        <Formik>
            <Form className="formContainer">
                
                <label>Title: </label>
                <Field id="inputCreatePost" name="title" placeholder="Title"/>

                <label>Post: </label>
                <Field id="inputCreatePost" name="postText" placeholder="Post"/>

                <label>Username: </label>
                <Field id="inputCreatePost" name="username" placeholder="Username"/>

                <button type="submit"></button>
            </Form>
        </Formik>
    </div>
  )
}

export default CreatePost