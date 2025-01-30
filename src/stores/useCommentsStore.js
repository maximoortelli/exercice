import { create } from "zustand";
import Lucas from "../assets/lucas.svg";
import Eva from "../assets/eva.svg";
import Ema from "../assets/ema.png";

export const useCommentsStore = create((set) => ({
  comments: [
    {
      id: 1,
      name: "Lucas Larrea",
      avatar: Lucas,
      date: "Hoy",
      content:
        "finibus, lectus quis aliquam scelerisque, quam mi venenatis risus, id commodo ex elit in augue. Vestibulum vel tincidunt est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus sit amet auctor dolor, sit amet facilisis felis. In quis tristique sapien.",
    },
    {
      id: 2,
      name: "Eva Lopez",
      avatar: Eva,
      date: "Ayer",
      content:
        "finibus, lectus quis aliquam scelerisque, quam mi venenatis risus, id commodo ex elit in augue. Vestibulum vel tincidunt est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus sit amet auctor dolor, sit amet facilisis felis. In quis tristique sapien.",
    },
    {
      id: 3,
      name: "Emma Ramirez",
      avatar: Ema,
      date: "08/11/2023",
      content:
        "finibus, lectus quis aliquam scelerisque, quam mi venenatis risus, id commodo ex elit in augue. Vestibulum vel tincidunt est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus sit amet auctor dolor, sit amet facilisis felis. In quis tristique sapien.",
    },
    {
      id: 4,
      name: "Emma Ramirez",
      avatar: Ema,
      date: "08/11/2023",
      content:
        "finibus, lectus quis aliquam scelerisque, quam mi venenatis risus, id commodo ex elit in augue. Vestibulum vel tincidunt est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus sit amet auctor dolor, sit amet facilisis felis. In quis tristique sapien.",
    },
    {
      id: 5,
      name: "Emma Ramirez",
      avatar: Ema,
      date: "08/11/2023",
      content:
        "finibus, lectus quis aliquam scelerisque, quam mi venenatis risus, id commodo ex elit in augue. Vestibulum vel tincidunt est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus sit amet auctor dolor, sit amet facilisis felis. In quis tristique sapien.",
    },
    {
      id: 6,
      name: "Emma Ramirez",
      avatar: Ema,
      date: "08/11/2023",
      content:
        "finibus, lectus quis aliquam scelerisque, quam mi venenatis risus, id commodo ex elit in augue. Vestibulum vel tincidunt est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus sit amet auctor dolor, sit amet facilisis felis. In quis tristique sapien.",
    },
    {
      id: 7,
      name: "Emma Ramirez",
      avatar: Ema,
      date: "08/11/2023",
      content:
        "finibus, lectus quis aliquam scelerisque, quam mi venenatis risus, id commodo ex elit in augue. Vestibulum vel tincidunt est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus sit amet auctor dolor, sit amet facilisis felis. In quis tristique sapien.",
    },
    {
      id: 8,
      name: "Emma Ramirez",
      avatar: Ema,
      date: "08/11/2023",
      content:
        "finibus, lectus quis aliquam scelerisque, quam mi venenatis risus, id commodo ex elit in augue. Vestibulum vel tincidunt est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus sit amet auctor dolor, sit amet facilisis felis. In quis tristique sapien.",
    },
    {
      id: 9,
      name: "Emma Ramirez",
      avatar: Ema,
      date: "08/11/2023",
      content:
        "finibus, lectus quis aliquam scelerisque, quam mi venenatis risus, id commodo ex elit in augue. Vestibulum vel tincidunt est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus sit amet auctor dolor, sit amet facilisis felis. In quis tristique sapien.",
    },
    {
      id: 10,
      name: "Emma Ramirez",
      avatar: Ema,
      date: "08/11/2023",
      content:
        "finibus, lectus quis aliquam scelerisque, quam mi venenatis risus, id commodo ex elit in augue. Vestibulum vel tincidunt est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus sit amet auctor dolor, sit amet facilisis felis. In quis tristique sapien.",
    },
  ],
  removeComment: (id) =>
    set((state) => ({
      comments: state.comments.filter((comment) => comment.id !== id),
    })),

  updateComment: (id, newContent) =>
    set((state) => ({
      comments: state.comments.map((comment) =>
        comment.id === id ? { ...comment, content: newContent } : comment
      ),
    })),
}));
