import React, { useState } from "react";
import "./PostListing.css";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

function PostListing2() {

    const { register, handleSubmit, formState} = useForm();
    const {errors, isSubmitting, isSubmitSuccessful} = formState;


    const onSubmit = async (data) => {
        await new Promise((resolve) => setTimeout(resolve, 4000))
        console.log(data);
        
    }
    
  return (
    <>
      <Form onSubmit={handleSubmit(onSubmit)} className="list">
        <header>
          <h1>Post a new listing</h1>
        </header>
        <Form.Group>
          <Form.Label for="title">Title of listing*</Form.Label>
          <Form.Control
            className="border border-dark"
            type="text"
            name="title"
            {...register("title", {
              required: "Title is required",
              minLength: {
                value: 4,
                message: "Title must be at least 4 characters long",
              },
            })}
          />
          {errors.title && (
            <Form.Text className="text-danger">
              {errors.title.message}
            </Form.Text>
          )}
        </Form.Group>
        <Form.Group>
          <Form.Label for="description">Description*</Form.Label>
          <Form.Control
            className="border border-dark"
            type="text"
            name="description"
            {...register("description", {
              required: "Description is required",
              minLength: {
                value: 4,
                message: "Description must be at least 4 characters long",
              },
            })}
          />
          {errors.description && (
            <Form.Text className="text-danger">
              {errors.description.message}
            </Form.Text>
          )}
        </Form.Group>
        <Form.Group>
          <Form.Label for="img">Import image*:</Form.Label>
          <Form.Control
            className="border border-dark"
            type="file"
            id="img"
            name="img"
            accept="image/*"
            {...register("img")}
          />
          {errors.img && (
            <Form.Text className="text-danger">{errors.img.message}</Form.Text>
          )}
        </Form.Group>
        <Form.Group>
          <Form.Label for="price">Selling Price $*:</Form.Label>
          <Form.Control
            className="border border-dark"
            type="text"
            id="price"
            name="listing_price"
            {...register("listing_price", {
              required: "Amount is required",
              validate: (value) => {
                  console.log(typeof value);

                if (typeof(value) !== "number") {
                  console.log(typeof(value));
                  return "Enter a dollar amount";
                }
                return true;
              },
            })}
          />
          {errors.listing_price && (
            <Form.Text className="text-danger">
              {errors.listing_price.message}
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group>
          <Form.Label for="category">Add a tag to your item*</Form.Label>
          <Form.Select
            className="border border-dark"
            name="category"
            {...register("category", {
              required: "Tag is required",
            })}
          >
            <option value={""}></option>
            <option value="art">Art</option>
            <option value="music">Music</option>
            <option value="furniture">Furniture</option>
            <option value="items">Textbook</option>
            <option value="clothing">Clothing</option>
          </Form.Select>
          {errors.category && (
            <Form.Text className="text-danger">
              {errors.category.message}
            </Form.Text>
          )}
        </Form.Group>
        <div>
          <Button disabled={isSubmitting} type="submit" variant="success">
            {isSubmitting ? "Loading.." : "Post"}
          </Button>
          {errors.root && (
            <Form.Text className="text-danger">{errors.root.message}</Form.Text>
          )}
        </div>
      </Form>
    </>
  );
}

export default PostListing2;
