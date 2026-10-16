import React, { useEffect } from "react";
// import ReactDOM from reactdom;

const LoginPage = () => {
  // Redirect to Google login after fetching the URL from backend
  const handleGoogleLogin = async () => {
    try {
      const response = await fetch(
        "http://localhost:9494/auth/google-sign-in",
        {
          method: "GET",
          headers: {
            device: "1234", // Custom header for device
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch Google login URL");
      }

      const data = await response.json(); // Parse the JSON response
      const googleLoginUrl = data.url;

      // if (googleLoginUrl) {
      // Redirect to the Google login URL
      // window.location.href = googleLoginUrl;
      window.location.assign(googleLoginUrl);
      // } else {
      //   console.error("No Google login URL received");
      // }
    } catch (error) {
      console.error("Error during Google login:", error);
    }
  };

  // Handle the callback after Google redirects back to the app
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    const state = urlParams.get("state");

    if (code && state) {
      // Call your backend with the received `code` and `state`
      const fetchCallback = async () => {
        try {
          const response = await fetch(
            "http://localhost:9494/auth/google-callback",
            {
              method: "POST", // Assuming POST method for callback
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ code, state }),
            }
          );

          if (response.ok) {
            const data = await response.json();
            console.log("User authenticated successfully", data.status);
            // You can redirect or update the UI after successful authentication
          } else {
            console.error("Failed to handle Google callback");
          }
        } catch (error) {
          console.error("Error during Google callback:", error);
        }
      };

      fetchCallback();
    }
  }, []); // The `useEffect` runs once on component mount

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Welcome to My App</h1>
      <p style={styles.subtitle}>Log in to access your dashboard</p>
      <button style={styles.googleButton} onClick={handleGoogleLogin}>
        <img
          src="https://developers.google.com/identity/images/g-logo.png"
          alt="Google Logo"
          style={styles.googleIcon}
        />
        Sign in with Google
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "1rem",
    color: "#333",
  },
  subtitle: {
    fontSize: "1rem",
    marginBottom: "2rem",
    color: "#666",
  },
  googleButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4285F4",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    textDecoration: "none",
  },
  googleIcon: {
    width: "20px",
    height: "20px",
    marginRight: "10px",
  },
};

export default LoginPage;
