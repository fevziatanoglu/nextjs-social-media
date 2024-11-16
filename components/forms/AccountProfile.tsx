"use client";

import { FormEvent, useEffect, useRef, useState } from "react";

interface Props {
  user: {
    id: string;
    objectId: string;
    username: string;
    name: string;
    bio: string;
    image: string;
  };
  btnTitle: string;
}

export default function AccountProfile({ user, btnTitle }: Props) {
  const [imgUrl, setImgUrl] = useState<string | null>(user.image);
  const imgUrlRef = useRef<HTMLInputElement>(null);

  function handleImgChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();

      // When the file is loaded, set the image URL to its data URL
      reader.onload = () => {
        setImgUrl(reader.result as string);
      };

      reader.readAsDataURL(file); // Read the file as a data URL
    } else {
      setImgUrl(null); // Clear the preview if no file is selected
    }
  }

  function deleteSelectedImg() {
    setImgUrl(null);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // const data = new FormData(event.currentTarget);
    const data = new FormData(event.currentTarget);

    console.log(Object.fromEntries(data.entries()), imgUrl, data.get("image"));
  }

  return (
    <div>
      Account Settings
      <form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md space-y-4 text-black"
      >
        {/* Profile photo input*/}
        <div className="flex flex-row gap-5 items-center ">
          <img
            className="h-20 w-20 rounded-full"
            src={imgUrl || "/profile.svg"}
            alt="profile-photo"
          ></img>
          <label
            htmlFor="image"
            className="text-blue-500 underline hover:cursor-pointer"
          >
            Choose a profile picture
          </label>
          {imgUrl && (
            <button
              type="button"
              className="bg-red-500 px-2 rounded-full text-white"
              onClick={deleteSelectedImg}
            >
              X
            </button>
          )}

          <input
            id="image"
            name="image"
            type="file"
            defaultValue={user.image}
            onChange={(e) => {
              handleImgChange(e);
            }}
            className="hidden"
          />
        </div>

        {/* Name input */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Name:
          </label>
          <input
            id="name"
            name="name"
            type="text"
            defaultValue={user.name}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Username input */}
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Username:
          </label>
          <input
            id="username"
            name="username"
            type="text"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Bio input */}
        <div>
          <label
            htmlFor="bio"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Bio:
          </label>
          <textarea
            id="bio"
            name="bio"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className="w-full px-4 py-2 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
