import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";
import ThemeSwitcher from "@components/ThemeSwitcher";

export const metadata = {
  title: "promptopia",
  description: "Discover & Share AI Prompts",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main min-h-screen bg-gradient-to-br from-white via-gray-100 to-gray-200 text-black dark:from-neutral-900 dark:via-neutral-950 dark:to-black dark:text-white">
            <div className="gradient" />
          </div>
  
          <main className="app">
            <Nav />
            <ThemeSwitcher />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
