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
        className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
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
            className="form_textarea"
          />
        </label>
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700 dark:text-gray-200">
            Tags <span className="font-normal">(press Enter to add)</span>
          </span>

          <input
            value={post.currentTag || ""}
            onChange={(e) => setPost({ ...post, currentTag: e.target.value })}
            onKeyDown={(e) => {
              if (e.key === "Enter" && post.currentTag?.trim()) {
                e.preventDefault();
                const tagArray = post.tag.length > 0
                  ? post.tag.split(",").map((t) => t.trim())
                  : [];
                const newTag = post.currentTag.trim();

                if (!tagArray.includes(newTag)) {
                  tagArray.push(newTag);
                  setPost({
                    ...post,
                    tag: tagArray.join(","),
                    currentTag: "",
                  });
                }
              }
            }}
            placeholder="#tag"
            className="form_input"
          />
          <div className="mt-2 flex flex-wrap gap-2">
            {((typeof post.tag === "string" && post.tag.length !=0) ? post.tag.split(",") : []).map(
              (t, idx) => (
                <span
                  key={idx}
                  className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full flex items-center gap-2 dark:bg-blue-900 dark:text-blue-200"
                >
                  #{t.trim()}
                  <button
                    type="button"
                    onClick={() => {
                      const newTags =
                        typeof post.tag === "string"
                          ? post.tag
                              .split(",")
                              .filter((_, i) => i !== idx)
                              .join(",")
                          : "";
                      setPost({ ...post, tag: newTags });
                    }}
                    className="text-red-500 font-bold ml-1"
                  >
                    ×
                  </button>
                </span>
              )
            )}
          </div>
        </label>

        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm dark:text-gray-300">
            Cancel
          </Link>

          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-blue-700 rounded-full text-white"
          >
            {submitting ? `${type}...` : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
