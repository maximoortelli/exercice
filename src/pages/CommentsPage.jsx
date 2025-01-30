import { useCommentsStore } from "../stores/useCommentsStore";
import CommentCard from "../components/CommentCard";
import Logo from "../assets/Logo.svg";

const CommentsPage = () => {
  const { comments } = useCommentsStore();

  return (
    <div className="min-h-screen flex flex-col items-center">
      <header className="bg-white p-4 w-full flex items-center justify-center fixed top-0 left-0 z-50 gap-2 ">
        <img src={Logo} alt="Logo" className="ml-5 w-[181px]" />
      </header>

      <div className="bg-[#EEF2F6] flex items-center justify-center w-[97%] h-auto rounded-2xl py-8">
        <div className="md:max-w-2xl space-y-4 flex flex-col items-center justify-center pt-20">
          {comments.length > 0 ? (
            comments.map((comment) => (
              <CommentCard key={comment.id} comment={comment} />
            ))
          ) : (
            <p className="text-gray-600 text-center">No hay comentarios aún.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommentsPage;


