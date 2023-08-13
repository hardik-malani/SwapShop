import React from "react";
import bg from "/green-bg.jpg";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "../Actions/Post";

export default function Demand() {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.post);
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [quantity, setQuantity] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [image, setImage] = React.useState(null);
  const [latitude, setLatitude] = React.useState("");
  const [longitude, setLongitude] = React.useState("");
  const [tags, setTags] = React.useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    if (image === null) {
      alert("Please upload an image");
      return;
    }
    const post = {
      title,
      description,
      quantity,
      address,
      image,
      latitude,
      longitude,
      tags,
      type: "request",
    };
    console.log(post);
    dispatch(createPost(post));
  };
  return (
    <div className="relative py-4" style={{ backgroundImage: `url(${bg})` }}>
      <h1 className="text-center text-4xl font-semibold pt-10 underline text-white">
        Enter Requirement info
      </h1>
      <form className="max-w-xl m-auto py-10 mt-10 px-12 border">
        <label className="text-gray-600 font-medium">Item Name</label>
        <input
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-500"
          name="title"
          type="text"
          placeholder="Newspaper,Wood,Clothes,Food etc."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label className="text-gray-600 font-medium block mt-4">
          Description
        </label>
        <textarea
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-500"
          name="description"
          type="text"
          placeholder="Write a Product Description here..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <label className="text-gray-600 font-medium block mt-4">
          Quantity
        </label>
        <input
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-500"
          name="Quantity"
          type="number"
          placeholder="How many items can you give away?"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />

        <label className="text-gray-600 font-medium block mt-4">
          Tags
        </label>
        <input
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-500"
          name="tags"
          type="text"
          placeholder="Enter tags separated by commas"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />

        <label className="text-gray-600 font-medium block mt-4">
          Address
        </label>
        <input
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-500"
          name="address"
          type="text"
          placeholder="Enter your address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <label className="text-gray-600 font-medium block mt-4">
          Longitude
        </label>
        <input
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-500"
          name="longitude"
          type="number"
          placeholder="Enter your longitude"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
        />

        <label className="text-gray-600 font-medium block mt-4">
          Latitude
        </label>
        <input
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-500"
          name="latitude"
          type="number"
          placeholder="Enter your latitude"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
        />

        <label className="text-gray-600 font-medium block mt-4">
          Images
        </label>
        {/* Multiple File upload */}

        <input
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-500"
          name="image"
          type="file"
          placeholder="Upload an image"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <button
          className="mt-4 w-full bg-green-400 hover:bg-green-600 text-green-100 border py-3 px-6 font-semibold text-md rounded"
          type="submit"
          onClick={onSubmit}
        >
          {loading ? "Loading.." : "Demand"}
        </button>
      </form>
    </div>
  );
}
