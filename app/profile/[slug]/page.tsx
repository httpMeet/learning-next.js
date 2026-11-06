import { users } from "@/src/data/users";

type ProfilePageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProfilePage({params}: ProfilePageProps) {
  const { slug } = await params;

  const user = users.find((u) => u.slug === slug);

  if (!user) {
    return (
      <div className="min-h-screen bg-[#0b1120] flex items-center justify-center p-6">
        <div className="bg-[#151e30] border border-gray-700 rounded-2xl p-10 text-center shadow-xl max-w-md w-full">
          <div className="w-16 h-16 rounded-full bg-red-500/10 text-red-400 flex items-center justify-center text-3xl mx-auto mb-5">
            !
          </div>

          <h1 className="text-2xl font-bold text-white">
            User Not Found
          </h1>

          <p className="text-gray-400 mt-3">
            The user you are looking for does not exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0b1120] flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-[#151e30] border border-gray-700/60 rounded-2xl shadow-2xl overflow-hidden">
        <div className="h-36 bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700 relative">
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
            <div className="w-24 h-24 rounded-full bg-[#151e30] p-1.5 shadow-xl">
              <div className="w-full h-full rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-3xl font-bold text-blue-300">
                {user.name.charAt(0)}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-16 pb-8 px-8 text-center">

          <h1 className="text-2xl font-bold text-white">
            {user.name}
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            @{user.slug}
          </p>

          <div className="w-16 h-1 bg-blue-500 rounded-full mx-auto my-6" />

          <div className="text-left bg-[#0b1120] border border-gray-700/60 rounded-xl p-4 mb-4">
            <p className="text-xs uppercase tracking-wider font-semibold text-gray-500">
              Email Address
            </p>

            <p className="text-gray-200 mt-2 break-all">
              {user.email}
            </p>
          </div>

          <div className="text-left bg-[#0b1120] border border-gray-700/60 rounded-xl p-4">
            <p className="text-xs uppercase tracking-wider font-semibold text-gray-500">
              About Me
            </p>

            <p className="text-gray-300 mt-2 leading-relaxed">
              {user.bio}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
