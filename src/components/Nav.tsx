import { SignInButton, UserButton, useAuth } from "@clerk/clerk-react";

export default function Nav() {
  const { isSignedIn } = useAuth();

  return (
    <nav style={{
      display: "flex",
      borderBottom: "1px solid #bbb",
      justifyContent: "space-between",
      alignItems: "center",
      height: "5vh",
      paddingInline: "2rem"
    }}>
      <span style={{
        fontWeight: "bold"
      }}>OSH</span>

    <h1>Open Science Projects</h1>
    { isSignedIn
      ? <UserButton 
          afterSignOutUrl="/"
        />
      : <SignInButton
          mode="modal"
          afterSignUpUrl="/onboarding"
        >
          Login
        </SignInButton>
    }
    </nav>
  )
}
