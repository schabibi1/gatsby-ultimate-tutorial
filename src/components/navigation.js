import * as React from "react";
import { Link } from "gatsby";

const Navigation = () => (
  <header class="w-full h-24 bg-[#f7f6fd]">
    <div class="container h-full mx-auto flex items-center justify-between">
      <Link to="/">
        <h1 class="text-[#50b0ae] text-3xl font-bold">Storyblok Gatsby</h1>
      </Link>
      <nav>
        <ul class="flex space-x-8 text-lg font-bold">
          <li>
            <Link to="/blog" class="hover:text-[#50b0ae]">Blog</Link>
          </li>
          <li>
            <Link to="/about" class="hover:text-[#50b0ae]">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

export default Navigation;