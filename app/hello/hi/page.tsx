import FilterUsers from "@/components/FilterUsers";
import { getUsers } from "@/src/lib/users";

export default async function Hi() {
  const users = await getUsers();

  return (
    <div>
      <FilterUsers users={users} />
    </div>
  );
}
