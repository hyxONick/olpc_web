import SideNav from "../_components/side-nav";

const DashBoardLayout = async (props: { children: React.ReactNode }) => {
  const { children } = props;

  return (
    <section className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </section>
  )
}

export default DashBoardLayout;