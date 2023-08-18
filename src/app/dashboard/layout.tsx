export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div>SHARED HEADER</div>

      {children}
    </section>
  );
}
