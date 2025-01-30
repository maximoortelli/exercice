import { Trash2, Edit, Check, X } from "lucide-react";
import { useState } from "react";
import { useCommentsStore } from "../stores/useCommentsStore";

const CommentCard = ({ comment }) => {
  const { removeComment, updateComment } = useCommentsStore();
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(comment.content);

  const handleSave = () => {
    updateComment(comment.id, editedContent);
    setIsEditing(false);
  };

  return (
    <div className="bg-white rounded-lg px-3 py-3 flex flex-col sm:flex-row items-start sm:items-center gap-4 w-75 sm:w-full">
      {/* Contenido */}
      <div className="flex-1 p-2">
        <div className="flex items-center">
          {/* Imagen de usuario */}
          <img
            src={comment.avatar}
            alt={comment.name}
            className="w-10 h-10 rounded-full mr-1 md:mr-4 bg-[#2196F3]"
          />
          <h3 className="font-semibold text-sm sm:text-md text-gray-900 mr-2 sm:mr-4">{comment.name}</h3>
          <span className="text-[12px] mt-1 font-semibold text-gray-500">{comment.date}</span>

          {/* Botones de acción */}
          <div className="flex gap-2 justify-end ml-auto">
            {isEditing ? (
              <>
                <button onClick={handleSave} className="text-green-500 hover:text-green-700 cursor-pointer">
                  <Check size={18} />
                </button>
                <button onClick={() => setIsEditing(false)} className="text-gray-500 hover:text-red-500 cursor-pointer">
                  <X size={18} />
                </button>
              </>
            ) : (
              <button onClick={() => setIsEditing(true)} className="text-gray-500 hover:text-blue-500 cursor-pointer">
                <Edit size={18} />
              </button>
            )}
            <button
              onClick={() => removeComment(comment.id)}
              className="text-gray-500 hover:text-red-500 cursor-pointer"
            >
              <Trash2 size={18} />
            </button>
          </div>
        </div>

        {/* Modo de edición */}
        {isEditing ? (
          <textarea
            className="border border-gray-300 rounded-md p-2 mt-4 w-full"
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          />
        ) : (
          <p className="font-roboto text-[#4B5565] font-normal text-[13px] md:text-[14px] mt-4 w-[95%] leading-[20px]">
            {comment.content}
          </p>
        )}
      </div>
    </div>
  );
};

export default CommentCard;

