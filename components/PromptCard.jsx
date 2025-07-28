"use client";

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
  const { data: session } = useSession();
  const pathname = usePathname();
  const router = useRouter();

  const [copied, setCopied] = useState("");
  const handleCopy = () => {
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(() => setCopied(""), 3000);
  };
  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
          <Image
            src={post.creator.image}
            alt="user_image"
            width={40}
            height={40}
            className="rounded-full object-contain"
          />
          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-900 dark:text-gray-200">
              {post.creator.username}
            </h3>
          </div>
        </div>

        <div className="copy_btn" onClick={handleCopy}>
          <Image
            src={
              copied === post.prompt
                ? "/assets/icons/tick.svg"
                : "/assets/icons/copy.svg"
            }
            alt="copy image"
            width={12}
            height={12}
          />
        </div>
      </div>

      <p className="my-4 font-satoshi text-sm text-gray-700 dark:text-gray-400">
        {post.prompt}
      </p>
      {/* <p
        className="font-inter text-sm blue_gradient cursor-pointer dark:text-blue-400"
        onClick={() => handleTagClick && handleTagClick(post.tag)}
      >
        #{post.tag}
      </p> */}
      <div className="flex flex-wrap gap-2 mt-2">
        {/* {console.log("TAG VALUE TYPE:", typeof post.tag, post.tag)} */}
        
        {post.tag.split(",").map((tag, index) => (
          <span
            key={index}
            className="font-inter text-sm blue_gradient cursor-pointer dark:text-blue-400"
            onClick={() => handleTagClick && handleTagClick(tag.trim())}
          >
            #{tag.trim()}
          </span>
        ))}
      </div>
      {session?.user.id === post.creator._id && pathname === "/profile" && (
        <div className="mt-5 flex-center gap-4 border-t border-gray-100 pt-3">
          <p
            className="font-inter text-sm edit_button cursor-pointer"
            onClick={handleEdit}
          >
            Edit
          </p>
          <p
            className="font-inter text-sm delete_button cursor-pointer"
            onClick={handleDelete}
          >
            Delete
          </p>
        </div>
      )}
    </div>
  );
};

export default PromptCard;
