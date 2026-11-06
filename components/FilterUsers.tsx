"use client";

import { useState } from "react";

type User = {
  id: number;
  name: string;
  username: string;
};

export default function FilterUsers({ users }: { users: User[] }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = users.filter((user) => user.name.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="min-h-screen bg-[#0b1120] px-5 py-12 sm:px-8">
      <div className="max-w-5xl mx-auto">

        <div className="mb-8">
          <p className="text-sm font-semibold text-blue-400 uppercase tracking-widest mb-2">
            User Directory
          </p>

          <h1 className="text-3xl sm:text-4xl font-bold text-white">
            Explore Users
          </h1>

          <p className="text-gray-400 mt-2">
            Browse and search through our users.
          </p>
        </div>

        <div className="bg-[#151e30] border border-gray-700/60 rounded-2xl p-5 mb-8">
          <label className="block text-sm font-semibold text-gray-300 mb-3">
            Search by Name
          </label>

          <input
            type="text"
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-[#0b1120] border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-500 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
          />
        </div>

        <div className="flex justify-between items-center mb-5">
          <h2 className="text-xl font-bold text-white">
            All Users
          </h2>

          <span className="text-sm text-gray-400">
            {filteredUsers.length} users found
          </span>
        </div>

        {filteredUsers.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredUsers.map((user) => (
              <div
                key={user.id}
                className="bg-[#151e30] border border-gray-700/60 rounded-xl p-5 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5 transition duration-200"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400 text-lg font-bold">
                    {user.name.charAt(0)}
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-white font-semibold truncate">
                      {user.name}
                    </h3>

                    <p className="text-sm text-gray-500 truncate">
                      @{user.username}
                    </p>
                  </div>

                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-[#151e30] border border-gray-700/60 rounded-xl p-10 text-center">
            <h3 className="text-lg font-semibold text-white">
              No users found!
            </h3>

            <p className="text-gray-400 text-sm mt-2">
              Try searching with a different name.
            </p>
          </div>
        )}

      </div>
    </div>
  );
}
