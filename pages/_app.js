import { NextUIProvider } from "@nextui-org/react";
import "../styles/globals.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "../utils/fontawesome";
import { SidebarProvider } from "../contexts/SidebarContext"; // Import SidebarProvider
import { SnackbarProvider } from "notistack";
import { UserProvider } from '../contexts/UserContext';
import { SkeletonTheme } from 'react-loading-skeleton';
import PrelineScript from "../components/PrelineScript";
import {Provider} from 'react-redux'
import store
 from "../redux/Store";
function MyApp({ Component, pageProps }) {

  return (
    <Provider  store={store}>
      <SkeletonTheme>

     
      <SnackbarProvider
        autoHideDuration={1500}
        maxSnack={2}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        
          <NextUIProvider>
          <UserProvider>
            <SidebarProvider>
          
              <PrelineScript />
              <Component {...pageProps} />
         
            </SidebarProvider>
            </UserProvider>
          </NextUIProvider>
      
      </SnackbarProvider>
      </SkeletonTheme>
    </Provider>
  );
}

export default MyApp;
