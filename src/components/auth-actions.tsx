import { SignInButton, SignOutButton, SignedIn, SignedOut } from "@clerk/nextjs";

export const AuthActions = () => {
    return (
        <div className="fixed top-5 right-5 z-50">
            <SignedOut>
                <SignInButton mode="modal" >
                    <button className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer">
                        سجّل دخولك الآن
                    </button>
                </SignInButton>
            </SignedOut>
            <SignedIn>
                <SignOutButton>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer ">
                        سجّل خروج
                    </button>
                </SignOutButton>
            </SignedIn>

        </div>
    );
}   