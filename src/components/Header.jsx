import Link from "next/link";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Header() {
    const { isAuthenticated, getUser } = getKindeServerSession();
    const isAuth = await isAuthenticated();
    const user = await getUser();

    return (
        <header className="sticky top-0 z-50 bg-gradient-to-l from-blue-600 to-purple-600 shadow-lg">
            <div className="container mx-auto flex justify-between items-center p-4">
                <div className="btn btn-outline btn-circle italic text-3xl text-white">
                    BV
                </div>
                <div className="flex items-center space-x-4">
                    <nav className="flex items-center space-x-6">
                        <Link href="/" className="text-white text-lg font-semibold hover:text-gray-200 transition duration-300">
                            Home
                        </Link>
                        <Link href="/profile" className="text-white text-lg font-semibold hover:text-gray-200 transition duration-300">
                            Profile
                        </Link>
                    </nav>
                    {isAuth ? (
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} className="flex items-center space-x-2 cursor-pointer">
                                <div className="avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user.picture || ""} alt="User Avatar" />
                                    </div>
                                </div>
                                <span className="text-white text-lg font-semibold">{user.given_name}</span>
                            </div>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-white rounded-box w-52 mt-2">
                                <li>
                                    <a href="/api/auth/logout" className="text-gray-700 hover:bg-gray-100">Logout</a>
                                </li>
                            </ul>
                        </div>
                    ) : (
                        <a href="/api/auth/login" className="btn btn-outline text-white">
                            Login
                        </a>
                    )}
                </div>
            </div>
        </header>
    );
}