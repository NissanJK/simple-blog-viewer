import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Profile() {
  const { isAuthenticated, getUser } = getKindeServerSession();
  const isAuth = await isAuthenticated();
  if (!isAuth) {
    redirect("/api/auth/login");
  }

  const user = await getUser();

  return (
    <div className="container mx-auto p-6 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden text-black">
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">Profile</h1>
          <div className="flex items-center space-x-4 mb-6">
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img
                  src={user.picture || ""}
                  alt="User Avatar"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold">
                {user.given_name} {user.family_name}
              </h2>
              <p className="text-gray-600">{user.email}</p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">Personal Information</h3>
              <div className="space-y-2">
                <p>
                  <span className="font-medium">First Name:</span> {user.given_name}
                </p>
                <p>
                  <span className="font-medium">Last Name:</span> {user.family_name}
                </p>
                <p>
                  <span className="font-medium">Email:</span> {user.email}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}