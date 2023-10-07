export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex items-start">
      {/* the sidebar place */}
      {/* <SideBar /> */}
      <div className="">{children}</div>
    </main>
  );
}
