"use client";

const PromptModal = ({ isOpen, onClose, post, aiResponse, loading }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-lg relative max-h-[80vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 dark:hover:text-gray-200"
        >
          ✕
        </button>

        <h2 className="text-lg font-semibold mb-2">Prompt Details</h2>
        <p className="mb-2"><strong>Creator:</strong> {post.creator.username}</p>
        <p className="mb-2"><strong>Prompt:</strong> {post.prompt}</p>
        <p className="mb-2"><strong>Tags:</strong> {post.tag}</p>

        <h3 className="text-md font-semibold mt-4 mb-2">AI Response</h3>
        {loading ? (
          <p>Generating AI response...</p>
        ) : (
          <p className="whitespace-pre-wrap">{aiResponse}</p>
        )}
      </div>
    </div>
  );
};

export default PromptModal;
