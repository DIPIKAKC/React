import { NavLink, useNavigate } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav className="w-full px-30 py-3 flex gap-4 justify-end shadow-lg">
        <NavLink to={'/posts'} className="px-5 py-1 rounded-lg text-pink-300 font-semibold border-1 border-pink-300">Posts</NavLink>
        <NavLink to={'/posts/add-posts'} className="bg-pink-300 px-5 py-1 rounded-lg text-white">Add Post</NavLink>
      </nav>
    </div>
  );
}
