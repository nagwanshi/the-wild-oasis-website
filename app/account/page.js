import { auth } from "../_lib/auth";

export const metadata = {
  title: "Guest area",
};

export default async function Home() {
  const session = await auth();
  return (
    <div>
      <h2 className="font-semibold text-2xl text-accent-400 mb-4">
        {session.user.name}
      </h2>
    </div>
  );
}
