import { auth } from "@/auth";

const page = async () => {
  const session = await auth();
  return <div>{JSON.stringify(session?.user) || "No user"}</div>;
};

export default page;
