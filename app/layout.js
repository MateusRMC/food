import "./styles.scss";

export const metadata = {
  title: "Food tracker",
  description: "Managing my food",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="main">{children}</div>
      </body>
    </html>
  );
}
