"use client";

import { useState } from "react";
import Link from "next/link";
import SearchButton from "@/components/SearchButton";
import { users } from "@/src/data/users";

export default function SearchPage() {
  const [search, setSearch] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [searched, setSearched] = useState(false);

  const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleSearch = () => {
    setSearchTerm(search.trim());
    setSearched(search.trim() !== "");
  };

  return (
    <div className="min-h-screen bg-[#0b1120] px-5 py-12 sm:px-8">
      <div className="max-w-5xl mx-auto">

        <div className="mb-10">
          <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-2">
            User Directory
          </p>

          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Find People
          </h1>

          <p className="text-gray-400 mt-2">
            Search and explore user profiles.
          </p>
        </div>

        <div className="bg-[#151e30] border border-gray-700/60 rounded-2xl p-5 sm:p-6 shadow-lg mb-8">

          <label
            htmlFor="user-search"
            className="block text-sm font-semibold text-gray-300 mb-2"
          >
            Search Users
          </label>

          <div className="flex flex-col sm:flex-row gap-3">
            <input
              id="user-search"
              className="w-full bg-[#0b1120] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              type="text"
              placeholder="Enter a user's name..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSearch();
              }}
            />

            <SearchButton onSearch={handleSearch} />
          </div>
        </div>


        {searched && (
          <div>
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-xl font-bold text-white">
                Search Results
              </h2>

              <span className="text-sm text-gray-400">
                {filteredUsers.length}{" "}
                {filteredUsers.length === 1 ? "user" : "users"} found
              </span>
            </div>

            {filteredUsers.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredUsers.map((user) => (
                  <div
                    key={user.id}
                    className="bg-[#151e30] border border-gray-700/60 rounded-xl p-5 shadow-sm hover:shadow-xl hover:border-blue-500/50 transition duration-200"
                  >

                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 shrink-0 rounded-full bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400 text-lg font-bold">
                        {user.name.charAt(0)}
                      </div>

                      <div className="min-w-0">
                        <h3 className="font-semibold text-gray-100 truncate">
                          {user.name}
                        </h3>

                        <p className="text-xs text-gray-500">
                          @{user.slug}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm text-gray-400 mb-5 break-all">
                      {user.email}
                    </p>

                    <Link
                      href={`/profile/${user.slug}`}
                      className="block text-center w-full bg-blue-500/10 text-blue-400 border border-blue-500/20 font-semibold text-sm py-2.5 rounded-lg hover:bg-blue-600 hover:text-white transition duration-200"
                    >
                      View Profile →
                    </Link>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-[#151e30] border border-gray-700/60 rounded-xl p-10 text-center">
                <h3 className="text-lg font-semibold text-white">
                  No users found
                </h3>

                <p className="text-gray-400 text-sm mt-2">
                  Try searching with a different name.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
