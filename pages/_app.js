import { NextUIProvider } from "@nextui-org/react";
import { useEffect } from "react";
import "../styles/globals.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "../utils/fontawesome";
import { SidebarProvider } from "../contexts/SidebarContext"; // Import SidebarProvider
import { SnackbarProvider } from "notistack";
import PrelineScript from "../components/PrelineScript";
import { Auth0Provider } from "@auth0/auth0-react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    // ... any setup you need
  }, []);

  const authConfig = {
    domain: "dev-yt7nl1nw0qctdszp.us.auth0.com",
    clientId: "OtG2A4ftdRYrcOe97G15NfGvNF0ebvSW",
    redirectUri: typeof window !== "undefined" && window.location.origin,
  };
  return (
    <>
      <SnackbarProvider
        autoHideDuration={1500}
        maxSnack={2}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Auth0Provider {...authConfig}>
          <NextUIProvider>
            <SidebarProvider>
              <PrelineScript />
              <Component {...pageProps} />
            </SidebarProvider>
          </NextUIProvider>
        </Auth0Provider>
      </SnackbarProvider>
    </>
  );
}

export default MyApp;
