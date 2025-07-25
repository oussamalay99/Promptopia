import React from "react";
import Link from "next/link";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full maw-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Post</span>
      </h1>
      <p className="desc text-left maw-w-md dark:text-gray-300">
        {type} and share amazing prompts with the world, and let your
        imagination run wild with any AI-powered platform.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism dark:border-gray-700 dark:bg-white/5 dark:shadow-none dark:backdrop-blur-none"
      >
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700 dark:text-gray-200">
            Your AI Prompt
          </span>

          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="Write your prompt here..."
            required
            className="form_textarea dark:text-gray-100"
          />
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700 dark:text-gray-200">
            Tag{" "}
            <span className="font-normal">
              {" "}
              (#product, #webdevelopment, #idea)
            </span>
          </span>

          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            placeholder="#tag"
            required
            className="form_input"
          />
        </label>

        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm dark:text-gray-300">
            Cancel
          </Link>

          <button type="submit" disabled={submitting} className="px-5 py-1.5 text-sm bg-blue-700 rounded-full text-white">
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
